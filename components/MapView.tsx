import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Event, EventCategory } from '../types';
import { getCoordinates } from '../utils/geocoding';
import { CATEGORY_TRANSLATIONS } from '../utils/categoryTranslations';

// Fix Leaflet default icon issue with bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface MapViewProps {
    events: Event[];
    onEventClick?: (event: Event) => void;
    currentLanguage: string;
}

/**
 * Southeast Asia bounding box
 * Covers from Myanmar/Bangladesh border to Philippines/Indonesia
 */
const SEA_BOUNDS = L.latLngBounds(
    L.latLng(-11, 92),   // Southwest (Timor-Leste area)
    L.latLng(28, 145)    // Northeast (includes Philippines, extends to Taiwan border)
);

/**
 * Category-based color mapping for markers
 */
const getCategoryColor = (category: EventCategory): string => {
    const colorMap: Partial<Record<EventCategory, string>> = {
        [EventCategory.ALL]: '#3b82f6',
        [EventCategory.TECH_INNOVATION]: '#8b5cf6',
        [EventCategory.FOOD_BEVERAGE]: '#f59e0b',
        [EventCategory.MANUFACTURING]: '#64748b',
        [EventCategory.ICT_TELECOM]: '#06b6d4',
        [EventCategory.CONSTRUCTION]: '#f97316',
        [EventCategory.INDUSTRIAL_MACHINERY]: '#6366f1',
        [EventCategory.AGRICULTURE]: '#10b981',
        [EventCategory.AEROSPACE_DEFENSE]: '#ef4444',
        [EventCategory.FRANCHISING]: '#ec4899',
        [EventCategory.HALAL]: '#14b8a6',
        [EventCategory.GENERAL_TRADE]: '#8b5cf6',
        [EventCategory.REAL_ESTATE]: '#0ea5e9',
        [EventCategory.ENERGY]: '#eab308',
        [EventCategory.MINING_MINERALS]: '#78716c',
        [EventCategory.HOSPITALITY_TOURISM]: '#f43f5e',
        [EventCategory.JEWELRY]: '#d946ef',
        [EventCategory.MEDICAL_PHARMA]: '#22c55e',
        [EventCategory.CONSUMER_ELECTRONICS]: '#8b5cf6',
        [EventCategory.B2B_TRADE]: '#0ea5e9',
        [EventCategory.BUSINESS_SERVICES]: '#64748b',
        [EventCategory.AI_ML]: '#a855f7',
        [EventCategory.LOGISTICS_SHIPPING]: '#475569',
        [EventCategory.GREEN_ENERGY]: '#059669',
        [EventCategory.WATER_TECH]: '#0284c7',
        [EventCategory.FASHION]: '#ec4899',
        [EventCategory.BEAUTY]: '#f472b6',
        [EventCategory.FURNITURE_HOME]: '#f59e0b',
        [EventCategory.FINTECH]: '#10b981',
        [EventCategory.INSURANCE]: '#06b6d4',
        [EventCategory.SCIENCE]: '#6366f1',
        [EventCategory.ANIMALS_PETS]: '#84cc16',
        [EventCategory.ENTERTAINMENT]: '#ec4899',
        [EventCategory.EDUCATION]: '#3b82f6',
        [EventCategory.STARTUP_VC]: '#a855f7',
    };

    return colorMap[category] || '#6b7280';
};

export const MapView = ({ events, onEventClick, currentLanguage }: MapViewProps) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    const markersLayerRef = useRef<L.LayerGroup | null>(null);

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        // Initialize map centered on Southeast Asia with bounds restriction
        const map = L.map(mapRef.current, {
            center: [8, 110], // Centered on SEA region
            zoom: 4,
            zoomControl: true,
            maxBounds: SEA_BOUNDS,
            maxBoundsViscosity: 1.0,
            minZoom: 4,
            maxZoom: 18,
        });

        // Use CartoDB Voyager tiles with English labels
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20,
        }).addTo(map);

        // Create a layer group for markers
        markersLayerRef.current = L.layerGroup().addTo(map);

        mapInstanceRef.current = map;

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (!mapInstanceRef.current || !markersLayerRef.current) return;

        const map = mapInstanceRef.current;
        const markersLayer = markersLayerRef.current;

        // Clear existing markers
        markersLayer.clearLayers();

        // Group events by city coordinates (using lat,lng as key)
        const eventsByLocation: Record<string, { events: Event[]; coords: { lat: number; lng: number; city: string; country: string } }> = {};

        events.forEach((event) => {
            const coords = getCoordinates(event.location);
            if (coords) {
                const key = `${coords.lat},${coords.lng}`;
                if (!eventsByLocation[key]) {
                    eventsByLocation[key] = { events: [], coords };
                }
                eventsByLocation[key].events.push(event);
            }
        });

        // Add markers for each location
        Object.values(eventsByLocation).forEach(({ events: locationEvents, coords }) => {
            // Create custom colored marker based on first event's category
            const color = getCategoryColor(locationEvents[0].category);
            const customIcon = L.divIcon({
                className: 'custom-marker',
                html: `
          <div style="
            background-color: ${color};
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 12px;
            cursor: pointer;
          ">
            ${locationEvents.length}
          </div>
        `,
                iconSize: [30, 30],
                iconAnchor: [15, 15],
            });

            const marker = L.marker([coords.lat, coords.lng], { icon: customIcon });

            // Create popup content with clickable events
            const popupContent = document.createElement('div');
            popupContent.style.cssText = 'max-width: 300px; min-width: 200px;';

            const header = document.createElement('h3');
            header.style.cssText = 'margin: 0 0 8px 0; font-size: 14px; font-weight: bold;';
            header.textContent = `${coords.city}, ${coords.country}`;
            popupContent.appendChild(header);

            const countText = document.createElement('p');
            countText.style.cssText = 'margin: 0 0 8px 0; font-size: 12px; color: #666;';
            countText.textContent = `${locationEvents.length} event(s)`;
            popupContent.appendChild(countText);

            const eventList = document.createElement('div');
            eventList.style.cssText = 'max-height: 200px; overflow-y: auto;';

            locationEvents.slice(0, 5).forEach(event => {
                const category = CATEGORY_TRANSLATIONS[currentLanguage as keyof typeof CATEGORY_TRANSLATIONS]?.[event.category as keyof typeof CATEGORY_TRANSLATIONS['en']] || event.category;

                const eventItem = document.createElement('div');
                eventItem.style.cssText = 'margin-bottom: 8px; padding: 8px; background: #f3f4f6; border-radius: 4px; cursor: pointer; transition: background 0.2s;';
                eventItem.setAttribute('data-event-id', event.id);

                eventItem.addEventListener('mouseenter', () => {
                    eventItem.style.background = '#e5e7eb';
                });
                eventItem.addEventListener('mouseleave', () => {
                    eventItem.style.background = '#f3f4f6';
                });

                // Event name row
                const eventName = document.createElement('div');
                eventName.style.cssText = 'font-weight: 600; font-size: 13px; margin-bottom: 4px; color: #1f2937;';
                eventName.textContent = event.name;
                eventItem.appendChild(eventName);

                // Event meta (date + category)
                const eventMeta = document.createElement('div');
                eventMeta.style.cssText = 'font-size: 11px; color: #6b7280; margin-bottom: 6px;';
                eventMeta.textContent = `${event.date} • ${category}`;
                eventItem.appendChild(eventMeta);

                // Action buttons row
                const actionsRow = document.createElement('div');
                actionsRow.style.cssText = 'display: flex; gap: 8px; align-items: center;';

                // Register button - triggers registration modal
                const registerBtn = document.createElement('button');
                registerBtn.style.cssText = 'background: #16a34a; color: white; border: none; padding: 4px 10px; border-radius: 4px; font-size: 10px; font-weight: 600; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;';
                registerBtn.textContent = 'Register';
                registerBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (onEventClick) {
                        onEventClick(event);
                    }
                });
                registerBtn.addEventListener('mouseenter', () => {
                    registerBtn.style.background = '#15803d';
                });
                registerBtn.addEventListener('mouseleave', () => {
                    registerBtn.style.background = '#16a34a';
                });
                actionsRow.appendChild(registerBtn);

                // Website link - opens event's external website
                if (event.website) {
                    // Clean up the website URL (remove reference numbers like [1])
                    const cleanUrl = event.website.replace(/\s*\[\d+\]\s*$/, '').trim();

                    const websiteLink = document.createElement('a');
                    websiteLink.href = cleanUrl;
                    websiteLink.target = '_blank';
                    websiteLink.rel = 'noopener noreferrer';
                    websiteLink.style.cssText = 'font-size: 10px; color: #3b82f6; text-decoration: none; font-weight: 500;';
                    websiteLink.textContent = '↗ Event Website';
                    websiteLink.addEventListener('click', (e) => {
                        e.stopPropagation(); // Prevent triggering registration
                    });
                    websiteLink.addEventListener('mouseenter', () => {
                        websiteLink.style.textDecoration = 'underline';
                    });
                    websiteLink.addEventListener('mouseleave', () => {
                        websiteLink.style.textDecoration = 'none';
                    });
                    actionsRow.appendChild(websiteLink);
                }

                eventItem.appendChild(actionsRow);
                eventList.appendChild(eventItem);
            });

            if (locationEvents.length > 5) {
                const moreText = document.createElement('p');
                moreText.style.cssText = 'font-size: 11px; color: #6b7280; margin-top: 4px;';
                moreText.textContent = `+${locationEvents.length - 5} more events`;
                eventList.appendChild(moreText);
            }

            popupContent.appendChild(eventList);

            marker.bindPopup(popupContent, {
                maxWidth: 320,
                className: 'custom-popup',
            });

            marker.addTo(markersLayer);
        });

    }, [events, onEventClick, currentLanguage]);

    return (
        <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 200px)' }}>
            <div ref={mapRef} style={{ width: '100%', height: '100%', borderRadius: '12px' }} />
            <style>{`
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .custom-popup .leaflet-popup-tip {
          background: white;
        }
        .custom-marker {
          background: transparent;
          border: none;
        }
      `}</style>
        </div>
    );
};

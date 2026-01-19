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

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        // Initialize map centered on Southeast Asia
        const map = L.map(mapRef.current, {
            center: [13.7563, 100.5018], // Bangkok (center of SEA)
            zoom: 5,
            zoomControl: true,
        });

        // Use CartoDB Voyager tiles with English labels
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20,
        }).addTo(map);

        mapInstanceRef.current = map;

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (!mapInstanceRef.current) return;

        const map = mapInstanceRef.current;

        // Clear existing markers
        map.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        // Group events by location for clustering
        const eventsByLocation: Record<string, Event[]> = {};

        events.forEach((event) => {
            const coords = getCoordinates(event.location);
            if (coords) {
                if (!eventsByLocation[event.location]) {
                    eventsByLocation[event.location] = [];
                }
                eventsByLocation[event.location].push(event);
            }
        });

        // Add markers for each location
        Object.entries(eventsByLocation).forEach(([location, locationEvents]) => {
            const coords = getCoordinates(location);
            if (!coords) return;

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
          ">
            ${locationEvents.length}
          </div>
        `,
                iconSize: [30, 30],
                iconAnchor: [15, 15],
            });

            const marker = L.marker([coords.lat, coords.lng], { icon: customIcon });

            // Create popup content
            const popupContent = `
        <div style="max-width: 300px; min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold;">${coords.city}, ${coords.country}</h3>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #666;">${locationEvents.length} event(s)</p>
          <div style="max-height: 200px; overflow-y: auto;">
            ${locationEvents.slice(0, 5).map(event => {
                const category = CATEGORY_TRANSLATIONS[currentLanguage as any]?.[event.category] || event.category;
                return `
              <div style="margin-bottom: 8px; padding: 8px; background: #f3f4f6; border-radius: 4px; cursor: pointer;" data-event-id="${event.id}">
                <div style="font-weight: 600; font-size: 13px; margin-bottom: 4px;">${event.name}</div>
                <div style="font-size: 11px; color: #6b7280;">${event.date} • ${category}</div>
              </div>
            `;
            }).join('')}
            ${locationEvents.length > 5 ? `<p style="font-size: 11px; color: #6b7280; margin-top: 4px;">+${locationEvents.length - 5} more events</p>` : ''}
          </div>
        </div>
      `;

            marker.bindPopup(popupContent, {
                maxWidth: 320,
                className: 'custom-popup',
            });

            // Handle event clicks in popup
            marker.on('popupopen', () => {
                const popup = marker.getPopup();
                if (popup) {
                    const popupElement = popup.getElement();
                    if (popupElement) {
                        popupElement.querySelectorAll('[data-event-id]').forEach(el => {
                            el.addEventListener('click', () => {
                                const eventId = el.getAttribute('data-event-id');
                                const event = events.find(e => e.id === eventId);
                                if (event && onEventClick) {
                                    onEventClick(event);
                                }
                            });
                        });
                    }
                }
            });

            marker.addTo(map);
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
      `}</style>
        </div>
    );
};

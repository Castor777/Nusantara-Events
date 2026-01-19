import { Language } from '../types';

/**
 * Geocoding data for Southeast Asian event locations
 * Uses city-level matching to support all location format variations
 */

export interface CityCoordinates {
    lat: number;
    lng: number;
    city: string;
    country: string;
}

/**
 * Comprehensive city coordinates database for Southeast Asia
 * Includes all cities found in the 205 unique event locations
 */
const CITY_DATABASE: Record<string, CityCoordinates> = {
    // Singapore
    'singapore': { lat: 1.3521, lng: 103.8198, city: 'Singapore', country: 'Singapore' },

    // Malaysia
    'kuala lumpur': { lat: 3.1390, lng: 101.6869, city: 'Kuala Lumpur', country: 'Malaysia' },
    'johor bahru': { lat: 1.4927, lng: 103.7414, city: 'Johor Bahru', country: 'Malaysia' },
    'petaling jaya': { lat: 3.1073, lng: 101.6067, city: 'Petaling Jaya', country: 'Malaysia' },
    'shah alam': { lat: 3.0733, lng: 101.5185, city: 'Shah Alam', country: 'Malaysia' },
    'penang': { lat: 5.4164, lng: 100.3327, city: 'Penang', country: 'Malaysia' },
    'bukit jalil': { lat: 3.0556, lng: 101.6913, city: 'Bukit Jalil', country: 'Malaysia' },

    // Thailand
    'bangkok': { lat: 13.7563, lng: 100.5018, city: 'Bangkok', country: 'Thailand' },
    'chiang mai': { lat: 18.7883, lng: 98.9853, city: 'Chiang Mai', country: 'Thailand' },

    // Indonesia
    'jakarta': { lat: -6.2088, lng: 106.8456, city: 'Jakarta', country: 'Indonesia' },
    'bsd city': { lat: -6.3025, lng: 106.6523, city: 'BSD City', country: 'Indonesia' },
    'tangerang': { lat: -6.1781, lng: 106.6319, city: 'Tangerang', country: 'Indonesia' },
    'surabaya': { lat: -7.2575, lng: 112.7521, city: 'Surabaya', country: 'Indonesia' },
    'kemayoran': { lat: -6.1533, lng: 106.8450, city: 'Jakarta', country: 'Indonesia' },

    // Vietnam
    'ho chi minh city': { lat: 10.8231, lng: 106.6297, city: 'Ho Chi Minh City', country: 'Vietnam' },
    'hanoi': { lat: 21.0285, lng: 105.8542, city: 'Hanoi', country: 'Vietnam' },
    'da nang': { lat: 16.0544, lng: 108.2022, city: 'Da Nang', country: 'Vietnam' },
    'quy nhon': { lat: 13.7766, lng: 109.2234, city: 'Quy Nhon', country: 'Vietnam' },
    'da lat': { lat: 11.9404, lng: 108.4583, city: 'Da Lat', country: 'Vietnam' },
    'vietnam': { lat: 10.8231, lng: 106.6297, city: 'Ho Chi Minh City', country: 'Vietnam' }, // Fallback for "Ho Chi Minh City, Vietnam"

    // Cambodia
    'phnom penh': { lat: 11.5564, lng: 104.9282, city: 'Phnom Penh', country: 'Cambodia' },

    // Philippines
    'manila': { lat: 14.5995, lng: 120.9842, city: 'Manila', country: 'Philippines' },
    'pasay': { lat: 14.5378, lng: 121.0014, city: 'Pasay', country: 'Philippines' },
    'pasay city': { lat: 14.5378, lng: 121.0014, city: 'Pasay', country: 'Philippines' },
    'taguig': { lat: 14.5176, lng: 121.0509, city: 'Taguig', country: 'Philippines' },
    'taguig (metro manila)': { lat: 14.5176, lng: 121.0509, city: 'Taguig', country: 'Philippines' },
    'cebu': { lat: 10.3157, lng: 123.8854, city: 'Cebu', country: 'Philippines' },
    'bgc': { lat: 14.5547, lng: 121.0509, city: 'BGC', country: 'Philippines' },
    'metro manila': { lat: 14.5995, lng: 120.9842, city: 'Metro Manila', country: 'Philippines' },
    'pasay (metro manila)': { lat: 14.5378, lng: 121.0014, city: 'Pasay', country: 'Philippines' },

    // Laos
    'vientiane': { lat: 17.9757, lng: 102.6331, city: 'Vientiane', country: 'Laos' },
    'luang prabang': { lat: 19.8857, lng: 102.1347, city: 'Luang Prabang', country: 'Laos' },

    // Myanmar
    'yangon': { lat: 16.8661, lng: 96.1951, city: 'Yangon', country: 'Myanmar' },
    'nay pyi taw': { lat: 19.7633, lng: 96.0785, city: 'Nay Pyi Taw', country: 'Myanmar' },

    // Brunei
    'bandar seri begawan': { lat: 4.9031, lng: 114.9398, city: 'Bandar Seri Begawan', country: 'Brunei' },

    // China (for cross-border events)
    'nanning': { lat: 22.8170, lng: 108.3665, city: 'Nanning', country: 'China' },
    'shanghai (china)': { lat: 31.2304, lng: 121.4737, city: 'Shanghai', country: 'China' },

    // Hanoi/Singapore hybrid events
    'hanoi/singapore': { lat: 21.0285, lng: 105.8542, city: 'Hanoi', country: 'Vietnam' },
};

/**
 * Venue name to city mapping for locations with numeric codes or abbreviated names
 * Handles cases like "45980, Sands Expo & Convention Centre"
 */
const VENUE_TO_CITY: Record<string, string> = {
    'sands expo': 'singapore',
    'marina bay sands': 'singapore',
    'singapore expo': 'singapore',
    'mitec': 'kuala lumpur',
    'klcc': 'kuala lumpur',
    'secc': 'ho chi minh city',
    'bitec': 'bangkok',
    'impact': 'bangkok',
    'qsncc': 'bangkok',
    'queen sirikit': 'bangkok',
    'jiexpo': 'jakarta',
    'ice bsd': 'jakarta',
    'jcc': 'jakarta',
    'i.c.e': 'hanoi',
    'ice hanoi': 'hanoi',
    'philippine international convention': 'manila',
    'smx convention': 'manila',
    'wtc metro manila': 'manila',
    'world trade center metro manila': 'manila',
    'lao-itecc': 'vientiane',
    'diamond island': 'phnom penh',
    'yangon convention': 'yangon',
};


/**
 * Extract city name from a location string
 * Handles formats like:
 * - "Marina Bay Sands, Singapore"
 * - "BITEC, Bangkok"
 * - "ICE BSD, Jakarta, Singapore" (takes Jakarta)
 * - "45980, Sands Expo & Convention Centre" (venue code + venue name)
 */
const extractCity = (location: string): string | null => {
    if (!location || location === '—' || location.includes('TBD') || location.includes('TBA')) {
        return null;
    }

    // Split by comma and get the last non-empty part (usually the city)
    const parts = location.split(',').map(p => p.trim()).filter(p => p.length > 0);

    if (parts.length === 0) return null;

    // Try the last part first (most common format: "Venue, City")
    let cityCandidate = parts[parts.length - 1].toLowerCase();

    // Handle special cases with venue codes at the start (e.g., "45687, ...")
    if (/^\d+$/.test(parts[0])) {
        // Skip the number and try the next part (the venue name)
        if (parts.length > 1) {
            const venuePart = parts[1].toLowerCase();
            // Check venue-to-city mapping first
            for (const [venueName, city] of Object.entries(VENUE_TO_CITY)) {
                if (venuePart.includes(venueName)) {
                    return city;
                }
            }
            // Then check if venue contains a known city
            for (const city of Object.keys(CITY_DATABASE)) {
                if (venuePart.includes(city)) {
                    return city;
                }
            }
        }
    }

    // Check if cityCandidate is in our database
    if (CITY_DATABASE[cityCandidate]) {
        return cityCandidate;
    }

    // Try to find a matching city anywhere in the location string
    const locationLower = location.toLowerCase();

    // Sort cities by length (descending) to match longer names first
    // e.g., "ho chi minh city" before "city"
    const sortedCities = Object.keys(CITY_DATABASE).sort((a, b) => b.length - a.length);

    for (const city of sortedCities) {
        if (locationLower.includes(city)) {
            return city;
        }
    }

    // Last resort: check venue name mapping
    for (const [venueName, city] of Object.entries(VENUE_TO_CITY)) {
        if (locationLower.includes(venueName)) {
            return city;
        }
    }

    return null;
};

/**
 * Get coordinates for a given location string
 * Uses city-level matching to handle all venue format variations
 */
export const getCoordinates = (location: string): CityCoordinates | null => {
    const city = extractCity(location);
    if (!city) return null;

    return CITY_DATABASE[city] || null;
};

/**
 * Get all unique cities with their coordinates
 */
export const getAllCities = (): CityCoordinates[] => {
    const seen = new Set<string>();
    return Object.values(CITY_DATABASE).filter(coord => {
        const key = `${coord.city}-${coord.country}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
};

/**
 * Translate city names to the selected language
 * Note: This is a basic implementation - you can expand with full translations
 */
export const translateCity = (city: string, language: Language): string => {
    // For now, return the original city name
    // You can expand this with city name translations if needed
    return city;
};

// Legacy export for backward compatibility
export const CITY_COORDINATES = CITY_DATABASE;

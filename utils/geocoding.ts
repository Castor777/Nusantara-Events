import { Language } from '../types';

/**
 * Geocoding data for Southeast Asian event locations
 * Maps city names to latitude/longitude coordinates for map display
 */

export interface CityCoordinates {
    lat: number;
    lng: number;
    city: string;
    country: string;
}

// Geocoding database for all event locations across Southeast Asia
export const CITY_COORDINATES: Record<string, CityCoordinates> = {
    // Singapore
    'Marina Bay Sands, Singapore': { lat: 1.2834, lng: 103.8607, city: 'Singapore', country: 'Singapore' },
    'Singapore Expo, Singapore': { lat: 1.3340, lng: 103.9618, city: 'Singapore', country: 'Singapore' },
    'Sands Expo, Singapore': { lat: 1.2832, lng: 103.8609, city: 'Singapore', country: 'Singapore' },

    // Malaysia
    'MITEC, Kuala Lumpur': { lat: 3.1885, lng: 101.7186, city: 'Kuala Lumpur', country: 'Malaysia' },
    'KLCC, Kuala Lumpur': { lat: 3.1578, lng: 101.7118, city: 'Kuala Lumpur', country: 'Malaysia' },
    'World Trade Centre KL, Kuala Lumpur': { lat: 3.1783, lng: 101.6980, city: 'Kuala Lumpur', country: 'Malaysia' },

    // Thailand
    'BITEC, Bangkok': { lat: 13.7042, lng: 100.6093, city: 'Bangkok', country: 'Thailand' },
    'Queen Sirikit, Bangkok': { lat: 13.7283, lng: 100.5595, city: 'Bangkok', country: 'Thailand' },
    'Impact, Bangkok': { lat: 13.9124, lng: 100.5472, city: 'Bangkok', country: 'Thailand' },

    // Indonesia
    'JIExpo, Jakarta': { lat: -6.2297, lng: 106.8098, city: 'Jakarta', country: 'Indonesia' },
    'ICE BSD, Jakarta': { lat: -6.2987, lng: 106.6433, city: 'BSD City', country: 'Indonesia' },
    'Indonesia Convention Exhibition, BSD City': { lat: -6.2987, lng: 106.6433, city: 'BSD City', country: 'Indonesia' },

    // Vietnam
    'SECC, Ho Chi Minh City': { lat: 10.7862, lng: 106.7208, city: 'Ho Chi Minh City', country: 'Vietnam' },
    'I.C.E, Hanoi': { lat: 21.0046, lng: 105.8394, city: 'Hanoi', country: 'Vietnam' },

    // Laos
    'National Convention Centre, Vientiane': { lat: 17.9642, lng: 102.6133, city: 'Vientiane', country: 'Laos' },
    'Convention Center, Luang Prabang': { lat: 19.8847, lng: 102.1357, city: 'Luang Prabang', country: 'Laos' },

    // Cambodia
    'Diamond Island Exhibition Center, Phnom Penh': { lat: 11.5513, lng: 104.9178, city: 'Phnom Penh', country: 'Cambodia' },
    'Cambodia-Japan Friendship Hall, Phnom Penh': { lat: 11.5758, lng: 104.9087, city: 'Phnom Penh', country: 'Cambodia' },

    // Myanmar
    'Yangon Convention Centre, Yangon': { lat: 16.8308, lng: 96.1357, city: 'Yangon', country: 'Myanmar' },

    // Philippines (if needed for future events)
    'SMX Convention Center, Manila': { lat: 14.5351, lng: 121.0011, city: 'Manila', country: 'Philippines' },
    'World Trade Center Metro Manila, Manila': { lat: 14.5416, lng: 121.0197, city: 'Manila', country: 'Philippines' },

    // Brunei (if needed for future events)
    'ICC, Bandar Seri Begawan': { lat: 4.9431, lng: 114.9480, city: 'Bandar Seri Begawan', country: 'Brunei' },
};

/**
 * Get coordinates for a given location string
 * Returns null if location not found in database
 */
export const getCoordinates = (location: string): CityCoordinates | null => {
    return CITY_COORDINATES[location] || null;
};

/**
 * Get all unique cities with their coordinates
 */
export const getAllCities = (): CityCoordinates[] => {
    return Object.values(CITY_COORDINATES);
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

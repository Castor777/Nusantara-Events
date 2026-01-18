/**
 * API Client for Nusantara Events Backend
 * Connects frontend to SQLite backend via Express API
 */

const API_BASE_URL = 'http://localhost:3002/api';

interface ApiEvent {
    id: string;
    name: string;
    date: string;
    location: string;
    category: string;
}

interface ApiRegistration {
    id: string;
    status: string;
    timestamp: string;
    ticketType: string;
    paymentMethod: string;
    amountPaid: number;
    attendeeName: string;
    email: string;
    role: string;
    eventName: string;
}

interface RegisterPayload {
    eventId: string;
    user: {
        name: string;
        email: string;
        role?: string;
    };
}

interface RegisterResponse {
    success: boolean;
    registrationId?: string;
    message: string;
}

/**
 * Fetch all events from the backend
 */
export const fetchEvents = async (): Promise<ApiEvent[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/events`);
        if (!response.ok) throw new Error('Failed to fetch events');
        return await response.json();
    } catch (error) {
        console.error('API Error (fetchEvents):', error);
        return [];
    }
};

/**
 * Fetch all registrations from the backend
 */
export const fetchRegistrations = async (): Promise<ApiRegistration[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/registrations`);
        if (!response.ok) throw new Error('Failed to fetch registrations');
        return await response.json();
    } catch (error) {
        console.error('API Error (fetchRegistrations):', error);
        return [];
    }
};

/**
 * Register a user for an event
 */
export const registerForEvent = async (payload: RegisterPayload): Promise<RegisterResponse> => {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
            return { success: false, message: data.message || 'Registration failed' };
        }

        return data;
    } catch (error) {
        console.error('API Error (registerForEvent):', error);
        return { success: false, message: 'Network error. Please try again.' };
    }
};

/**
 * Check API health
 */
export const checkApiHealth = async (): Promise<boolean> => {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        return response.ok;
    } catch {
        return false;
    }
};

export type { ApiEvent, ApiRegistration, RegisterPayload, RegisterResponse };

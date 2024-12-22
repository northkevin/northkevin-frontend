import { ApiError, handleApiError } from './errorHandler';

interface ApiOptions {
    method?: string;
    body?: any;
    headers?: Record<string, string>;
    requiresAuth?: boolean;
}

export async function fetchApi<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
    const { method = 'GET', body, requiresAuth = false } = options;
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080';

    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...options.headers
        };

        if (requiresAuth) {
            const token = localStorage.getItem('devToken');
            if (!token) {
                throw new ApiError('Authentication required', 401, 'AUTH_REQUIRED');
            }
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${backendUrl}${endpoint}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            throw new ApiError(
                'API request failed',
                response.status,
                'API_ERROR'
            );
        }

        const data = await response.json();
        return data as T;
    } catch (error) {
        throw handleApiError(error);
    }
} 
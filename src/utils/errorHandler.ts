export class ApiError extends Error {
    constructor(
        message: string,
        public status?: number,
        public code?: string
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

export const handleApiError = (error: unknown): ApiError => {
    if (error instanceof ApiError) {
        return error;
    }

    if (error instanceof Response) {
        return new ApiError(
            'API request failed',
            error.status,
            'API_ERROR'
        );
    }

    if (error instanceof Error) {
        return new ApiError(
            error.message,
            undefined,
            'UNKNOWN_ERROR'
        );
    }

    return new ApiError(
        'An unexpected error occurred',
        undefined,
        'UNKNOWN_ERROR'
    );
}; 
import React from 'react';
import { ApiError } from '../utils/errorHandler';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            const error = this.state.error;
            const isApiError = error instanceof ApiError;

            return (
                <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
                    <div className="bg-gray-700 p-8 rounded-lg shadow-xl max-w-lg">
                        <h1 className="text-2xl font-bold mb-4">
                            {isApiError ? 'API Error' : 'Something went wrong'}
                        </h1>
                        <p className="text-gray-300 mb-4">
                            {error?.message || 'An unexpected error occurred'}
                        </p>
                        {isApiError && error.status && (
                            <p className="text-sm text-gray-400 mb-4">
                                Status: {error.status}
                            </p>
                        )}
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition-colors"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 
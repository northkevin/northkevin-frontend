import { useState } from 'react';
import { fetchApi } from '../utils/api';
import { ApiError } from '../utils/errorHandler';

interface ApiEndpoint {
    name: string;
    path: string;
    method: 'GET' | 'POST';
    description: string;
}

const endpoints: ApiEndpoint[] = [
    {
        name: 'Hello',
        path: '/api/hello',
        method: 'GET',
        description: 'Basic hello world endpoint'
    },
    {
        name: 'Protected',
        path: '/api/dev/protected',
        method: 'GET',
        description: 'Test authenticated access'
    },
    {
        name: 'Get Recent Learnings',
        path: '/api/learnings',
        method: 'GET',
        description: 'Get list of recent learnings'
    },
    {
        name: 'Add Learning',
        path: '/api/learnings',
        method: 'POST',
        description: 'Add a new learning entry'
    }
];

function ApiTester() {
    const [results, setResults] = useState<Record<string, any>>({});

    const callEndpoint = async (endpoint: ApiEndpoint) => {
        const resultKey = `${endpoint.method} ${endpoint.path}`;
        try {
            const data = await fetchApi(endpoint.path, {
                method: endpoint.method,
                requiresAuth: endpoint.path.includes('/dev/') || endpoint.path.includes('/api/learnings')
            });

            setResults(prev => ({
                ...prev,
                [resultKey]: { data, status: 200 }
            }));
        } catch (error) {
            const apiError = error as ApiError;
            setResults(prev => ({
                ...prev,
                [resultKey]: { 
                    error: apiError.message, 
                    status: apiError.status || 'error',
                    code: apiError.code
                }
            }));
        }
    };

    return (
        <div className="min-h-screen bg-gray-800 text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">API Endpoint Tester</h1>
                <div className="grid gap-6">
                    {endpoints.map((endpoint) => {
                        const resultKey = `${endpoint.method} ${endpoint.path}`;
                        return (
                            <div key={resultKey} className="bg-gray-700 p-6 rounded-lg">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-xl font-semibold">{endpoint.name}</h2>
                                        <p className="text-gray-400 text-sm">{endpoint.description}</p>
                                        <p className="text-blue-400 font-mono mt-1">
                                            {endpoint.method} {endpoint.path}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => callEndpoint(endpoint)}
                                        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition-colors"
                                    >
                                        Test
                                    </button>
                                </div>
                                {results[resultKey] && (
                                    <div className="mt-4 bg-gray-800 p-4 rounded">
                                        <p className="text-sm text-gray-400 mb-2">
                                            Status: {results[resultKey].status}
                                        </p>
                                        <pre className="text-sm overflow-auto">
                                            {JSON.stringify(results[resultKey].data || results[resultKey].error, null, 2)}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ApiTester; 
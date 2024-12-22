import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from './config/env';
import { fetchApi } from './utils/api';
import { ApiError } from './utils/errorHandler';

function Dev() {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const { backendUrl } = config;

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await fetchApi<{ token: string }>('/api/dev/login', {
                method: 'POST',
                body: { password }
            });

            localStorage.setItem('devToken', data.token);
            setMessage('Login successful! Redirecting...');
            setTimeout(() => navigate('/dev/api'), 1000);
        } catch (error) {
            const apiError = error as ApiError;
            setMessage(apiError.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl w-96">
                <h1 className="text-2xl font-bold mb-6">Dev Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
                    >
                        Login
                    </button>
                </form>
                {message && (
                    <p className="mt-4 text-center text-sm">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Dev;

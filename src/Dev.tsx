import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from './config/env';

function Dev() {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const { backendUrl } = config;

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log('Attempting login to:', `${backendUrl}/api/dev/login`);

            const response = await fetch(`${backendUrl}/api/dev/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ password }),
            });

            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('Response data:', data);

            if (response.ok) {
                localStorage.setItem('devToken', data.token);
                setMessage('Login successful! Redirecting...');
                setTimeout(() => navigate('/dev/api'), 1000);
            } else {
                setMessage(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error details:', error);
            setMessage('Error connecting to server. Is the backend running on port 8080?');
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

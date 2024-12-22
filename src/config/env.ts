// Default values as fallbacks
const config = {
    backendUrl: process.env.REACT_APP_BACKEND_URL || (
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:8080'
            : 'https://northkevin-backend-production.up.railway.app'
    )
};

// Freeze the config to prevent accidental modifications
export default Object.freeze(config); 
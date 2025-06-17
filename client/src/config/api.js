// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

export const API_ENDPOINTS = {
    ITEMS: `${API_BASE_URL}/api/items`,
    PAYMENT: `${API_BASE_URL}/api/payment`,
    IMAGES: `${API_BASE_URL}/public`
};

export default API_BASE_URL; 
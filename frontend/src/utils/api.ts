// API configuration
const isProduction = window.location.hostname !== 'localhost';
const API_URL = isProduction
  ? 'https://writify-app.onrender.com'
  : (process.env.REACT_APP_API_URL || 'http://localhost:5000');

// Common fetch options with credentials
const fetchOptions = {
  credentials: 'include' as RequestCredentials,
  headers: {
    'Content-Type': 'application/json'
  }
};

// API endpoints
export const API = {
  // Base URL
  baseUrl: API_URL,
  
  // Auth endpoints
  auth: {
    login: `${API_URL}/api/auth/login`,
    register: `${API_URL}/api/auth/register`,
    logout: `${API_URL}/api/auth/logout`,
    googleLogin: `${API_URL}/api/auth/google`,
    me: `${API_URL}/api/auth/me`,
    status: `${API_URL}/auth/status`,
    google: `${API_URL}/auth/google`,
  },
  
  // User endpoints
  users: {
    profile: `${API_URL}/api/users/profile`,
    updateProfile: `${API_URL}/api/users/profile`,
  },
  
  // Writer endpoints
  writers: {
    all: `${API_URL}/api/writers`,
    byId: (id: number) => `${API_URL}/api/writers/${id}`,
    portfolio: (id: number) => `${API_URL}/api/writers/${id}/portfolio`,
  },
  
  // Assignment request endpoints
  assignmentRequests: {
    all: `${API_URL}/api/assignment-requests`,
    create: `${API_URL}/api/assignment-requests`,
    byId: (id: number) => `${API_URL}/api/assignment-requests/${id}`,
    accept: (id: number) => `${API_URL}/api/assignment-requests/${id}/accept`,
  },
  
  // Assignment endpoints
  assignments: {
    all: `${API_URL}/api/assignments`,
    byId: (id: number) => `${API_URL}/api/assignments/${id}`,
    submit: (id: number) => `${API_URL}/api/assignments/${id}/submit`,
    approve: (id: number) => `${API_URL}/api/assignments/${id}/approve`,
  },
};

export default API;

const isLocalhost = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.endsWith('.local'));

const envUrl = import.meta.env.VITE_API_URL;

// Use localhost:5000 if running locally (unless a specific local VITE_API_URL was set), otherwise use envUrl or production backend
const targetUrl = isLocalhost 
  ? ((envUrl && (envUrl.includes('localhost') || envUrl.includes('127.0.0.1'))) ? envUrl : 'http://localhost:5000')
  : (envUrl || 'https://flashpayiinr.onrender.com');

export const API_BASE = targetUrl.replace(/\/api\/?$/, '').replace(/\/+$/, '') + '/api';

import ReactGA from 'react-ga4';

// Initialize Google Analytics
// Replace 'YOUR_MEASUREMENT_ID' with your actual Measurement ID (starts with G-)
export const initGA = (measurementID: string) => {
    ReactGA.initialize(measurementID);
};

// Track page views
export const logPageView = () => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

// Track custom events
export const logEvent = (category: string, action: string, label?: string) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};

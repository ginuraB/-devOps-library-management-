const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then((webVitals) => {
      const { getCLS, getFID, getLCP } = webVitals;

      if (typeof getCLS === 'function') getCLS(onPerfEntry);
      if (typeof getFID === 'function') getFID(onPerfEntry);
      if (typeof getLCP === 'function') getLCP(onPerfEntry);
    }).catch((error) => {
      console.error('Error importing web-vitals:', error);
    });
  }
};

export default reportWebVitals;
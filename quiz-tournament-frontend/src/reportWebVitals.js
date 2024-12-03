const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
/*This code dynamically imports the web-vitals library and executes performance metrics functions (getCLS, getFID, getFCP, getLCP, getTTFB) to measure and report web performance if a callback function (onPerfEntry) is provided.*/

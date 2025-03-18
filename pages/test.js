import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function TestPage() {
  const [errors, setErrors] = useState([]);
  const [windowInfo, setWindowInfo] = useState({});

  useEffect(() => {
    // Capture window information
    try {
      setWindowInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        userAgent: window.navigator.userAgent,
        platform: window.navigator.platform
      });
    } catch (error) {
      setErrors(prev => [...prev, `Error getting window info: ${error.message}`]);
    }

    // Set up global error handler
    const originalErrorHandler = window.onerror;
    window.onerror = function(message, source, lineno, colno, error) {
      setErrors(prev => [...prev, `Error: ${message} at ${source}:${lineno}:${colno}`]);
      if (originalErrorHandler) {
        return originalErrorHandler(message, source, lineno, colno, error);
      }
      return false;
    };

    // Set up unhandled promise rejection handler
    const originalUnhandledRejectionHandler = window.onunhandledrejection;
    window.onunhandledrejection = function(event) {
      setErrors(prev => [...prev, `Unhandled Promise Rejection: ${event.reason}`]);
      if (originalUnhandledRejectionHandler) {
        return originalUnhandledRejectionHandler(event);
      }
    };

    return () => {
      window.onerror = originalErrorHandler;
      window.onunhandledrejection = originalUnhandledRejectionHandler;
    };
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Head>
        <title>Test Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <h1 style={{ color: '#333' }}>Test Page</h1>
      
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        This is a simple test page to verify that Next.js is working correctly on mobile devices.
      </p>
      
      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px'
      }}>
        <h2 style={{ color: '#444' }}>Device Information</h2>
        <p>If you can see this page, basic Next.js functionality is working.</p>
        <pre style={{ 
          backgroundColor: '#e0e0e0', 
          padding: '10px', 
          borderRadius: '4px',
          overflow: 'auto',
          fontSize: '14px'
        }}>
          {JSON.stringify(windowInfo, null, 2)}
        </pre>
      </div>
      
      {errors.length > 0 && (
        <div style={{ 
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#ffebee',
          borderRadius: '5px',
          border: '1px solid #ffcdd2'
        }}>
          <h2 style={{ color: '#c62828' }}>Errors Detected</h2>
          <ul style={{ 
            listStyleType: 'none', 
            padding: '0',
            margin: '0'
          }}>
            {errors.map((error, index) => (
              <li key={index} style={{ 
                padding: '8px 0',
                borderBottom: index < errors.length - 1 ? '1px solid #ffcdd2' : 'none'
              }}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div style={{ marginTop: '20px' }}>
        <button 
          style={{
            marginRight: '10px',
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onClick={() => alert('Button clicked!')}
        >
          Click Me
        </button>
        
        <button 
          style={{
            padding: '10px 15px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onClick={() => {
            try {
              // Intentionally cause an error
              const obj = null;
              obj.nonExistentMethod();
            } catch (error) {
              setErrors(prev => [...prev, `Caught error: ${error.message}`]);
            }
          }}
        >
          Trigger Error
        </button>
      </div>
    </div>
  );
} 
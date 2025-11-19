import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SimplePage() {
  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      <Head>
        <title>Simple Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <h1 style={{ color: '#333' }}>PR Decompression Centers</h1>
      
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Welcome to PR Decompression Centers. This is a simplified version of our homepage.
      </p>
      
      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px'
      }}>
        <h2 style={{ color: '#444' }}>Our Services</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Chiropractic Care</li>
          <li>Spinal Decompression</li>
          <li>Laser Therapy</li>
          <li>Matrix Therapy</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Navigation</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
            <Link href="/test" style={{ color: '#0070f3', textDecoration: 'none' }}>
              Test Page
            </Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
} 
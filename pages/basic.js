import Head from 'next/head';

export default function BasicPage() {
  return (
    <>
      <Head>
        <title>Basic Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <h1>Basic HTML Page</h1>
        <p>This is a very basic page without any Next.js-specific features.</p>
        <p>If you can see this page, the server is working correctly.</p>
        
        <div>
          <p>Current time: {new Date().toLocaleTimeString()}</p>
        </div>
        
        <div>
          <a href="/test" style={{ color: '#0070f3', marginRight: '15px' }}>Test Page</a>
          <a href="/simple" style={{ color: '#0070f3', marginRight: '15px' }}>Simple Page</a>
          <a href="/" style={{ color: '#0070f3' }}>Home</a>
        </div>
      </div>

      <style jsx global>{`
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          padding: 0;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #0070f3;
        }
      `}</style>
    </>
  );
} 
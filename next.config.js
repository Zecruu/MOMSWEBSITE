/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    domains: ['prdecompressioncenters.com'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    localeDetection: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/testimonials',
        destination: '/reviews',
        permanent: true,
      },
      {
        source: '/testimonios',
        destination: '/reviews',
        permanent: true,
      },
      {
        source: '/location',
        destination: '/locate',
        permanent: true,
      },
      {
        source: '/ubicacion',
        destination: '/locate',
        permanent: true,
      },
      {
        source: '/contacto',
        destination: '/locate',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/locate',
        permanent: true,
      },
      {
        source: '/servicios',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/tratamientos',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/treatments',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/herniated-disc',
        destination: '/discos-herniados',
        permanent: true,
      },
      {
        source: '/herniated-discs',
        destination: '/discos-herniados',
        permanent: true,
      },
      {
        source: '/hernia-discal',
        destination: '/discos-herniados',
        permanent: true,
      },
      {
        source: '/hernias-discales',
        destination: '/discos-herniados',
        permanent: true,
      },
      {
        source: '/disco-herniado',
        destination: '/discos-herniados',
        permanent: true,
      },
      {
        source: '/back-pain',
        destination: '/discos-herniados',
        permanent: true,
      },
      {
        source: '/dolor-de-espalda',
        destination: '/discos-herniados',
        permanent: true,
      },
      {
        source: '/sciatica',
        destination: '/discos-herniados',
        permanent: true,
      },
      {
        source: '/ciatica',
        destination: '/discos-herniados',
        permanent: true,
      },
      {
        source: '/spinal-decompression',
        destination: '/discos-herniados',
        permanent: true,
      },
      {
        source: '/descompresion-espinal',
        destination: '/discos-herniados',
        permanent: true,
      },
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 
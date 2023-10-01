const securityHeaders = [{
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
},
{
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self)'
},
{
    key: 'X-Content-Type-Options',
    value: 'nosniff'
},
{
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
},
]

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            }
        ]
    },
}

module.exports = nextConfig

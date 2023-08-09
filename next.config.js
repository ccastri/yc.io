/** @type {import('next').NextConfig} */

const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: "/api/:path*",
                destination:
                    process.env.NODE_ENV === "development"
                        ? "http://127.0.0.1:8000/api/:path*"
                        : "/api/",
            },
        ];
    },
    experimental: {
        modularizeImports: {
            "@mui/material": {
                transform: "@mui/material/{{member}}",
            },
            "@mui/icons-material": {
                transform: "@mui/icons-material/{{member}}",
            },
        },
    },
}

module.exports = nextConfig

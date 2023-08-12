/** @type {import('next').NextConfig} */
const urlObject = new URL(fullURL);

// Extrae la parte base de la URL (protocolo + dominio)
const baseURL = urlObject.protocol + "//" + urlObject.host;

console.log(baseURL);
const nextConfig = {

    rewrites: async () => {
        return [
            {
                source: "/api/:path*",
                destination:
                    process.env.NODE_ENV === "development"
                        ? "http://127.0.0.1:8000/api/:path*"
                        : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
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

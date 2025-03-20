/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/blog/:id(\\d+)", // Capture uniquement les IDs numériques
          destination: "https://theoldfox.pythonanywhere.com/post/:id",
          permanent: false, // Redirection temporaire (true si tu veux une redirection permanente)
        },
      ];
    },
  };
  
  export default nextConfig;
  
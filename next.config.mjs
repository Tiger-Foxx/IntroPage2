/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/blog/:id(\\d+)", // Capture uniquement les IDs numériques
          destination: "https://site.the-fox.tech/blog/:id",
          permanent: false, // Redirection temporaire (true si tu veux une redirection permanente)
        },
        {
          source: "/projet/:id(\\d+)", // Capture uniquement les IDs numériques
          destination: "https://site.the-fox.tech/projects/:id",
          permanent: true, // Redirection temporaire (true si tu veux une redirection permanente)
        },
        {
          source: "/github", // Capture uniquement les IDs numériques
          destination: "https://github.com/Tiger-Foxx",
          permanent: true, // Redirection temporaire (true si tu veux une redirection permanente)
        },
        {
          source: "/nancy-cv", // Capture uniquement les IDs numériques
          destination: "https://nancy-cv.vercel.app",
          permanent: true, // Redirection temporaire (true si tu veux une redirection permanente)
        },
        {
          source: "/mood-music", // Capture uniquement les IDs numériques
          destination: "https://mood-music.the-fox.tech",
          permanent: true, // Redirection temporaire (true si tu veux une redirection permanente)
        },
        
      ];
    },
  };
  
  export default nextConfig;
  
const config = {
  title: "Fox | Computer Engineering Scientist & Cybersecurity Enthusiast", // Updated title
  description: {
    long: "Hey Explore the portfolio of Fox, a complete computer Engineer with a passion for cybersecurity and Dev. I specialize in building secure and engaging digital experiences. Discover my latest projects and let's collaborate on something amazing!", // Updated description
    short:
        "Fox - Engineering Scientist crafting secure and engaging digital experiences.", // Updated short description
  },
  keywords: [
    "Fox",
    "portfolio",
    "full-stack developer",
    "cybersecurity",
    "web development",
    "secure coding",
    "ethical hacking", // Added relevant keywords
    // ... add other relevant technologies and skills
  ],
  author: "The Fox", // Your Name
  email: "donfackarthur750@gmail.com", // Your Email
  site: "https://theoldfox.pythonanywhere.com/", // Your Website URL

  get ogImg() {
    return this.site + "/assets/seo/og-image.png"; // Update path if needed
  },
  social: {
    twitter: "https://github.com/Tiger-Foxx/", // Your Twitter profile URL
    linkedin: "https://www.linkedin.com/in/pascal-arthur-donfack-567575327/", // Your LinkedIn profile URL
    instagram: "https://www.instagram.com/i_am_the_fox_coder/", // Your Instagram profile URL (optional)
    facebook: "https://web.facebook.com/arthuro.DTiger/", // Your Facebook profile URL (optional)
    github: "https://github.com/Tiger-Foxx/", // Your Github profile URL
  },
  whatsapp: "https://wa.me/+237658866639", // Your WhatsApp number
};

export { config };
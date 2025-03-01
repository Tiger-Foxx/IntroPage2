import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};


const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [

    {
        id: "formatplus",
        category: "E-learning",
        title: "FormatPlus",
        src: "/assets/projects-screenshots/formatplus/landing.png",
        screenshots: ["landing.png", "dashboard.png"],
        skills: {
            frontend: [
                PROJECT_SKILLS.react,
                PROJECT_SKILLS.tailwind,
                PROJECT_SKILLS.shadcn,
                PROJECT_SKILLS.js,
            ],
            backend: [
                PROJECT_SKILLS.node,
                PROJECT_SKILLS.firebase,
            ],
        },
        live: "https://format-plus.vercel.app/",
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-2xl text-center">
                        Votre plateforme tout-en-un pour l&apos;éducation numérique
                    </TypographyP>
                    <TypographyP className="font-mono ">
                        FormatPlus révolutionne l&apos;accès aux formations en ligne avec son système
                        de parrainage innovant et son intégration transparente avec Google Drive.
                    </TypographyP>
                    <ProjectsLinks live={this.live} />

                    <TypographyH3 className="my-4 mt-8">Inscription Sécurisée</TypographyH3>
                    <p className="font-mono mb-2">
                        Processus d&apos;inscription obligeant un code de parrainage, avec vérification
                        en temps réel et intégration de paiement sécurisé.
                    </p>
                    <SlideShow
                        images={[
                            `${BASE_PATH}/formatplus/landing.png`,
                            `${BASE_PATH}/formatplus/inscription.png`,
                        ]}
                    />

                    <TypographyH3 className="my-4 mt-8">Dashboard Utilisateur</TypographyH3>
                    <p className="font-mono mb-2">
                        Interface intuitive donnant accès aux formations, statistiques de parrainage
                        et historique des transactions.
                    </p>
                    <SlideShow
                        images={[
                            `${BASE_PATH}/formatplus/dashboard.png`,
                            `${BASE_PATH}/formatplus/formations.png`,
                        ]}
                    />

                    <TypographyH3 className="my-4 mt-8">Système de Parrainage</TypographyH3>
                    <p className="font-mono mb-2">
                        Architecture à multi-niveaux avec répartition automatique des commissions
                        (40% direct + 10% indirect) et suivi en temps réel.
                    </p>

                    <TypographyH3 className="my-4 mt-8">Intégrations</TypographyH3>
                    <div className="font-mono space-y-2">
                        <p>• API de paiement avec validation par PIN</p>
                        <p>• Synchronisation automatique avec Google Drive</p>
                        <p>• Notifications email via Gmail API</p>
                        <p>• Lien vers canal Telegram premium</p>
                    </div>
                </div>
            );
        },
    },


    {
        id: "wi-fox",
        category: "Cybersecurity",
        title: "Wi-Fox the Kanif",
        src: "/assets/projects-screenshots/wi-fox/0.png",
        screenshots: ["0.png", "6.png"],
        skills: {
            frontend: [],
            backend: [
                PROJECT_SKILLS.python,
            ],
        },
        live: "https://github.com/Tiger-Foxx/Wi-Fox",
        github: "https://github.com/Tiger-Foxx/Wi-Fox",
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-2xl text-center">
                        Wi-Fox the Kanif 🦊
                    </TypographyP>
                    <TypographyP className="font-mono">
                        No Need To Ask Wifi Password, FOX IT! Cet outil en Python vous permet de pirater les mots de passe Wi‑Fi en toute simplicité.
                    </TypographyP>
                    <ProjectsLinks live={this.live} repo={this.github} />
                    <TypographyH3 className="my-4 mt-8">Fonctionnalités</TypographyH3>
                    <p className="font-mono mb-2">
                        1) Start monitor mode 🦊<br />
                        2) Stop monitor mode 🦊<br />
                        3) Scan Networks 🦊<br />
                        4) Getting Handshake 🦊<br />
                        5) Create wordlist 🦊<br />
                        6) Install Wireless tools 🦊<br />
                        7) WPS Networks attacks 🦊<br />
                        8) Scan for WPS Networks 🦊<br />
                        9) Crack Handshake with rockyou.txt 🦊<br />
                        10) Crack Handshake with wordlist 🦊<br />
                        11) Crack Handshake without wordlist 🦊
                    </p>
                    <TypographyH3 className="my-4 mt-8">Installation</TypographyH3>
                    <pre className="font-mono bg-gray-100 p-2 rounded">
{`sudo apt-get update && apt-get install git
sudo git clone https://github.com/Tiger-Foxx/Wi-Fox.git
cd Wi-Fox/
sudo python3 Wi-Fox.py`}
        </pre>
                    <TypographyH3 className="my-4 mt-8">Tested On</TypographyH3>
                    <p className="font-mono mb-2">
                        Kali Linux, BlackArch Linux, Ubuntu, Kali Nethunter, Termux (Rooted Devices), Parrot OS
                    </p>
                    <SlideShow images={[
                        `${BASE_PATH}/wi-fox/0.png`,
                        `${BASE_PATH}/wi-fox/6.png`
                    ]} />
                    <TypographyP className="font-mono mt-4">
                        Disclaimer: Wi‑Fox the Kanif n&apos;est pas responsable des mauvaises utilisations ou des utilisations illégales. Utilisez-le uniquement à des fins de pentest ou éducatives.
                    </TypographyP>
                    <TypographyP className="font-mono mt-4">
                        Créateur: THe Fox 🦊 - &quot;Quand le renard passe, le Wi‑Fi trépasse !&quot;
                    </TypographyP>
                </div>
            );
        },
    },

    {
        id: "geoportail",
        category: "Cartographie",
        title: "GeoPortail du Centre Cameroun 🌍",
        src: "/assets/projects-screenshots/geoportail/1.png",
        screenshots: ["1.png", "2.png"],
        skills: {
            frontend: [
                PROJECT_SKILLS.js,
                PROJECT_SKILLS.vue,
            ],
            backend: [
                PROJECT_SKILLS.postgres,
            ],
        },
        live: "http://preprod-sig.region-centre-cmr.com/sig/",
        github: "http://preprod-sig.region-centre-cmr.com/sig/",
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-2xl text-center">
                        GeoPortail du Centre Cameroun 🌍
                    </TypographyP>
                    <TypographyP className="font-mono">
                        GeoPortail est une plateforme cartographique dédiée à la région du Centre Cameroun. Conçu avec PostGIS, Leaflet et JavaScript, il permet de visualiser et d’analyser des données géospatiales essentielles.
                    </TypographyP>
                    <ProjectsLinks live={this.live} repo={this.github} />
                    <TypographyH3 className="my-4 mt-8">Fonctionnalités Principales</TypographyH3>
                    <p className="font-mono mb-2">
                        📍 Cartographie interactive des zones agricoles et des lieux stratégiques.<br />
                        📊 Analyse thématique pour mieux comprendre les dynamiques territoriales.<br />
                        🗺️ Données géospatiales précises grâce à l’intégration de PostGIS.
                    </p>
                    <SlideShow images={[
                        `${BASE_PATH}/geoportail/0.png`,
                        `${BASE_PATH}/geoportail/1.png`
                    ]} />
                </div>
            );
        },
    },

    {
        id: "sdn-ddos",
        category: "Cybersecurity",
        title: "SDN Network DDoS Detection Using Machine Learning 🦊",
        src: "/assets/projects-screenshots/sdn-ddos/0.png",
        screenshots: ["0.png"],
        skills: {
            frontend: [],
            backend: [
                PROJECT_SKILLS.python,
            ],
        },
        live: "https://theoldfox.pythonanywhere.com/projet/3",
        github: "https://github.com/Tiger-Foxx/SDN-and-Machine-learning",
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-2xl text-center">
                        SDN Network DDoS Detection Using Machine Learning 🦊
                    </TypographyP>
                    <TypographyP className="font-mono">
                        Bienvenue dans notre projet SDN pour la détection des attaques DDoS avec Machine Learning ! Ce projet utilise <strong>Ryu</strong> comme contrôleur SDN et <strong>Mininet</strong> pour simuler un réseau, tout en intégrant un modèle de Machine Learning pour détecter et analyser les attaques DDoS en temps réel.
                    </TypographyP>
                    <ProjectsLinks live={this.live} repo={this.github} />
                    <TypographyH3 className="my-4 mt-8">Pré-requis</TypographyH3>
                    <p className="font-mono mb-2">
                        - VirtualBox (ou autre plateforme de virtualisation)<br />
                        - Python 3.9<br />
                        - Ryu Controller<br />
                        - Mininet<br />
                        - Machine Learning pour la détection des attaques DDoS
                    </p>
                    <TypographyH3 className="my-4 mt-8">Installation</TypographyH3>
                    <pre className="font-mono bg-gray-100 p-2 rounded">
{`ryu-manager DT_controller.py

sudo python topology.py`}
        </pre>
                    <TypographyP className="font-mono mt-4">
                        Suivez les instructions pour lancer le contrôleur Ryu et Mininet, et simuler les attaques DDoS.
                    </TypographyP>
                    <SlideShow images={[
                        `${BASE_PATH}/sdn-ddos/landing.png`
                    ]} />
                    <TypographyP className="font-mono mt-4">
                        Disclaimer: Utilisez ce projet uniquement à des fins éducatives et de test de sécurité.
                    </TypographyP>
                </div>
            );
        },
    }


];
export default projects;

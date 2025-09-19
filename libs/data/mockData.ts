import KhitZayImg from '@/public/assets/khitzayMock.png'
import PageForm from '@/public/assets/pageform3.png';
import MessengerClone from '@/public/assets/mg1.png';
import Bonchon from '@/public/assets/Bonchon.png';
import Locaboo from '@/public/assets/Locaboo2.png';
import Joy from '@/public/assets/Joy.png';
import FMS from '@/public/assets/fuel.png';
import Promethus from '@/public/assets/promethus.png';
import Digizen from '@/public/assets/digizen.png';
import Linn from '@/public/assets/Linn.jpeg';
import BonchonLogo from '@/public/assets/BonChonLogo.png'
import LocabooLogo from '@/public/assets/FlyHigh.png'
import FMSLogo from '@/public/assets/KyawSan.jpg'
import DigizenLogo from '@/public/assets/EDUSN.png'

//certificates images
import ReactCerti from '@/public/assets/Certificates/React.png'
import NodeCerti from '@/public/assets/Certificates/Node.png'
import AWSCerti from '@/public/assets/Certificates/AWS.png'
import SQLCerti from '@/public/assets/Certificates/SQL.png'







export const projectsData = [
    {
        id: 1,
        title: "Bonchon Myanmar Application",
        titleLink: 'https://apps.apple.com/mm/app/bonchon-myanmar/id6484268092',
        description: "Implemented points and organization coupon discount features and enabled push notifications via Firebase controllable from the dashboard. Fixed client-reported bugs and integrated QR code-based discounts with the POS system.",
        image: Bonchon,
        links: [
            {
                name: "APP Store",
                link:"https://apps.apple.com/mm/app/bonchon-myanmar/id6484268092"
            },
            {
                name: "Play Store",
                link:"https://play.google.com/store/apps/details?id=com.bonchonmmuserapp&hl=en"
            }
        ],
        languages: ["React Native", "Hasura", "PostgreSQL", "FireBase"]
    },
    {
        id: 2,
        title: "Locaboo",
        titleLink: 'http://staging.locaboo.jp/',
        description: "Integrated an AI chatbot for chat and ordering using OpenAI, implementing prompt engineering to define rules and conversation flow. Collaborated on UI development with frontend and backend developers. Hosted Locaboo on AWS with a three-tier architecture, optimizing infrastructure for cost savings, maintenance, and logging.",
        image: Locaboo,
        links: null,
        languages: ["React", "AWS", "OpenAI", "CI/CD", "PostgreSQL", "ASG", "LoadBalancing"]
    },
   
    {
        id: 4,
        title: "JOY My Puppy",
        titleLink: 'https://apps.apple.com/mm/app/joy-my-puppy/id6475634062',
        description: "Implemented the Royal Point system with merchandise exchange integration. Added OTP and SMS features using an SMS gateway, fixed bugs, and updated the social media UI of the JOY application.",
        image: Joy,
        links: [
            {
                name: "APP Store",
                link:"https://apps.apple.com/mm/app/joy-my-puppy/id6475634062"
            },
            {
                name: "Play Store",
                link:"https://play.google.com/store/apps/details?id=com.axratech.joy&hl=en"
            }
        ],
        languages: ["React Native", "Hasura", "PostgreSQL", "FireBase"]
    },
    {
        id: 5,
        title: "Digizenship",
        titleLink: 'https://apps.apple.com/in/app/digizenship/id6745482120',
        description: "Developed a social media application for students and users at EDUSN International School, featuring organizations, posts, profiles, likes, comments, chat messages, and an admin dashboard for application management. Collaborated with the EDUSN Founder, alongside a team of 4 developers, 2 designers, a team lead, and a project manager.",
        image: Digizen,
        links: [
            {
                name: "APP Store",
                link:"https://apps.apple.com/in/app/digizenship/id6745482120"
            }
        ],
        languages: ["React Native","React", "Ant Design", "FireBase", "AWS"]
    },
    {
        id: 6,
        title: "Linn Htet Aung",
        titleLink: 'https://www.linnhtetaung.com/',
        description: "Created a portfolio website for designer Linn Htet Aung, focusing on both design and development with engaging animations to showcase his projects and experiences.",
        image: Linn,
        links: null,
        languages: ["Next.js", "Framer ", "Vercel", "Z.com"]
    },
    {
        id: 7,
        title: "FMS ( Fuel Management System )",
        titleLink: 'https://detfsmm.com/',
        description: "Developed a Fuel Management website for Kyaw San Petrol Station (10 branches), enabling management of total sales, vehicle counts, vehicle types, and petrol gallon usage. The main controller can oversee all stations or individual ones, with the ability to shut down stations remotely and monitor nozzle-level sales.",
        image: FMS,
        links: null,
        languages: ["React","Framer Motion", "Express.js", "MongoDB", "AWS"]
    },
    {
        id: 8,
        title: "KhitZay Ecommerce (MERN)",
        titleLink: 'https://khit-zay-next.vercel.app',
        description: "This ecommerce API is designed with the MVC control pattern, a significant pattern for maintaining and identifying errors. I implemented thorough error handling to ensure the stability of the API and prevent crashes.",
        image: KhitZayImg,
        links: [
            {
                name: "DB Modal",
                link: 'https://lucid.app/lucidchart/cb4bdd1e-56cd-41b0-a506-1d49aa866b4f/edit?viewport_loc=-2385%2C2582%2C3035%2C1443%2C0_0&invitationId=inv_3db4c8d1-378b-4116-81e4-37d0ecc0d2ce'
            },
            {
                name: "API",
                link: 'https://khitzay.netlify.app/.netlify/functions/api/products'
            }
        ],
        languages: ["React Native", "Hasura", "PostgreSQL"]
    },
    {
        id: 9,
        title: "Page Form Drag and Drop",
        titleLink: 'https://drag-and-drop-forms-management.vercel.app',
        description: "This project can create the forms by drag and drop and also can share submit form link with others.Please Readme file in github repo.",
        image: PageForm,
        links: null,
        languages: ["Typescript", "React", "Use-form", "Next", "Tailwind", "Prisma", "PostgreSQL", "Dnd Toolkit"]
    },
    {
        id: 10,
        title: "Real Time Chat App",
        titleLink: 'https://real-time-chat-nine.vercel.app',
        description: "A real-time Messenger clone using the latest web development technologies,fully-functional and visually stunning chat application with Next.js, TypeScript, NextAuth, Pusher.",
        image: MessengerClone,
        links: null,
        languages: ["Typescript", "React", "Use-form", "Tailwind", , "Next", "Next Auth", "Pusher", "Prisma", "SQL"]
    },
    {
        id: 11,
        title: "Promethus",
        titleLink: 'https://prometheus-books.netlify.app/',
        description: "Developed an online PDF book download website where users can browse and download books organized by author and category.",
        image: Promethus,
        links: null,
        languages: ["React"]
    },
   
];


export const allProject = [
    {
        id: 1,
        year: '2024',
        name: 'Khit Zay Ecommerce',
        madeAt: 'Own project',
        languages: ['Next', "TypeScript", "Tailwind"],
        link: 'khitzay'
    },
    {
        id: 2,
        year: '2023',
        name: 'Digit Ecommerce',
        madeAt: 'Own project',
        languages: ["React", "TypeScript"],
        link: "https://thurakhitzay.netlify.app"
    },
    {
        id: 3,
        year: '2023',
        name: 'Blog API',
        madeAt: 'Own project',
        languages: ["Node", "Express", "MongoDB", "Swagger"],
        link: "https://github.com/Thura69/Blog-Backend"
    },
    {
        id: 4,
        year: '2023',
        name: "KBZ Money",
        madeAt: 'Refrence project',
        languages: ["React", "Swiper Slide"],
        link: 'https://banking-rosy.vercel.app'
    },
    {
        id: 5,
        year: '2023',
        name: "Digit Ecommerce API",
        madeAt: 'Own project',
        languages: ["Express","Node","Cloudinary","JWT","MongoDb"],
        link: 'https://github.com/Thura69/Ecommerce_Backend'
    },
    {
        id: 6,
        year: '2023',
        name: "Youtube API",
        madeAt: 'Own project',
        languages: ["Express","Node","JWT","MongoDb"],
        link: 'https://github.com/Thura69/Youtube_backend'
    },
    {
        id: 7,
        year: '2020',
        name: 'Forever Bots NTF Web',
        madeAt: "Own Project",
        languages: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://thura69.github.io/foreverBots/'
    },
    {
        id: 8,
        year: '2020',
        name: 'Christmas Gift',
        madeAt: "Own Project",
        languages: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://thura69.github.io/Christmas/'
    },
    {
        id: 9,
        year: '2020',
        name: 'Drew House',
        madeAt: "Own Project",
        languages: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://thura69.github.io/drewhouse/#'
    },
    {
        id: 10,
        year: '2020',
        name: 'PDF Book Download',
        madeAt: "Own Project",
        languages: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://prometheus-books.netlify.app/'
    }
];

export const experiencesData = [
    {
        id: 1,
        period: 'SEP 2024 - Presence',
        title: 'Frontend . Next Innovations ltd',
        companyLink: 'https://next-innovations.ltd/',
        description: 'Developed and deployed Talent Cloud, a job portal platform, in collaboration with backend developers, designers, and the project manager. Built and managed AWS three-tier architecture with CI/CD pipelines for staging and production, and deployed the company website on AWS Lightsail.',
        links: [
            { name: 'Locaboo.jp', link: 'http://staging.locaboo.jp/' },
            { name: 'Talent Cloud', link: 'http://staging.talent-cloud.asia/' }
        ],
        technologies: ['React','Type Script', 'AWS', 'Open AI', 'DevOps']
    },
    {
        id: 1,
        period: 'SEP 2024 - October 2025',
        title: 'React Native (Remote Partime) . AXRA TECH',
        companyLink: 'https://www.axratech.com/',
        description: 'Implemented the point system and push notification features in the Bonchon application, including updates to the dashboard. Enhanced the Joy My Puppy app by adding OTP and SMS features and fixing bugs, while also developing the appointment and SMS features for the Joy My Puppy Partner app. Additionally, updated the Pann Sine application UI and resolved bugs.',
        links: [
            { name: 'Bonchon Myanmar', link: 'https://apps.apple.com/mm/app/bonchon-myanmar/id6484268092' },
            { name: 'Joy My Puppy', link: 'https://apps.apple.com/mm/app/joy-my-puppy/id6475634062' },
            { name: 'Pann Sine', link: 'https://apps.apple.com/mm/app/pann-sine/id6499100047' },

        ],
        technologies: ['React Native', 'Hasura', 'PostgreSQL', 'SMS Gateway']
    },
    {
        id: 2,
        period: 'JAN 2024 - SEP 2024',
        title: 'Frontend . Smilax Global Co. ltd',
        companyLink: 'https://smilaxglobal.com',
        description: 'Developed an HR web application using Next.js, implementing modules for hiring, public holidays, and final year processes. Added multi-language support and integrated APIs from a microservices backend. Collaborated closely with the Managing Director, Project Owner, designers, and microservices team to define features and modules.',
        links: [
            
        ],
        technologies: ['TypeScript', 'Next.js', 'FramerMotion', 'Tailwind', 'Redux', 'Nuqs']
    },
    {
        id: 3,
        period: 'DEC 2020 - JAN 2024',
        title: 'FullStack . Digital Engineering Tech',
        companyLink: 'https://www.digitalengineeringtech.com',
        description: 'Developed the Fuel Management web application for KyawSan and a tablet application for controlling nozzles and stations during petrol filling. Built a local server for stations using Raspberry Pi, router, and tablets. Additionally, developed a smart home system with ESP32, integrated with Homebridge and Apple Home voice control, and created smart water controllers for home automation.',
        links: [
            { name: 'FMS', link: 'https://detfsmm.com' },
            { name: 'FMS', link: 'https://detfsmm.com' },
            { name: 'Kyaw San Co. ltd', link: 'https://myanmaryellowpages.biz/company_detail/23270/361' },


        ],
        technologies: ['TypeScript', 'React', 'Next.js', 'React Native', 'FramerMotion', 'Tailwind', 'Node', 'Express', 'MONGODB', 'Redis', 'EC2', 'Z.com', 'MQTT', 'RaspberryPi', 'HomeBridge']
    }
];

// Certificates
import FigmaImg from '@/public/assets/figma.png'

export const certificatesData = [
    {
        id: 1,
        title: 'Advanced React Js Frontend with Expert',
        issuer: 'Udemy',
        image: ReactCerti,
        link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-7a2b0c59-4d6d-4e44-8891-61b3047a53ec.pdf'
    },
    {
        id: 2,
        title: 'Build a Backend Rest API with Node JS from Stratch',
        issuer: 'Udemy',
        image: NodeCerti,
        link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-a1bd4683-3e19-45f1-8d0b-5c8a558084c3.pdf'
    },
    {
        id: 3,
        title: 'AWS Beginner to Intermediate: EC2, IAM, ELB, ASG, Route 53',
        issuer: 'Udemy',
        image: AWSCerti,
        link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-5d1afef3-36dd-4496-bd61-2b8fb0c7ce6a.jpg?v=1755701974000'
    },
    {
        id: 4,
        title: 'SQL: From Zero to Hero - Unleash the Data Superpowers Within',
        issuer: 'Udemy',
        image: SQLCerti,
        link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-5d1afef3-36dd-4496-bd61-2b8fb0c7ce6a.jpg?v=1755701974000'
    }
]

export const clientsData = [
    { id: 1, name: 'Bonchon Myanmar', image: BonchonLogo },
    { id: 3, name: 'EDUSN - International School Myanmar', image: DigizenLogo },
    { id: 4, name: 'Kyaw San Petrol Co.,Ltd. ', image: FMSLogo },
    { id: 2, name: '株式会社 Fly High', image: LocabooLogo },
]

export type GalleryItem = {
    id: number
    title: string
    image: any
    alt?: string
    caption?: string
    date?: string
}

import FV from '@/public/assets/FV.png'
import SetUp from '@/public/assets/Gallery/IMG_8410.png'
import ME from '@/public/assets/Gallery/IMG_9174.png'
import Beach from '@/public/assets/Gallery/IMG_9107.png'
import Lububu from '@/public/assets/Gallery/IMG_8781.png'
import JoyExpo from '@/public/assets/Gallery/IMG_5131.png'
import CafeCoding from '@/public/assets/Gallery/IMG_2623.png'
import BlackSetup from '@/public/assets/Gallery/IMG_8333.png'
import JungleCafe from '@/public/assets/Gallery/IMG_3599.png'
import Pi from '@/public/assets/Gallery/IMG_9287.png'
import GamingDesk from '@/public/assets/Gallery/IMG_7836.png'
import Tkinter from '@/public/assets/Gallery/IMG_6806.png'















export const galleryItems: GalleryItem[] = [
    { id: 1, title: 'Thura Nyi', image: ME, alt: 'Thura Nyi', caption: 'One evening at beach', date: '2025-09-19' },
    { id: 2, title: 'Beach', image: Beach, alt: 'Beach', caption: 'Fine beach', date: '2025-09-19' },
    { id: 3, title: 'where magic happens', image: SetUp, alt: '', caption: 'Shipping features with a smile.', date: '2024-02-19' },
    { id: 4, title: 'Labubu', image: Lububu, alt: 'Labubu', caption: 'Labubu V3 popmart', date: '2025-09-19' },
    { id: 5, title: 'Joy Expo Launch', image: JoyExpo, alt: 'joy', caption: 'App launching at Yangon Expo', date: '2025-09-19' },
    { id: 6, title: 'Cafe', image: CafeCoding, alt: 'cafe', caption: 'Coding Pann Sine application at cafe ', date: '2025-09-19' },
    { id: 7, title: 'Coding with New jeans ', image: BlackSetup, alt: 'new jeans', caption: 'Coding with New Jeans', date: '2025-09-19' },
    { id: 8, title: 'Jungle Cafe', image: JungleCafe, alt: 'cafe', caption: 'Coding at cafe', date: '2025-09-19' },
    { id: 9, title: 'RaspberryPi', image: Pi, alt: 'pi', caption: 'RaspberryPi For Fuel Management System Local Server', date: '2025-09-19' },
    { id: 9, title: 'Desktop Setup', image: GamingDesk, alt: 'Desktop', caption: 'After coding I have to take rest by playing Fornite', date: '2025-09-19' },
    { id: 9, title: 'FMS Version 1 with Python Tkinter', image: Tkinter, alt: 'thinter', caption: 'Python Tkinter for FMS computer software', date: '2025-09-19' },
]
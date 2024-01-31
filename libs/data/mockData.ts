import KhitZayImg from '@/public/assets/khitzayMock.png'
import PageForm from '@/public/assets/pageform3.png';
import MessengerClone from '@/public/assets/mg1.png';

export const projectsData = [
    {
        id: 1,
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
        languages: ["Typescript", "React", "Express", "MongoDB", "Redis", "Zod", "Swagger"]
    },
    {
        id: 2,
        title: "Page Form Drag and Drop",
        titleLink: 'https://drag-and-drop-forms-management.vercel.app',
        description: "This project can create the forms by drag and drop and also can share submit form link with others.Please Readme file in github repo.",
        image: PageForm,
        links: null,
        languages: ["Typescript", "React", "Use-form", "Next", "Tailwind", "Prisma", "PostgreSQL", "Dnd Toolkit"]
    },
    {
        id: 3,
        title: "Real Time Chat App",
        titleLink: 'https://real-time-chat-nine.vercel.app',
        description: "A real-time Messenger clone using the latest web development technologies,fully-functional and visually stunning chat application with Next.js, TypeScript, NextAuth, Pusher.",
        image: MessengerClone,
        links: null,
        languages: ["Typescript", "React", "Use-form", "Tailwind", , "Next", "Next Auth", "Pusher", "Prisma", "SQL"]
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
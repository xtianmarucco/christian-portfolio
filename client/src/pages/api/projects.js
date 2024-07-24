// pages/api/projects.js

const projects = [
  {
    title: "Pao Designs Portfolio",
    description:"I built this portfolio website for Paola Media, a UX/UI Designer from Australia. Working with her significantly enhanced my skills due to the complexity and originality of her designs. She wanted a distinctive way to showcase her work, and together we created something as unique as her projects.",
    image: "/images/pao-design.png",
    tags: ["React ", "Javascript ", "CSS"],
    source: "https://google.com",
    visit: "https://www.paolamedina.design/",
  },
  {
    title: "TypeScript To Do App",
    description:
      "Built this to-do app to review and learn Tailwinds and the basic TypeScript's concepts, like static typing, interfaces, classes, generics, tooling and IDE support.",
    image: "/images/ts-todo.png",
    tags: ["React ", " TypeScript", " Tailwinds CSS"],
    source: "https://google.com",
    visit: "https://typescript-todo-app-omega.vercel.app/",
  },
  {
    title: "Devlights website",
    description:
      "This project was a very important milestone for me cause after working on small projects I was designated to work on the new site for the company.",
    image: "./images/img1.png",
    tags: ["Express ", " React", " Node"],
    source: "https://google.com",
    visit: "https://devlights.com/",
  },
  {
    title: "Movie Database",
    description:
      "I built this this little app to apply and and practice some ReactJs good practices, give a try to WATER CSS and master the use of useMemo, useCallback and useRef hooks from ReactJS, though it's still work in progress.",
    image: "/images/moviesdb.png",
    tags: ["ReactJS", "  water css"],
    source: "https://google.com",
    visit: "https://movie-search-taupe-alpha.vercel.app/",
  },
  {
    title: "Movet website",
    description:
      " I built this landing page and registration system using Angular and TypeScript. this was the first step to Register as a user for a Pet Care service that offers general health services for pets.",
    image: "/images/img2.png",
    tags: ["Angular", " TypeScript"],
    source: "https://google.com",
    visit: "https://movet.co/",
  },
  {
    title: "IBJJF Score App",
    description:
      "I love Jiu Jitsu training and competing so I decided to build a simple score app using react so whenever we are preparing for tournaments we have a simple tool that allows me and my teammates to keep the score as if we were on a real tournament.",
    image: "/images/img3.png",
    tags: ["React"],
    source: "https://google.com",
    visit: "https://bjj-point-counter.vercel.app/",
  },
];

export default function handler(req, res) {
  res.status(200).json(projects);
}

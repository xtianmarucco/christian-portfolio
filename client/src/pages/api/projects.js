// pages/api/projects.js

const projects = [
    {
      title: 'Devlights website',
      description: "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
      image: './images/img1.png',
      tags: ['Mongo', 'Express', 'React', 'Node'],
      source: 'https://google.com',
      visit: 'https://devlights.com/',
    },
    {
      title: 'Movet website',
      description:"While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
      image: '/images/img2.png',
      tags: ['Angular', 'TypeScript'],
      source: 'https://google.com',
      visit: 'https://google.com',
    },
    {
      title: 'IBJJF Score App',
      description: "I love Jiu Jitsu training and competing so I decided to build a simple score app using react so whenever we are preparing for tournaments we have a simple tool that allows me and my teammates to keep the score as if we were on a real tournament.",
      image: '/images/img3.png',
      tags: ['React'],
      source: 'https://google.com',
      visit: 'https://bjj-point-counter.vercel.app/',
    },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(projects);
  }
  
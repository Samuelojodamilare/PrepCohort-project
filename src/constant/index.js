import {
  categoryImg1,
  categoryImg2,
  categoryImg3,
  categoryImg4,
  goalbg1,
  goalbg2,
  goalbg3,
  goalbg4,
  ieltsImg,
  jambImg,
  nabtebImg,
  necoImg,
  testimonialImg1,
  testimonialImg2,
  testimonialImg3,
  waecImg,
} from "../assets";
import {
  faQuestionCircle,
  faBullhorn,
  faSquarePollHorizontal,
  faPoll,
  faGraduationCap,
  faChartLine,
  faFileSignature,
  faCommentDots,
  faSchool,
  faLaptopCode,
  faFileAlt,
  faTags,
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faPersonChalkboard,
  faLightbulb,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export const goal = [
  {
    id: 0,
    title: "Instructor-Led",
    text: "Engage directly with different educators across schools for a dynamic and interactive educational experience",
    icon: faPersonChalkboard,
    image: goalbg1,
  },
  {
    id: 1,
    title: "Interactive Courses",
    text: "Engage with dynamic content, quizzes, discussions, ensuring an active and effective learning experience",
    icon: faLightbulb,
    image: goalbg2,
  },
  {
    id: 2,
    title: "One-on-One Support",
    text: "Connecting directly with instructors for individualized attention, addressing your specific questions and learning needs",
    icon: faHandshake,
    image: goalbg3,
  },
  {
    id: 3,
    title: "Progress Analysis",
    text: "Track your progress. Gain valuable insights into your performance, identify strengths and areas for improvement",
    icon: faChartLine,
    image: goalbg4,
  },
];

export const amazing = [
  {
    id: 0,
    title: "Question and Answer",
    text: "You can ask questions and relevant answers from your colleague under the teacher's moderation.",
    icon: faQuestionCircle,
  },
  {
    id: 1,
    title: "Scoped Announcement",
    text: "You can receive messages disseminated by instructor on any updated, news, or events. School-wide or class-wide.",
    icon: faBullhorn,
  },
  {
    id: 2,
    title: "Integrated Forms",
    text: "Information can be collected using form feature to gather data, facilitate surveys or manage various processes like registration or feedback submission.",
    icon: faSquarePollHorizontal,
  },
  {
    id: 3,
    title: "Integrated Polls",
    text: "Polls enable you to share your opinion on different issues, topics etc. from which decisions can be made",
    icon: faPoll,
  },
];

export const Mamazing = [
  {
    id: 0,
    title: "Quizzes and Exam",
    text: "These are challenges or tests on our platform that help you learn faster by providing you practice questions on what you’ve studied",
    icon: faGraduationCap,
  },
  {
    id: 1,
    title: "Grading",
    text: "Your quizzes and exams gets evaluated after practice. you get scores and feedback on how well you’ve performed",
    icon: faChartLine,
  },
  {
    id: 2,
    title: "Scaled Reports",
    text: "Status updates on your performances in your course is made available to you on weekly basis. You also see how you are ranking with other student’s on board",
    icon: faFileSignature,
  },
  {
    id: 3,
    title: "Feedback",
    text: "Receive valuable and informative feedback on your performance. AI recommendation is also at your beckon",
    icon: faCommentDots,
  },
];

export const examPlatform = [
  {
    id: 0,
    title: "WAEC",
    image: waecImg,
  },
  {
    id: 1,
    title: "JAMB",
    image: jambImg,
  },
  {
    id: 2,
    title: "IELTS",
    image: ieltsImg,
  },
  {
    id: 3,
    title: "NABTEB",
    image: nabtebImg,
  },
  {
    id: 4,
    title: "NECO",
    image: necoImg,
  },
];

export const whyStudy = [
  {
    id: 0,
    title: "Instructor-Led",
    text: "Our instructor-led approach ensures a supportive and interactive learning environment for a more enriching educational experience. Engage directly with qualified educators from different schools who will guide you through material, answer questions, and provide valuable insights",
  },
  {
    id: 1,
    title: "Offline Study",
    text: "With Prepcohort offline support an unstableinternet will not affect timed quizzes,prevent studying, practising of question banketc. We make sure this doesn't happen byallowing resources like course materials,practice questions, quizzes etc downloadableand accessible offline.",
  },
  {
    id: 2,
    title: "Flexibility Across Devices",
    text: "Enjoy the flexibility of wide range of devicessupport on prepcohort which allow your studentto join class and do their tasks with smartphones, tablets and PC through our mobile appand responsive web app.",
  },
];

export const category = [
  {
    id: 0,
    title: "Institutions",
    image: categoryImg1,
    size: "h-48 w-full xl:h-52 xl:w-full rounded-lg xl:rounded-l-xl",
    icon: faSchool,
  },
  {
    id: 1,
    title: "Courses",
    image: categoryImg2,
    size: "h-48 w-full xl:h-60 xl:w-full rounded-lg",
    icon: faLaptopCode,
  },
  {
    id: 2,
    title: "Question Banks",
    image: categoryImg3,
    size: "h-48 w-full xl:h-60 xl:w-full rounded-lg",
    icon: faFileAlt,
  },
  {
    id: 3,
    title: "Topics",
    image: categoryImg4,
    size: "h-48 w-full xl:h-52 xl:w-full rounded-lg xl:rounded-r-xl",
    icon: faTags,
  },
];

export const testimonials = [
  {
    id: 0,
    title: "Clement James",
    text: "The feedback system here is gold. Instructors provide detailed insights, helping me understand not just what I got wrong, but why. Thecommunity aspect is fantastic too, I never feel alone in my studies. Prepcohort truly prioritizes students success!",
    image: testimonialImg1,
    rating: 5,
  },
  {
    id: 1,
    title: "Dare Adejoke",
    text: "Prepcohort is a game-changer! The qualified instructors provide clear explanations, making complex topics easy to grasp. The interactive courses and progress analysis feature have significantly boosted my confidence. I highly recommend it!",
    image: testimonialImg2,
    rating: 5,
  },
  {
    id: 2,
    title: "Wade Warren",
    text: "Prepcohort exceeded my expectations. The one-on-one sessions with instructors helped me bridge any gaps in my understanding, and the examination platform ensured I was well-prepared for my tests. Thumbs up!",
    image: testimonialImg3,
    rating: 5,
  },
];

export const offer = [
  {
    id: 0,
    title: "Reusable Resources",
    text: "Courses, quizzes, forms, polls, etc. become reusable assets that can be used across different classes/groups. While still allowing the resources contents used to evolve overtime without loosing historical status",
    icon: "",
  },
  {
    id: 1,
    title: "Question Bank System",
    text: "Schools can use existing question bank available in the platform created by other schools or create their own question bank for their student's practice sessions.",
    icon: "",
  },
  {
    id: 2,
    title: "Grouping system",
    text: "Maximize course organization with Prepcohort’s flexibility, allowing educators to create and manage multiple classes/groups.",
    icon: "",
  },
  {
    id: 3,
    title: "Teaching Tools",
    text: "Access a diverse array of innovative teaching tools. Our suite of tools is designed to amplify your teaching effectiveness and provide a dynamic learning experience.",
    icon: "",
  },
];

export const whyPrepcohort = [
  {
    id: 0,
    title: "Interactive Courses",
    text: "Schools get empowered to craft engaging courses, provide students with dynamic and immersive learning experience that goes beyond traditional instruction methods",
    icon: "",
  },
  {
    id: 1,
    title: "Moderated Q/A",
    text: "Schools can facilitate engaging learning interactions with teacher-moderated question and answer sessions, allowing them to guide discussion and address queries",
    icon: "",
  },
  {
    id: 2,
    title: "Social Reports",
    text: "You get insights into student’s individual and overall performance, facilitating data-driven teaching strategies for enhanced academic outcomes",
    icon: "",
  },
  {
    id: 3,
    title: "Feedback",
    text: "Your students receive actionable suggestions on providing constructive and personalized feedback and recommendations",
    icon: "",
  },
  {
    id: 4,
    title: "Easy Communication",
    text: "Schools can facilitate seamless communication with communication tools, ensuring effortless and effective interaction with your students",
    icon: "",
  },
  {
    id: 5,
    title: "Rich Question Bank",
    text: "There are diverse array of practice questions for students to enhance their comprehension and preparation for examination",
    icon: "",
  },
  {
    id: 0,
    title: "Time Saving",
    text: "Save valuable time with Prepcohort’s streamlined features, designed to allow more focus on teaching",
    icon: "",
  },
  {
    id: 0,
    title: "AI- Assistance",
    text: "Your students receive actionable suggestions on providing constructive and personalized feedback and recommendations",
    icon: "",
  },
];

export const footer = [
  {
    id: 0,
    title: "location",
    text: "Ipaja, Lagos, Nigeria.",
    iconUrl: faLocationDot,
  },
  {
    id: 1,
    title: "phone",
    text: "+(234) 903-374-6143",
    iconUrl: faPhoneVolume,
  },
  {
    id: 2,
    title: "email",
    text: "info@prepcohort.com",
    iconUrl: faEnvelope,
  },
];

export const socials = [
  {
    id: "0",
    title: "Twitter",
    iconUrl: faTwitter,
    url: "https://x.com/PrepCohort",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: faInstagram,
    url: "https://www.instagram.com/prepcohort/",
  },

  {
    id: "2",
    title: "Facebook",
    iconUrl: faFacebookF,
    url: "https://web.facebook.com/PrepCohort",
  },
];

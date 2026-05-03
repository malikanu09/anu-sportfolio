import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
enabled: true, 
animation: splashAnimation,
duration: 2000 
};

const illustration = {
animated: true 
};

const greeting = {
username: "Anu Malik",
title: "Hi all, I'm Anu Malik",
subTitle: emoji(
"A passionate Full Stack Developer 🚀 and DSA Enthusiast. Pursuing B.Tech in Computer Science (6th Sem) from Dehradun. Skilled in MERN Stack and problem-solving with a focus on efficient code."
  ),
};

const socialMediaLinks = {
github: "https://github.com/malikanu09",
linkedin: "https://www.linkedin.com/in/anu-malik-226b65323",
gmail: "mailto:malikanu72909@gmail.com", 
display: true 
};

const skillsSection = {
title: "What I do",
subTitle: "MERN STACK DEVELOPER & DATA STRUCTURES ENTHUSIAST",
skills: [
 emoji("⚡ Building responsive and high-performance User Interfaces using React.js"),
 emoji("⚡ Developed Study Clone and AI Assistant using modern web technologies"),
 emoji("⚡ Strong grip on DSA: 50+ problems solved using C++ and Python"),
 emoji("⚡ Specialized in Algorithms: Sliding Window, Two Pointers, and Hashmap Algorithm")
 ],
 softwareSkills: [
 { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
 { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
{ skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
{ skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
{ skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
{ skillName: "python", fontAwesomeClassname: "fab fa-python" },
{ skillName: "cpp", fontAwesomeClassname: "fas fa-file-code" },
{ skillName: "mongodb", fontAwesomeClassname: "fas fa-database" }
],
display: true 
};

const educationInfo = {
display: true,
schools: [
{
schoolName: "GRD Institute of Management and Technology",
subHeader: "Bachelor of Technology in Computer Science",
duration: "2023 - 2027",
 desc: "Currently in 6th Semester with top academic performance.",
 descBullets: ["🥈 Silver Medalist - Uttarakhand Technical University (UTU)",
"Focusing on  Data Structures and Full Stack Web Tech"
]
 }
 ]
};

const techStack = {
 viewSkillBars: true,  experience: [
{ Stack: "Frontend (React/Sass)", progressPercentage: "95%" },
 { Stack: "DSA (C++/Python)", progressPercentage: "85%" },
 { Stack: "Backend (Node/Express)", progressPercentage: "70%" }
 ],
 displayCodersrank: false 
};

const workExperiences = {
 display: true, 
experience: [
 {
 role: "Machine Learning Intern",
 company: "Slog Solution PVT. LTD.",
date: "June 2024 – July 2024",
desc: "45-day intensive project-based internship. Worked on data analysis and ML models.",
 descBullets: ["Developed predictive models using Python", "Explored Data Visualization techniques"]
},
{
 role: "College Volunteer",
 company: "GRD IMT Dehradun",
date: "22.Mar.2024 - 25.Mar.2024",
desc: "Managing technical events and coordinating between departments for college fests.",
 descBullets: ["Leadership and team management", "Event logistics coordination"]
}
 ]
};


const achievementSection = {
 display: false,
 achievements: [] 
};

const openSource = {
showGithubProfile: "true", 
 display: false, 
};

const bigProjects = {
title: "Main Projects",
 subtitle: "SOME OF THE COOL STUFF I HAVE BUILT",
 projects: [
 {
projectName: "Study Clone",
projectDesc: "A pixel-perfect frontend clone focusing on clean UI and smooth navigation.",
footerLink: [
{ name: "Demo", url: "https://study-notionn-mern-2vwszc5pi-anu-maliks-projects.vercel.app/" }
 ]
 },
{
projectName: "To-Do List App",
projectDesc: "A responsive To-Do List application built with React.js to manage daily tasks efficiently with a clean UI.",
footerLink: [
{name: "Github", url: "https://github.com/malikanu09/TO-DO-LIST" } 
 ]
 },
 {
 projectName: "AI Interview Assistant",
 projectDesc: "MERN based application with AI capabilities for tech interview preparation.",
footerLink: [
 { name: "Github", url: "https://github.com/malikanu09/AI-chatbot" }
]
 }
 ],
 display: true 
};

const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const resumeSection = { title: "Resume", display: false };

const contactInfo = { 
 title: emoji("Contact Me ☎️"), 
 subtitle: "Discuss a project or just want to say hi?",
 number: "+91-7037240344", 
 email_address: "malikanu72909@gmail.com" 
};

const twitterDetails = { userName: "", display: false };
const isHireable = true; 

export {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  openSource,
  podcastSection,
  resumeSection,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  talkSection,
  techStack,
  twitterDetails,
  workExperiences
};

const projects = [
    {
        name: "BeFit",
        date_started: "April 2022",
        date_completed: "May 2022",
        description: `User interface for a fitness tracker app developed for a client's undergraduate thesis.

      Tools and technologies used: Flutter, Dart
      Responsibility: Developer
      • Utilized Flutter libraries to match the user interface prototype submitted by the client.`,
        img_path: "https://img.youtube.com/vi/SX2LSpXk778/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=SX2LSpXk778",
        url_text: "Watch video",
    },
    {
        name: "VacChain",
        date_started: "August 2021",
        description: `Awarded as the 1st Runner Up of the Impact Hackathon 5G - Health Vertical, a 48-hour hackathon organized by the Impact Hub Manila, currently the Philippines' largest hackathon. 

      VacChain is blockchain-based, foolproof system that aims to address the current inefficient COVID-19 vaccination records system and transform it into a decentralized but still comprehensive infrastructure. By design, VacChain is modular, in that, new vaccine types for diseases beyond COVID-19 can be easily integrated. 
      
      Responsibilities: Team Leader, Backend Developer, and Frontend Developer
      • Organized the team's strategy and assigned roles optimal to the skill set of each team member.
      • Hosted "code reviews", meetings, and learning sessions to facilitate knowledge transfer of technologies and frameworks to be used in the hackathon.
      • Designed, developed, and integrated the blockchain technology behind the backend API, with the open possibility of integrating smart contracts.
      • Created a noSQL database using MongoDB, complete with mock data.
      • Designed and developed the RESTful API endpoints communicating with the blockchain and MongoDB database through the use of Node and Express.js. 
      • Integrated API endpoints to the frontend application created in Vue.js.`,
        img_path: "./src/assets/projects/vacchain.png",
    },
    {
        name: "SitMate",
        date_started: "Jan 2021",
        date_completed: "Jun 2021",
        description: `A postural awareness and fitness tracker app developed for a client's undergraduate thesis at the University of the East Ramon Magsaysay Memorial Medical Center (UERMMC).

        Tools and technologies used: Flutter, Dart, Adobe Illustrator
        Responsibilities: Product Manager, Developer
        • Identified client needs and developed a mockup interface using Adobe Illustrator.
        • Prioritized features according to time constraints, maintaining contact with the client throughout the whole process.
        • Designed the CRUD and helper API endpoints using Dart that communicates to a local database.
        • Implemented certain key aspects of the user interface using Flutter.`,
        img_path: "./src/assets/projects/sitmate.gif",
        url: "https://github.com/NamelessOrganization/SitMate",
    },
    {
        name: "UPV Komsai.Org Website",
        date_started: "Jul 2021",
        description: `Official website of UPV Komsai.Org.

      Tools and technologies used: JavaScript, HTML, CSS
      Responsibility: Developer, Maintainer
      • Developed the vanilla JavaScript, HTML, and CSS based boilerplate code for the website.
      • Split the website parts into corresponding components for easier maintenance.
      • Maintains the website.`,
        url: "https://upv.komsai.org/",
        url_text: "Visit website",
    },
    {
        name: "Zest",
        date_started: "Oct 2020",
        date_completed: "Jun 2021",
        description: `An innovative approach to organizing your day.

        Tools and technologies used: JavaScript, jQuery, HTML, CSS, PHP, MySQL, Bootstrap
        Responsibility: Developer, Quality Assurance
        • Developed important features written in PHP and MySQL.
        • Implemented necessary functionality using JavaScript and jQuery.
        • Undertaken quality assured the application through code reviews.
        • Written documentation for the project.`,
        url: "https://github.com/jvc1019/Zest",
    },
    {
        name: "Yesterday's Dream",
        date_started: "2017",
        date_completed: "2018",
        description:
            "A pretty fun role-playing game (RPG) made with RPG Maker MV.",
        img_path: "./src/assets/projects/yesterday_dream.png",
        url: "https://1drv.ms/u/s!AvN4LNS2ng4d_CscSppj7tJl82W3?e=P07dGQ",
        url_text: "Download",
    },
    {
        name: "Robotic Bottle-to-Ticket Exchanger (RoBoTE)",
        date_started: "Jun 2015",
        date_completed: "Feb 2016",
        description: `An entry to the National Science and Technology Fair 2016 - Innovation Hub.
              • Champion, Robotics Category, Regional Scilympics 2015
              • Champion, Science Investigatory Project Category, Division Scilympics 2015`,
        img_path: null,
        url: null,
    },
];

export default projects;

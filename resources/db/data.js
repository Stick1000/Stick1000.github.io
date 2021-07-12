const PLACEHOLDER_IMAGE = {
    EDUCATION: "resources/img/icons/education.png",
    SKILLS: null,
    TECHNOLOGIES: "resources/img/icons/technologies.png",
    PROJECTS_DONE: null,
};

const education = [
    {
        name: "Aklan Catholic College",
        degree: "Elementary",
        year_start: 2003,
        year_end: 2012,
        description: "• Class Valedictorian",
        img_path: "resources/img/logos/acc.png",
    },
    {
        name: "Regional Science High School for Region VI",
        degree: "Junior High School",
        year_start: 2012,
        year_end: 2016,
        description:
            "• Part of Western Visayas delegate to the 2016 National Science and Technology Fair\n• Founded, along with four co-founders, the RSHS-VI Robotics Club, the first dedicated robotics club in Western Visayas",
        img_path: "resources/img/logos/rshs6.png",
    },
    {
        name: "Regional Science High School for Region VI",
        degree: "Senior High School",
        year_start: 2016,
        year_end: 2018,
        description: "• With High Honors\n• Awards in Innovation",
        img_path: "resources/img/logos/rshs6.png",
    },
    {
        name: "University of the Philippines Visayas",
        degree: "B.S. in Computer Science",
        year_start: 2018,
        year_end: null,
        description:
            "• University Scholar - 1st Semester SY 2020-2021\n• College Scholar - 2nd Semester SY 2018-2019",
        img_path:
            "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/University_of_The_Philippines_seal.svg/500px-University_of_The_Philippines_seal.svg.png",
    },
];

const skills = [
    {
        name: "Software Development",
        img_path: "resources/img/skills/undraw_programming.svg",
    },
    {
        name: "Web Development",
        img_path: "resources/img/skills/undraw_Code_typing.svg",
    },
];

const technologies = [
    {
        name: "HTML",
        level: "Intermediate",
        img_path:
            "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
        name: "CSS",
        level: "Intermediate",
        img_path:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
        name: "JavaScript",
        level: "Intermediate",
        img_path:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
        name: "Dart",
        level: "Intermediate",
        img_path:
            "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
    },
    {
        name: "Flutter",
        level: "Intermediate",
        img_path:
            "https://www.andreasnesheim.no/wp-content/uploads/2019/05/logo_flutter_1080px_clr.png",
    },
    {
        name: "Bootstrap",
        level: "Intermediate",
        img_path:
            "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
];

const projectsDone = [
    {
        name: "Navarro Hotel Website",
        date_started: "July 2021",
        date_completed: "Present",
        description:
            "A company website for Navarro Hotel at Brgy. Caticlan, Malay, Aklan.",
        img_path:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/247511297.jpg?k=49c31319e5a8e6c09eccecff743154ad4c0491b179ff920296a73f79ffc55391&o=&hp=1",
        url: null,
    },
    {
        name: "SitMate",
        date_started: "Jan 2021",
        date_completed: "Jun 2021",
        description:
            "A postural awareness and fitness tracker app developed for the University of the East Ramon Magsaysay Memorial Medical Center (UERMMC) undergraduate thesis.",
        img_path: "resources/img/projects/sitmate.gif",
        url: "https://github.com/NamelessOrganization/SitMate",
    },
    {
        name: "Zest",
        date_started: "Oct 2020",
        date_completed: "Jun 2021",
        description: "An innovative approach to organizing your day.",
        img_path: "resources/img/projects/zest.png",
        url: "https://github.com/jvc1019/Zest",
    },
    {
        name: "Yesterday's Dream",
        date_started: "2017",
        date_completed: "2018",
        description:
            "A pretty fun role-playing game (RPG) made with RPG Maker MV.",
        img_path: "resources/img/projects/yesterday_dream.png",
        url: "https://1drv.ms/u/s!AvN4LNS2ng4d_CscSppj7tJl82W3?e=P07dGQ",
        urlText: "Download",
    },
    {
        name: "Robotic Bottle-to-Ticket Exchanger (RoBoTE)",
        date_started: "Jun 2015",
        date_completed: "Feb 2016",
        description:
            "An entry to the National Science and Technology Fair 2016 - Innovation Hub.\n• Champion, Robotics Category, Regional Scilympics 2015\n• Champion, Science Investigatory Project Category, Division Scilympics 2015",
        img_path: null,
        url: null,
    },
];

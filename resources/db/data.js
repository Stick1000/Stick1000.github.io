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
        description: "XD",
        img_path: "resources/img/logos/acc.png",
    },
    {
        name: "Regional Science High School for Region VI",
        degree: "Junior High School",
        year_start: 2012,
        year_end: 2016,
        description: "XD",
        img_path: "resources/img/logos/rshs6.png",
    },
    {
        name: "Regional Science High School for Region VI",
        degree: "Senior High School",
        year_start: 2016,
        year_end: 2018,
        description: "XD",
        img_path: "resources/img/logos/rshs6.png",
    },
    {
        name: "University of the Philippines Visayas",
        degree: "B.S. in Computer Science",
        year_start: 2018,
        year_end: null,
        description: "XD",
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
        description: "test",
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
        img_path:
            "https://image.freepik.com/free-photo/modern-office-space-interior_158595-5206.jpg",
        url: "https://github.com/NamelessOrganization/SitMate",
    },
    {
        name: "Robotic Bottle-to-Ticket Exchanger (RoBoTE)",
        date_started: "Jun 2015",
        date_completed: "Feb 2016",
        description:
            "An entry to the National Science and Technology Fair 2016 - Innovation Hub",
        img_path: null,
        // "https://image.freepik.com/free-photo/used-plastic-bottles-recycling-bins-earth-day-campaign_53876-104848.jpg",
        url: null,
    },
];

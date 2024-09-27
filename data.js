var education = {
  "name": "Education",
  "entries": [{
    "business": "Massachusetts Institute of Technology",
    "moreLink": "https://dspace.mit.edu/handle/1721.1/113151",
    "startYear": 2012,
    "endYear": 2017,
    "features": [
      "Obtained Master of Engineering in Computer Science from the MIT Media Lab in 2017",
      "Obtained Bachelor of Science in Computer Science in 2016"
    ],
    "keywords": [],
    "importance": 10
  }],
  "entryTemplate": genericEntryTemplate,
  "sectionTemplate": genericSectionTemplate
};

var experience = {
  "name": "Experience",
  "entries": [
    {
      "business": "PTC Inc.",
      "moreLink": "https://www.ptc.com/en/about/reality-lab",
      "position": "Senior Principal Innovation Engineer",
      "startYear": 2019,
      "endYear": null,
      "features": [
        "Developing a cloud-based hosting solution for multi-user contextualized XR experiences",
        "Invented real-time depth-streaming protocol with peer-to-peer connections and storage format",
        "Designing and prototyping new experiences across AR, AI, and IoT",
        "Leading testing and developer tooling efforts across all Reality Lab projects",
        "Granted two patents for original research (US11776205B2, US11625140B2)",
        "2nd author on CHI 2024 publication \"The Pop-Up Metaverse: A Multi-User, Multi-Tasking Spatial Computing Environment for Collaborative Spatial Problem-Solving.\"",
      ],
      "keywords": [
        "Distributed Systems Engineering",
        "Augmented Reality",
        "Industrial IoT",
        "Artificial Intelligence",
      ],
      "importance": 10
    },
    {
      "business": "Mozilla",
      "moreLink": "https://iot.mozilla.org/",
      "position": "Platform Engineer, Advanced Development",
      "startYear": 2017,
      "endYear": 2019,
      "features": [
        "Developed a C library for any Arduino-compatible device to expose the Web of Things API",
        "Created a comprehensive rules engine for automating smart home functionality",
        "Designed, implemented, and tested the Mozilla IoT Gateway's OAuth security framework",
        // "Created and deployed a skill for Mycroft voice assistants to control the Gateway",
        "Wrote a series of technical blog posts for Mozilla Hacks (90,000+ followers)"
      ],
      "keywords": ["JavaScript", "Node", "Linux", "Embedded Devices", "C"],
      "importance": 10
    },
    {
      "business": "MIT Media Lab",
      "moreLink": "https://vimeo.com/143709971", // TODO broken link: http://fluid.media.mit.edu/node/227",
      "position": "Fluid Interfaces Researcher",
      "startYear": 2012,
      "endYear": 2017,
      "features": [
        "Designed adaptable, modular interfaces for the Reality Editor, a novel AR IoT platform",
        // "Assisted the maintenance and refactoring of this platform's growing codebase",
        "Refined inter-device protocols for reliability and speed",
        "2nd author on UBICOMP 2013 publication \"Reality Editor: Programming Smarter Objects\""
      ],
      "keywords": ["C++", "iOS", "JavaScript", "Node"],
      "importance": 10
    },
    {
      "business": "CSAIL Distributed Robotics Laboratory",
      "moreLink": "https://groups.csail.mit.edu/drl/wiki/index.php?title=Main_Page",
      "position": "Undergraduate Researcher",
      "startYear": 2015,
      "endYear": 2016,
      "features": [
        "Built an online game for crowdsourcing the design of robots"
      ],
      "keywords": ["JavaScript", "React", "Node"],
      "importance": 2
    },
    {
      "business": "Mozilla",
      "moreLink": "https://www.mozilla.org/",
      "position": "Firefox OS Systems Front End Team Intern",
      "years": [2014, 2015],
      "features": [
        "Produced several major features and improvements over two summer internships",
        // "Ensured full test coverage and production-grade reliability of work",
        "Spearheaded research project to uncover a significant market opportunity for Firefox OS"
      ],
      "keywords": ["C++", "JavaScript", "Android Internals"],
      "importance": 9
    },
    {
      "business": "MIT Media Lab",
      "moreLink": "https://vimeo.com/143709971",
      "position": "Fluid Interfaces Undergraduate Researcher",
      "startYear": 2012,
      "endYear": 2014,
      "features": [
        "Specified meaningful multimodal interactions between connected objects",
        //"Implementing low-latency network connections using AllJoyn and\
        //  OpenSoundControl"
        "Optimized low-latency data transfer over UDP",
        "2nd author on UBICOMP 2013 publication \"Reality Editor: Programming Smarter Objects\""
      ],
      "keywords": ["C++", "iOS", "Augmented Reality", "Internet of Things"],
      "importance": 6
    },
    {
      "business": "iNetDispatch, LLC.",
      "moreLink": "http://www.inetdispatch.com/",
      "position": "Intern",
      "startYear": 2011,
      "endYear": 2012,
      "features": [
        "Developed a real-time chat system for dispatchers and units in the field",
        "Implemented global drag and drop for user interactions",
        "Created a playback feature to show the previous locations of units",
      ],
      "keywords": ["ActionScript"],
      "importance": 3
    },
    {
      "business": "Dryden Flight Research Center",
      "position": "Data Acquisition Engineer Intern",
      "startYear": 2011,
      "endYear": 2011,
      "features": [
        "Wrote utilities for the analysis of flight data with an\
       emphasis on real-time visualization",
        "Coordinated flight test with group, designing procedures to\
       guarantee safety and repeatability",
        "Shared findings and practices in a technical presentation"
      ],
      "keywords": ["Matlab"],
      "importance": 5
    },
    {
      "business": "Infinite Heart",
      "position": "Interaction Designer",
      "startYear": 2011,
      "endYear": 2011,
      "features": [
        "Designed a series of 3D interactive applets for use on the Infinite " +
        "Heart website and in Infinite heart seminars",
        "Synthesized several novel visualization and interaction methods"
      ],
      "keywords": ["Java", "OpenGL"],
      "importance": 1
    },
    {
      "business": "Phoenix Country Day School",
      "moreLink": "http://community.pcds.org/netcommunity/page.aspx?pid=1228",
      "position": "SMALLab Teaching Assistant",
      "startYear": 2011,
      "endYear": 2012,
      "features": [
        "Planned and taught a series of introductory programming lectures",
        "Advised and assisted students in the creation of digital " +
        "interactive art and educational games",
        "Created a SMALLab-tailored gesture recognition engine to facilitate " +
        "students&CloseCurlyQuote; use of non-standard interaction designs"
      ],
      "keywords": ["Java", "OptiTrack"],
      "importance": 1
    }],
  "entryTemplate": genericEntryTemplate,
  "sectionTemplate": genericSectionTemplate
};

var projects = {
  "name": "Projects",
  "entries": [
    {
      "name": "Game Development",
      "moreLink": "https://hobinjk.github.io/portfolio",
      "startYear": 2010,
      "endYear": null,
      "features": [
        "[Portfolio: https://hobinjk.github.io/portfolio](https://hobinjk.github.io/portfolio)",
        "[League of Lines](https://hobinjk.github.io/league-of-lines/): Voice-line-based online competitive card game",
        // "Moxie: Coach for Guild Wars 2 (GW2) PvE",
        "[The Dragonfruitvoid](https://hobinjk.github.io/dragonfruitvoid/): 2D simulator of Guild Wars 2's most complex raid",
        "[Discretize Gear Optimizer](https://optimizer.discretize.eu/?m=raids): Part of team building optimizer for Guild Wars 2 gear sets",
        "Upton Manor: Co-wrote and co-ran one-day live-action roleplaying game",
        // "Cabbage Legs: Idle quadripedal robot optimization",
        // "Comic Sans: Co-wrote ten-day live-action roleplaying game",
      ],
      "keywords": ["JavaScript", "C++", "Rust", "Writing", "Open Source"]
    },
    {
      "name": "New XKit",
      "moreLink": "https://github.com/new-xkit/XKit/",
      "startYear": 2015,
      "endYear": 2019,
      "features": [
        "Forked and revitalized a popular open source project for improving Tumblr",
        "Supported over 400,000 users across Chrome, Firefox, and Safari"
        // "Triaging bugs and supporting users while adapting to Tumblr's ever-changing website"
      ],
      "keywords": ["JavaScript", "Browser Extension", "Open Source"]
    },
    {
      "name": "Nineteen Below",
      "startYear": 2015,
      "endYear": 2016,
      "moreLink": "https://hobinjk.github.io/nineteen-below/",
      "importance": 4,
      "features": [
        "Created a simple game based on procedurally generated ice block puzzles"
      ],
      "keywords": ["JavaScript", "Canvas"]
    },
    {
      "name": "In Other Words",
      "startYear": 2016,
      "endYear": 2016,
      "moreLink": "https://hobinjk.github.io/in-other-words/",
      "importance": 3,
      "features": [
        "Experimented with the use of politicized typing mechanics as brainwashing",
        "Refined implementation based on playtesting and design reviews"
      ],
      "keywords": ["JavaScript", "Canvas"]
    },
    {
      "name": "Cabbage Legs",
      "startYear": 2015,
      "endYear": 2015,
      "moreLink": "https://hobinjk.github.io/cabbage-legs/",
      "importance": 2,
      "features": [
        "Programmed a genetic algorithm that optimizes simulated quadripedal robots",
        "Extended into an online game for crowdsourcing the design of robots as undergraduate researcher at CSAIL's Distributed Robotics Laboratory",
      ],
      "keywords": ["JavaScript", "Machine Learning", "Canvas"]
    },
    {
      "name": "Aqueduct",
      "startYear": 2015,
      "endYear": 2015,
      "moreLink": "https://hobinjk.github.io/aqueduct/",
      "importance": 6,
      "features": [
        "Implemented simple static analysis of JavaScript for type assignment"
      ],
      "keywords": ["JavaScript"]
    },
    {
      "name": "CMS.611 Games",
      "startYear": 2014,
      "endYear": 2014,
      "moreLink": "",
      "importance": 5,
      "features": [
        "Collaborated with classmates to create and improve digital games",
        "Sparkly Redemption: a top-down shooter with power-ups",
        "Saving Gora Gora: a series of mini-games educating about cholera prevention"
      ],
      "keywords": ["JavaScript", "Canvas"]
    },
    {
      "name": "Haven",
      "startYear": 2013,
      "endYear": 2013,
      "moreLink": "https://github.com/hobinjk/haven/",
      "importance": 6,
      "features": [
        "Designed a secure filesharing site based on client-side encryption"
      ],
      "keywords": ["Go", "JavaScript", "OpenSSL", "Emscripten"]
    },
    {
      "name": "Human + Computer",
      "startYear": 2014,
      "endYear": 2014,
      "importance": 4,
      "features": [
        "Produced an interactive art project exploring transhumanism",
      ],
      "keywords": ["C", "Design", "Fabrication"]
    },
    {
      "name": "Tansley Effect",
      "startYear": 2014,
      "endYear": null,
      "features": [
        "Cofounded a startup to optimize data sharing within academic research groups",
        "Interviewed potential customers to refine and improve business strategy and design",
        "Prepared a website on a compressed timescale for a demo day presentation"
      ],
      "keywords": ["JavaScript", "HTML", "Communication"],
      "importance": 6
    },
    {
      "name": "Firefox Development",
      "startYear": 2011,
      "endYear": null,
      "features": [
        "Fixed bugs #659576 and #570760",
        "Began creation of a global keyboard shortcuts popup (bug #492557)",
      ],
      "keywords": ["JavaScript", "HTML", "Open Source"],
      "importance": 2
    },
    {
      "name": "Random Hall Laundry Server",
      "moreLink": "http://laundry.mit.edu/",
      "startYear": 2013,
      "endYear": 2016,
      "importance": 4,
      "features": [
        "Collaborated with other students to build a joint web application and hardware installation",
        // "Hardware uses off-the-shelf components to determine the power-on state of any machine",
        // "Web application interfaces with the hardware to display machine usage in real-time"
      ],
      "keywords": ["JavaScript", "Node", "Internet of Things"]
    },
    {
      "name": "Student Groups",
      "startYear": 2012,
      "endYear": 2016,
      "importance": 6,
      "features": [
        "President of the Laboratory for Chocolate Science (2012&ndash;2016)",
        "Random Hall Judiciary Committee Member (2013&ndash;2014) and Chair (2014&ndash;2015)",
        // "Secretary of the MIT Science Fiction Society"
        // "Computer Chair, Laundry King, and Webmaster for Random Hall"
      ],
      "keywords": ["Leadership", "Communication", "Fundraising"]
    }
  ],
  "entryTemplate": projectsEntryTemplate,
  "sectionTemplate": genericSectionTemplate
};

var resume = {
  "name": "James Hobin",
  "email": "hobinjk@gmail.com",
  "address": "Cambridge, MA 02139",
  "phone": "(623) 297&ndash;8310",
  "username": "hobinjk",
  "sections": [
    education,
    experience,
    projects
  ]
};

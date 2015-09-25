var education = {
  "name": "Education",
  "entries": [{
    "business": "Massachusetts Institute of Technology",
    "position": "Senior",
    "startYear": 2012,
    "endYear": null,
    "features": [
      "Candidate for Bachelor of Science in Computer Science",
      "Accepted into EECS Masters of Engineering Program"
    ],
    "importance": 10
  }],
  "entryTemplate": genericEntryTemplate,
  "sectionTemplate": genericSectionTemplate
};

var experience = {
  "name": "Experience",
  "entries": [
  {
    "business": "CSAIL Distributed Robotics Laboratory",
    "moreLink": "http://groups.csail.mit.edu/drl/wiki/index.php?title=Main_Page",
    "position": "Undergraduate Researcher",
    "startYear": 2015,
    "endYear": null,
    "features": [
      "Devising an online game for crowdsourcing the design of robots",
      "Collaborating to integrate with DRL's state-of-the-art simulation and fabrication technology"
    ],
    "importance": 10
  },
  {
    "business": "Mozilla",
    "moreLink": "https://www.mozilla.org/",
    "position": "Intern",
    "startYear": 2014,
    "endYear": 2015,
    "features": [
      "Worked for two summers on the Firefox OS Systems Front End team",
      "Produced several major features and improvements integrated with gargantuan codebase",
      "Ensured full test coverage and production-grade reliability of work",
      "Spearheaded research project to uncover a significant market opportunity for Firefox OS"
    ],
    "importance": 10
  },
  {
    "business": "MIT Media Lab",
    "moreLink": "http://fluid.media.mit.edu/node/227",
    "position": "Fluid Media Group Researcher",
    "startYear": 2012,
    "endYear": 2014,
    "features": [
      "Created systems for controlling arbitrary household devices",
      "Designed meaningful multimodal interactions between connected objects",
      //"Implementing low-latency network connections using AllJoyn and\
      //  OpenSoundControl"
      "Optimized low-latency data transfer over HTTP"
    ],
    "importance": 8
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
    "importance": 6
  },
  {
    "business": "Infinite Heart",
    "position": "Interaction Designer",
    "startYear": 2011,
    "endYear": 2011,
    "features": [
      "Designed a series of 3D interactive applets for use on the Infinite "+
       "Heart website and in Infinite heart seminars",
      "Synthesized several novel visualization and interaction methods"
    ],
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
      "Advised and assisted students in the creation of digital "+
       "interactive art and educational games",
      "Created a SMALLab-tailored gesture recognition engine to facilitate "+
       "students&CloseCurlyQuote; use of non-standard interaction designs"
    ],
    "importance": 1
  }],
  "entryTemplate": genericEntryTemplate,
  "sectionTemplate": genericSectionTemplate
};

var projects = {
  "name": "Projects",
  "entries": [
  {
    "name": "Cabbage Legs",
    "startYear": 2015,
    "endYear": 2015,
    "features": [
      "Programmed a genetic algorithm that optimizes simulated quadripedal robots",
      "Play with it at <a href=\"http://hobinjk.github.io/cabbage-legs/\">hobinjk.github.io/cabbage-legs/</a>"+
      " and <a href=\"http://hobinjk.github.io/cabbage-legs/speed.html\">hobinjk.github.io/cabbage-legs/speed.html</a>"
    ]
  },
  {
    "name": "Human + Computer",
    "startYear": 2014,
    "endYear": 2014,
    "features": [
      "Designed and implemented an interactive art project exploring transhumanism",
    ]
  },
  // {
  //   "name": "Tansley Effect",
  //   "startYear": 2014,
  //   "endYear": null,
  //   "features": [
  //     "Cofounded a startup to optimize data sharing within academic research groups",
  //     "Interviewed potential customers to refine and improve business strategy and design",
  //     "Prepared a website on a compressed timescale for a demo day presentation"
  //   ]
  // },
  {
    "name": "Firefox Development",
    "startYear": 2011,
    "endYear": null,
    "features": [
      "Fixed bugs #659576 and #570760",
      "Currently creating a global keyboard shortcuts popup (bug #492557)",
    ],
    "importance": 1
  },
  {
    "name": "Random Hall Laundry Server",
    "moreLink": "http://laundry.mit.edu/",
    "startYear": 2013,
    "endYear": null,
    "features": [
      "Developed a joint web application and hardware installation",
      "Hardware uses off-the-shelf components to determine the power-on state of any machine",
      "Web application interfaces with the hardware to display machine usage in real-time"
    ]
  },
  {
    "name": "Student Groups",
    "startYear": 2013,
    "endYear": null,
    "features": [
      "President of the Laboratory for Chocolate Science",
      "Judiciary Committee Chair of Random Hall"
      // "Secretary of the MIT Science Fiction Society"
      // "Computer Chair, Laundry King, and Webmaster for Random Hall"
    ]
  }
  ],
  "entryTemplate": projectsEntryTemplate,
  "sectionTemplate": genericSectionTemplate
};

var resume = {
  "name": "James Hobin",
  "email": "hobinjk@mit.edu",
  "address": "MIT, Cambridge, MA 02139",
  "phone": "(623) 297&ndash;8310",
  "username": "hobinjk",
  "sections": [
    education,
    experience,
    projects
  ]
};

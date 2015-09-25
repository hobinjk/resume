var education = {
  "name": "Education",
  "entries": [{
    "business": "Massachusetts Institute of Technology",
    "position": "Junior",
    "startYear": 2012,
    "endYear": null,
    "features": [
      "Candidate for Bachelor of Science in Computer Science"
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
    "business": "MIT Media Lab",
    "moreLink": "http://fluid.media.mit.edu/node/227",
    "position": "Fluid Media Group Researcher",
    "startYear": 2012,
    "endYear": null,
    "features": [
      "Creating systems for controlling arbitrary household devices",
      "Designing meaningful multimodal interactions between connected objects",
      //"Implementing low-latency network connections using AllJoyn and\
      //  OpenSoundControl"
      "Optimizing low-latency data transfer over HTTP"
    ],
    "importance": 10
  },
  {
    "business": "Mozilla",
    "moreLink": "https://www.mozilla.org/",
    "position": "Intern",
    "startYear": 2014,
    "endYear": 2014,
    "features": [
      "Worked on the Firefox OS Systems Front End team",
      "Produced several major features and improvements integrated with gargantuan codebase",
      "Ensured full test coverage and production-grade reliability of work"
    ],
    "importance": 9
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
  //{
  //  "name": "Human + Computer",
  //  "startYear": 2014,
  //  "endYear": 2014,
  //  "features": [
  //    "Designed and implemented an interactive art project exploring transhumanism",
  //  ]
  //},
  {
    "name": "Tansley Effect",
    "startYear": 2014,
    "endYear": null,
    "features": [
      "Cofounded a startup to optimize data sharing within academic research groups",
      "Interviewed potential customers to refine and improve business strategy and design",
      "Prepared a website on a compressed timescale for a demo day presentation"
    ]
  },
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
      "President of the Laboratory for Chocolate Science"
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
  "address": "282 Massachusetts Ave. Cambridge, MA 02139",
  "phone": "(623) 297&ndash;8310",
  "username": "hobinjk",
  "sections": [
    education,
    experience,
    projects
  ]
};

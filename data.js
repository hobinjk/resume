var education = {
  "name": "Education",
  "entries": [{
    "business": "Massachusetts Institute of Technology",
    "position": "Sophomore",
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
      "Designing multimodal interactions between connected devices",
      "Implementing low-latency network connections using AllJoyn and\
        OpenSoundControl"
    ],
    "importance": 10
  },
  {
    "business": "iNetDispatch, LLC.",
    "moreLink": "http://www.inetdispatch.com/",
    "position": "Intern",
    "startYear": 2011,
    "endYear": 2012,
    "features": [
      "Fixed various bugs in iNetDispatch&CloseCurlyQuote;s\
      Computer-Aided Dispatch software",
      "Developed a chat system for dispatchers and units",
      "Implemented drag and drop for user interactions",
      "Created a playback feature to show the previous locations of units",
    ],
    "importance": 8
  },
  {
    "business": "Dryden Flight Research Center",
    "position": "Data Acquisition Engineer Intern",
    "startYear": 2011,
    "endYear": 2011,
    "features": [
      "Wrote utilities for the capture and analysis of data with an emphasis\
       on real-time visual feedback during flight tests",
      "Coordinated flight test with group members, designing procedures to\
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
      "Designed a series of 3D interactive applets for use on the Infinite\
       Heart website and in Infinite heart seminars",
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
      "Planned and taught a series of introductory programming lectures.",
      "Advised and assisted students in the creation of computer-generated\
       interactive art and educational games.",
      "Created a SMALLab-tailored gesture recognition engine to facilitate\
       students&CloseCurlyQuote; use of non-standard interaction designs."
    ],
    "importance": 3
  }],
  "entryTemplate": genericEntryTemplate,
  "sectionTemplate": genericSectionTemplate
};

var projects = {
  "name": "Projects",
  "entries": [
  {
    "name": "Firefox Development",
    "startYear": 2011,
    "endYear": null,
    "features": [
      "Fixed bugs #659576 and #570760.",
      "Currently creating a global keyboard shortcuts popup (bug #492557).",
    ]
  },
  {
    "name": "Random Hall Laundry Server",
    "moreLink": "http://laundry.mit.edu/",
    "startYear": 2013,
    "endYear": null,
    "features": [
      "Developed a joint web application and hardware installation",
      "Hardware uses off-the-shelf components to determine the power-on state\
       of any laundry machine",
      "Web application interfaces with the hardware to display machine usage\
       in real-time"
    ]
  }],
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

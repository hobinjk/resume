var education = {
  "name": "Education",
  "entries": [{
    "business": "Massachusetts Institute of Technology",
    "position": "Sophomore",
    "duration": "2012&ndash;",
    "features": [
      "Candidate for Bachelor of Science in Computer Science"
    ]
  }],
  "entryTemplate": genericEntryTemplate,
  "sectionTemplate": genericSectionTemplate
};

var experience = {
  "name": "Experience",
  "entries": [
  {
    "business": "MIT Media Lab",
    "position": "Fluid Media Group Researcher",
    "duration": "2012&ndash;",
    "features": [
      "Creating systems for controlling arbitrary household devices",
      "Designing multimodal interactions between connected devices",
      "Implementing low-latency synchronous network connections using AllJoyn\
       and OpenSoundControl"
    ]
  },
  {
    "business": "iNetDispatch, LLC.",
    "position": "Intern",
    "duration": "2011&ndash;2012",
    "features": [
      "Fixed various bugs in iNetDispatch&CloseCurlyQuote;s\
      Computer-Aided Dispatch software",
      "Developed a chat system for dispatchers and units",
      "Implemented drag and drop for user interactions",
      "Created a playback feature to show the previous locations of units",
    ]
  },
  {
    "business": "Dryden Flight Research Center",
    "position": "Data Acquisition Engineer Intern",
    "duration": "2011",
    "features": [
      "Wrote utilities for the capture and analysis of data with an emphasis\
       on real-time visual feedback during flight tests",
      "Coordinated flight test with group members, designing procedures to\
       guarantee safety and repeatability",
      "Shared findings and practices in a technical presentation"
    ]
  },
  {
    "business": "Infinite Heart",
    "position": "Interaction Designer",
    "duration": "2011",
    "features": [
      "Designed a series of 3D interactive applets for use on the Infinite\
       Heart website and in Infinite heart seminars",
      "Synthesized several novel visualization and interaction methods"
    ]
  },
  {
    "business": "Phoenix Country Day School",
    "position": "SMALLab Teaching Assistant",
    "duration": "2011&ndash;2012",
    "features": [
      "Planned and taught a series of introductory programming lectures.",
      "Developed networking libraries enabling students to easily create\
        meaningful work",
      "Created a SMALLab-tailored gesture recognition engine to facilitate\
       students&CloseCurlyQuote; use of non-standard interaction designs."
    ]
  }],
  "entryTemplate": genericEntryTemplate,
  "sectionTemplate": genericSectionTemplate
};

function genBugLink(bug) {
  return '<a href="https://bugzilla.mozilla.org/show_bug.cgi?id='+bug+'">#'+bug+'</a>';
}

var projects = {
  "name": "Projects",
  "entries": [
  {
    "name": "Firefox Development",
    "duration": "2011&ndash;",
    "features": [
      "Fixed bugs "+genBugLink(659576)+" and "+genBugLink(570760),
      "Currently working on bug "+genBugLink(492557),
    ]
  },
  {
    "name": "Random Hall Laundry Server",
    "duration": "2013&ndash;",
    "features": [
      "Developed a joint web application and hardware installation",
      "Hardware uses off-the-shelf components to determine the power-on state\
       of any laundry machine",
      "Web application interfaces with the hardware to display machine usage\
       in real-time"
    ]
  }],
  //"entryTemplate": genericEntryTemplate,
  "entryTemplate": projectsEntryTemplate,
  "sectionTemplate": genericSectionTemplate
};

var resume = {
  "name": "James Hobin",
  "email": "hobinjk@mit.edu",
  "address": "282 Massachusetts Ave. Cambridge, MA 02139",
  "phone": "(623) 297&ndash;8310",
  "sections": [
    education,
    experience,
    projects
  ]
};



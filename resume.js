function formatDuration(startYear, endYear, years) {
  if (startYear) {
    if (startYear === endYear) {
      return "" + startYear;
    }
    var duration = startYear + "&ndash;";
    if (endYear) {
      duration += endYear;
    } else {
      duration += "Present";
    }
    return duration;
  }
  return years.join(', ');
}

function formatFeature(feature) {
  // linkify bugzilla bugs and us patents
  return feature.replace(
    /#(\d{5,7})/g,
    '<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=$1">#$1</a>'
  ).replace(
    /US([0-9B]+)/g,
    '<a href="https://patents.google.com/patent/US$1/en">US$1</a>'
  );
}

function addHelpers(objects) {
  for(var i = 0; i < objects.length; i++) {
    objects[i].formatDuration = formatDuration;
    objects[i].formatFeature = formatFeature;
  }
}

for(var i = 0; i < resume.sections.length; i++) {
  addHelpers(resume.sections[i].entries);
}

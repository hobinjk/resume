function formatDuration(startYear, endYear) {
  if(startYear === endYear)
    return ""+startYear;
  var duration = startYear+"&ndash;";
  if(endYear)
    duration += endYear;
  return duration;
}

function formatFeature(feature) {
  // linkify bugzilla bugs
  return feature.replace(
    /#(\d{5,7})/g,
    '<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=$1">#$1</a>'
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

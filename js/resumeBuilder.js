//Build contacts object
var contacts={
  'mobile': '201-555-5555', 
  'email': 'a1p2e3@gmail.com',
  'GitHub': 'apewiki',
  'twitter': '@QZtwit01',
  'location': 'Bergen County, NJ'
};

var welcomeMessage='Welcome!';

var skills=['Excel','C/C++','Python', 'Java', 'HTML/CSS', 'Web Development', 'Android Programming'];

var biopic='./images/fry.jpg';

// Build bio object
var bio={
  'name': 'Katie Zhang', 
  'role':'Web Developer', 
  'contacts':contacts, 
  'welcomeMessage':welcomeMessage, 
  'skills':skills, 
  'biopic':biopic
}; 

//Replace '%data' to create variables of HTML strings to be inserted before or after DOM elements
bio.display=function() {
  var myHTMLheaderName=HTMLheaderName.replace('%data%',bio.name);
  var myHTMLheaderRole=HTMLheaderRole.replace('%data%',bio.role);
  var myHTMLcontactGeneric=HTMLcontactGeneric.replace('%contact%', contacts.mobile).replace('%data%', contacts.email);

  var myHTMLmobile=HTMLmobile.replace('%data%',contacts.mobile);
  var myHTMLemail=HTMLblog.replace('%data%',contacts.email);
  var myHTMLgithub=HTMLgithub.replace('%data%',contacts.GitHub);
  var myHTMLtwitter=HTMLtwitter.replace('%data%',contacts.twitter);
  var myHTMLlocation=HTMLlocation.replace('%data%',contacts.location);

  
  var myHTMLbioPic=HTMLbioPic.replace('%data%', bio.biopic);
  var myHTMLWelcomeMsg=HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage);
  

  $('#header').prepend(myHTMLheaderRole);
  $('#header').prepend(myHTMLheaderName);
  $('#header').append(myHTMLbioPic);


  $('#topContacts').append(myHTMLmobile);
  $('#topContacts').append(myHTMLemail);
  $('#topContacts').append(myHTMLtwitter);
  $('#topContacts').append(myHTMLgithub);
  $('#topContacts').append(myHTMLlocation);
  $('#footerContacts').append(myHTMLmobile);
  $('#footerContacts').append(myHTMLemail);
  $('#footerContacts').append(myHTMLtwitter);
  $('#footerContacts').append(myHTMLgithub);
  $('#footerContacts').append(myHTMLlocation);
  $('#header').append(myHTMLWelcomeMsg);


  if (bio.skills.length>0) {
    var myHTMLskills="";
    $('#header').append(HTMLskillsStart); 
    for (var i=0;i<bio.skills.length;i++) {
      myHTMLskills+=HTMLskills.replace('%data%',bio.skills[i]);
    }
    $('#skills').append(myHTMLskills);
  }
}

// Build Education object
var ed2={
  'name': 'Purdue University',
  'degree': 'MSEE', 
  'location': 'West Lafayette, IN', 
  'dates': '1994',
  'majors': 'Electrical Engineering',
  'url': 'http://www.purdue.edu'
};

var ed1={
  'name': 'Purdue University',
  'degree': 'MS', 
  'location': 'West Lafayette, IN', 
  'dates': '1992',
  'majors': 'Mathematics',
  'url': 'http://www.purdue.edu'
};

var schools=[ed1,ed2];

var onlineCourses=[
  {
    'school': 'udacity',
    'title': 'Web Development',
    'date': '10/2014',
    'URL': 'https://www.udacity.com/course/cs253'
  },
  {
    'school': 'Coursera',
    'title': 'Android Apps',
    'date': '7/2013',
    'URL': 'https://www.coursera.org/course/androidapps101'
  }
];

var education={'schools': schools, 'onlineCourses': onlineCourses};


//Iterate through schools and onlineCourses in education object to display education history
education.display=function() {
  var num_ed=schools.length;
  if (num_ed>0) {
    for (var i=0;i<num_ed;i++) {
      $('#education').append(HTMLschoolStart);
      var myHTMLschoolName=HTMLschoolName.replace('%data%', schools[i]['name']);
      myHTMLschoolName=myHTMLschoolName.replace('"#"', schools[i]['url']? schools[i]['url']+' target="_blank"':'"#"');
      var myHTMLschoolDegree=HTMLschoolDegree.replace('%data%', schools[i]['degree']);
      var myHTMLschoolLocation=HTMLschoolLocation.replace('%data%', schools[i]['location']);
      var myHTMLschoolDates=HTMLschoolDates.replace('%data%', schools[i]['dates']);
      var myHTMLschoolMajor=HTMLschoolMajor.replace('%data%', schools[i]['majors']);
      $('.education-entry:last').append(myHTMLschoolName+myHTMLschoolDegree);
      //$('.education-entry:last').append(myHTMLschoolDegree);
      $('.education-entry:last').append(myHTMLschoolDates);
      $('.education-entry:last').append(myHTMLschoolMajor);
      $('.education-entry:last').append(myHTMLschoolLocation);
    }
  }

  var num_onlineCourses=onlineCourses.length;
  if (num_onlineCourses>0) {

    $('#education').append(HTMLonlineClasses);
    $('#education').append(HTMLschoolStart);
  }

  for  (i=0; i<num_onlineCourses; i++) {
    var myHTMLonlineTitle=HTMLonlineTitle.replace('%data%', onlineCourses[i].title);
    var myHTMLonlineSchool=HTMLonlineSchool.replace('%data%', onlineCourses[i].school);
    var myHTMLonlineDates=HTMLonlineDates.replace('%data%', onlineCourses[i].date);
    var myHTMLonlineURL=HTMLonlineURL.replace('%data%', onlineCourses[i].URL);
    $('.education-entry:last').append(myHTMLonlineTitle+myHTMLonlineSchool);
    $('.education-entry:last').append(myHTMLonlineDates);
    $('.education-entry:last').append(myHTMLonlineURL);
  }
}

//Build work object
var job1={
  'employer': 'JPMorganChase',
  'url': 'http://www.jpmorgan.com',
  'title': 'Trader', 
  'dates': '1998-2007',
  'location': 'NY, NY', 
  'description': 'Trading sophisticated financial derivative products. ' + 
    'In charge of several large interest rate swap books handling customer deal flows ' +
    'as well as market making.'
};

var job2={
  'employer': 'JWZ Inc',
  'title': 'Consultant', 
  'dates': '2007-Present',
  'location': 'Bergen County, NJ', 
  'description': 'Providing crucial analytical solutions to the developement, ' +
    'implementation and enhancement of complex fixed income derivative trading systems.'
};

var jobs=[job1,job2];

var work={'jobs': jobs};

//Display method of work object: iterate through jobs to display employment history
work.display=function() {
  var num_jobs=jobs.length;
  if (num_jobs>0) {
    for (var i=0;i<num_jobs;i++) {
    $('#workExperience').append(HTMLworkStart);
    var myHTMLworkEmployer=HTMLworkEmployer.replace('%data%', jobs[i].employer);
    myHTMLworkEmployer=myHTMLworkEmployer.replace('"#"', jobs[i].url? jobs[i].url+' target="_blank"':'"#"');
    var myHTMLworkTitle=HTMLworkTitle.replace('%data%', jobs[i].title);
    var myHTMLworkDates=HTMLworkDates.replace('%data%', jobs[i].dates);
    var myHTMLworkLocation=HTMLworkLocation.replace('%data%', jobs[i].location);
    var myHTMLworkDescription=HTMLworkDescription.replace('%data%', jobs[i].description);
  //append to the last element of class work-entry, '.' means class
    $('.work-entry:last').append(myHTMLworkEmployer+" "+myHTMLworkTitle);

    $('.work-entry:last').append(myHTMLworkDates);
    $('.work-entry:last').append(myHTMLworkLocation);
    $('.work-entry:last').append(myHTMLworkDescription);
    }
  }
}

//Build projects object
var projects=[
  {
    'dates': '9/2014',
    'title': 'Travel Blog', 
    'description': 'Private blog for traveling experience and nature exploration',
    'images': './images/alps2.jpg'
  }, 
  {
    'dates': '4/2014',
    'title': 'Android App', 
    'description': 'Basic music player',
    'image': './images/app.png'
  }
];

//Display method of projects object: iterate through projects to display history of projects built
projects.display=function () {
  var num_projects=projects.length;
  for (var i=0; i<num_projects; i++) {
    $('#projects').append(HTMLprojectStart);
    var myHTMLprojectTitle=HTMLprojectTitle.replace('%data%',projects[i].title);
    var myHTMLprojectDates=HTMLprojectDates.replace('%data%',projects[i].dates);
    var myHTMLprojectDescription=HTMLprojectDescription.replace('%data%',projects[i].description);
    var myHTMLprojectImage=HTMLprojectImage.replace('%data%',projects[i].image);
    $('.project-entry:last').append(myHTMLprojectTitle);
    $('.project-entry:last').append(myHTMLprojectDates);
    $('.project-entry:last').append(myHTMLprojectDescription);
    $('.project-entry:last').append(myHTMLprojectImage);
  }
}

//Change last name to uppercase. Used by "Internationalize" button
function inName() {
  var first_last=bio.name.split(' ');
  return first_last[0]+' '+first_last[1].toUpperCase();
}
  
//Change back to normal display of last name when "US mode" button is clicked
function restoreName() {
  return bio.name;
}
  
//Display resume information
bio.display();
education.display();
work.display();
projects.display();

//Add google maps for places worked and lived
$('#mapDiv').append(googleMap);
//Interative button to change display of last name
$('#main').append(internationalizeButton);

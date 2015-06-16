var bio = {
	"name": "Gustavo Magalhães",
	"role": "Web Developer",
	"contacts": { 
		"mobile": "(81) 99158-7267",
		"email": "itsgustavopereira@gmail.com",
		"github": "gustavomagalhaes",
		"location": "Recife, PE" 
	},	
	"welcomeMessage" : "Hi, welcome to my page!",
	"skils": ["awesomeness", "programming", "HTML5", "CSS5", "Javascript"],
	"bioPic" : "images/fry"
};

var education = {
	"schools": [
		{
			"name": "UFRPE",
			"major": "BSI"
		},
		{
			"name": "UF",
			"major": "CS"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "UFPE NTI",
			"title": "Intern",
			"dates": "February 2015 - Future",
			"description": "Developed Matlab codes"
		},
		{
			"employer": "UCI iGraviLab",
			"title": "Intern",
			"dates": "June 2014 - September 2014",
			"description": "Developed Matlab codes" 
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Intern",
			"dates": "February 2015 - Future",
			"description": "Developed Matlab codes",
			"images": [
				"link1",
				"link2"
			]
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(formattedRole);
$("#header").prepend(formattedName);
displayWork();

if (bio.skils.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	for (var skill in bio.skils) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skils[skill]);
		$("#skills").append(formattedSkill);		
	};
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		
		$(".work-entry:last").append(formattedEmployerTitle);
	}
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  
  logClicks(x,y);
});

$("#mapDiv").append(googleMap);
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

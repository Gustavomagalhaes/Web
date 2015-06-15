//$("#main").append("Gustavo");

var gustavo = "gustavito";

//console.log(gustavo);

var awesomeThoughts = "I am Gustavo and I am awesome!";

//console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("awesome", "fun");

//$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%","Gustavo");

var formattedRole = HTMLheaderRole.replace("%data%","Coxinha Specialist");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
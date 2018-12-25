// JavaScript Document

 var ourRequest = new XMLHttpRequest();
		  ourRequest.open("GET","https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=80dde2e1bdfc7b2034e93a79eede50aa");
		  ourRequest.onload = function(){
			console.log(ourRequest.responseText);
		  };
		  ourRequest.send();

//JSON doc 
/*var ourRequest = new XMLHttpRequest();
ourRequest.open("GET","employees.json");
ourRequest.onload = function (){
	var ourData = JSON.parse(ourRequest.responseText);
//console.log(ourRequest.responseText);
	$("#click").click(function(){
		print(ourData);
	//document.getElementById("display").innerHTML = ourData[0].name;
});
	
};
ourRequest.send();

function print(data){
	var htmlString ="";
	for(var i = 0;i<data.length;i++){
		 htmlString += "<p>" + data[i] + "</p>";
	}
}
*/

/*var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
xmlhttp.open("GET", "employees.json", true);
xmlhttp.send();*/

/*$.ajax("info.txt").done(function(data){
	$("#display").text(data);
}).fail(function(){
	alert("Could not get data from file");
});*/

//Tegular Expressions
/*var regex = /is/;
var string = "Regex is great!";
var result = string.match(regex);
alert(result);*/

//Email validation function 
/*function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};

$("#submit").click( function(){
	alert(isEmail($("userEmail").val()));
});*/
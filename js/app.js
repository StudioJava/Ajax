// JavaScript Document

//JSON doc 
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
xmlhttp.open("GET", "employees.json", true);
xmlhttp.send();

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
// JavaScript Document
$.ajax("info.txt").done(function(data){
	$("#display").text(data);
}).fail(function(){
	alert("Could not get data from file");
});
// JavaScript Document
$.ajax("info.txt").done(function(data){
	alert(data);
}).fail(function(){
	alert("Could not get data from file");
});
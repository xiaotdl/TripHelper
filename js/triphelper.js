/* API Keys */
var pearsonApiKey = "?apiKey=AM3Uez7G9OyJrQZY1bCxXE28lhRHfW8Y";
var pearsonBaseUrl = "http://api.pearson.com/v2/travel/";

var locationString = "";

function showMore(){
	$('#moreOptions').show("blind");
}

function CitySearch(cityName) {

}

function getTravelCategories() {
	$.getJSON(pearsonBaseUrl+"categories"+pearsonApiKey,
		function(data){
			$.each( data.results, function( key, val ) {
				if(val.name!="Attractions") //this is a bad category
			    $('#categories').append("<label class=\"btn btn-primary\"><input type=\"checkbox\">"+val.name+"</label>");
			  });
		});
}


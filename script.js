$(document).ready(function(){

//array of movies
var movies = ["Up", "Avatar", "Jurassic Park"];

var movieInfo = [];



function loadMovieData(){

	//set userMovie to the value of the add-movie-input 
	var userMovie = $("#add-movie-input").val();


//if user does enter a movie, add the movie to the array
//if user does not enter a movie dont try to add or find it

if (userMovie != 0){
	console.log(userMovie);
	movies.push(userMovie);
}

for(i=0; i<movies.length; i++){

	//get movie name from array
	var movieName = movies[i];
	//create omdb api url using movieName
	var movieSource = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";
	
	//use ajax to get JSON data using movieSource as url
	$.getJSON(movieSource, function(data){

		//log all data
		console.log(data);

		//set var to stringified title returned from json data
		var movieTitle = JSON.stringify((data["Title"]));

		//add movieTitle to html
		$(".movie-title-p").append(movieTitle);

		 
		var director = JSON.stringify((data["Director"]));
		$(".movie-director-p").append(director);

		var imdbRating = JSON.stringify((data["imdbRating"]));
		$(".movie-imdb-rating-p").append(imdbRating);

		var metascoreRating = JSON.stringify((data["Metascore"]));
		$(".metascore-rating-p").append(metascoreRating);

		var yearOfRelease = JSON.stringify((data["Year"]));
		$(".year-of-release-p").append(yearOfRelease);

		var plot = JSON.stringify((data["Plot"]));
		$(".plot-p").append(plot);



		//create push relevant info to movieInfo array
		//TODO use this array instead of the returned json data so that you can use handlebars to iterate/template over this array 
		//Then on Newflix you can use this kind of array instead of data.movies so that you dont have to store the data / can use handlebars over it
		movieInfo.push({
			title: movieTitle, director: director, yearOfRelease: yearOfRelease, imdbRating: imdbRating, metascoreRating: metascoreRating, Plot: plot
		});

		console.log(movieInfo);
	});
}
}


loadMovieData();

$("#submit-button").on("click", loadMovieData);

});
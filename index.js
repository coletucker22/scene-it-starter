$(document).ready(function renderMovies () {
    //console.log(movieData)
    // $.getJSON('data.js').done(function(movieArray){
    //     $('#card').html(
            
            
           
            
    //     )
    //     return finalHTML.join('')
        
    // })
    const moviesHTML = movieData.map(buildMovieHTML).join('')
    // console.log('myResult', moviesHTML)

    document.getElementById('moviesContainer').innerHTML = moviesHTML


})

const movieHTML = $('#card').val()

function buildMovieHTML (currentMovie) {
    return `
       <div class='card'>
         <img src='${currentMovie.Poster}' class='card-img-top' alt='...'>
         <div class='card-body'>
         <h1 class='movie-title'>${currentMovie.Title}</h5>
         <span class="badge badge-pill badge-dark">${currentMovie.Year}</span>
         <button type="button" class="btn btn-info">Add</button>
         </div>
        </div>

    `
    
}


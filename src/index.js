// import './styles/main.css';
require('./styles/main.css')
const axios = require('axios')

let action = function(){
    alert(action)
} 
let action2 = function(){
    alert(action2)
}

function getMovie(search_value){
      axios.get('https://www.omdbapi.com/?s='+search_value+'&apikey=a5063d4f')
      .then((response)=>{
        console.log(response)
        let movies = response.data.Search        
        
        movies.map((movie, index) => {      
          document.getElementById('movies').innerHTML +=`
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}"/>
              <h5>${movie.Title} (${movie.Type})</h5>
            </div>
          </div>            
          `          
        });
      })
      .catch((err)=>{
        console.log(err);
      })
    }

//so its a scoping issue caused by babel wrapping the whole thing as a function
module.exports = {
    searchMovie: function () {      
      let search_value = document.getElementById("searchText").value
      getMovie(search_value)
      console.log(search_value);
    },
     
    action,
    action2,
//we'll have to define each function here and export it

  };





const API_KEY="804aa1781acab394d667d99070ae4b0f"
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>

const trendingMoviesPreview = document.querySelector("#trendingPreview > article") 
const categoriesPreview = document.querySelector("#categoriesPreview > article") 

async function getTrendingMovies() {
    const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    try {
        let data = await res.json()
        data = data.results
        // console.log(data);
        data.forEach((element,index) => {
            const altName = element.title ?? element.name
            trendingMoviesPreview.innerHTML+=`
            <div class="movie-container">
                <img src="https://image.tmdb.org/t/p/w300/${element.poster_path} "class="movie-img"alt="${altName}"/>
            </div>
            `
        });
    } catch (error) {
        throw new Error(error)
    }
}

getTrendingMovies() 

async function getCategoriesMovies() {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    try {
        let data = await res.json()
        data = data.genres
        // console.log(data);
        data.forEach((element,index) => {
            categoriesPreview.innerHTML+=`
            <div class="category-container">
                <h3 id="id${element.id}" class="category-title">${element.name}</h3>
            </div>
            `
        });
    } catch (error) {
        throw new Error(error)
    }
}

getCategoriesMovies() 


/*

 */

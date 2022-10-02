const API_KEY="804aa1781acab394d667d99070ae4b0f"
const API = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers:{
        "Content-Type":"application/json;charset=utf8",
    },
    params:{
        "api_key":API_KEY
    }
})

const trendingMoviesPreview = document.querySelector("#trendingPreview > article") 
const categoriesPreview = document.querySelector("#categoriesPreview > article") 

async function getTrendingMovies() {
    try {
        const { data } = await API("trending/all/day");
        const movies = data.results
        movies.forEach((element) => {
            const altName = element.title ?? element.name
            trendingMoviesPreview.innerHTML+=`
            <div class="movie-container">
                <img src="https://image.tmdb.org/t/p/w300/${element.poster_path} "class="movie-img"alt="${altName}"/>
            </div>
            `
        });
    } catch (error) {
        throw new Error(`Sorry
        ${error}`)
    }
}

getTrendingMovies() 

async function getCategoriesMovies() {
    try {
        const {data} = await API(`genre/movie/list`)
        const categories = data.genres
        categories.forEach((element) => {
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

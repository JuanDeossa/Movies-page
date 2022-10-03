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

async function getTrendingMovies() {
    if (trendingMoviesPreviewList.childElementCount===0) {        
        try {
            const { data } = await API("trending/all/day");
            const movies = data.results
            movies.forEach((element) => {
                const altName = element.title ?? element.name
                trendingMoviesPreviewList.innerHTML+=`
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
}

async function getMoviesByTrendList() {
    if (true) {        
        try {
            const  {data}  = await API("trending/all/day")
            headerCategoryTitle.innerHTML="Trends"
            const movies = data.results
            movies.forEach((element) => {
                const altName = element.title ?? element.name
                genericSection.innerHTML+=`
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
}
async function getMoviesByCategory(id,name) {
    if (true) {        
        try {
            const  {data}  = await API("discover/movie",{
                params:{
                    with_genres:id
                }
            });
            headerCategoryTitle.innerHTML=name
            const movies = data.results
            movies.forEach((element) => {
                const altName = element.title ?? element.name
                genericSection.innerHTML+=`
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
}

async function getMoviesBySearch(query) {
    if (true) {        
        try {
            genericSection.innerHTML=``
            const  {data}  = await API("search/movie",{
                params:{
                    query:query
                }
            });
            const movies = data.results
            movies.forEach((element) => {
                if (element.poster_path) {
                    const altName = element.title ?? element.name
                    genericSection.innerHTML+=`
                    <div class="movie-container">
                        <img src="https://image.tmdb.org/t/p/w300/${element.poster_path} "class="movie-img"alt="${altName}"/>
                    </div>
                    `
                }
            });
        } catch (error) {
            throw new Error(`Sorry
            ${error}`)
        }
    }
}

async function getCategoriesMovies() {
    if (categoriesPreviewList.childElementCount===0) {
        try {
            const {data} = await API(`genre/movie/list`)
            const categories = data.genres
            categories.forEach((element,index) => {
                categoriesPreviewList.innerHTML+=`
                <div class="category-container_" data-id="${element.id}" data-name="${element.name}">
                    <h3 id="id${element.id}" class="category-title">${element.name}</h3>
                </div>
                `
            })
            document.querySelectorAll(".category-container_").forEach(element=>{
                element.addEventListener("click",()=>location.hash=`category=${element.dataset.id}-${element.dataset.name}`)
            })  
        } catch (error) {
            throw new Error(error)
        }
    }
}


 

/*

 */

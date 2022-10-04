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

const loadingTemplates={
    related:`
    <div class="movie-container related-movie-container--loading"></div>
    <div class="movie-container related-movie-container--loading"></div>
    <div class="movie-container related-movie-container--loading"></div>
    `,
    trendingPreview:`
    <div class="movie-container movie-preview-container--loading"></div>
    <div class="movie-container movie-preview-container--loading"></div>
    `,
    movie:`
    <div class="movie-container movie-container--loading"></div>
    <div class="movie-container movie-container--loading"></div>
    <div class="movie-container movie-container--loading"></div>
    <div class="movie-container movie-container--loading"></div>
    `
}
async function getCategoriesMovies() {
    try {
        const {data} = await API(`genre/movie/list`)
        const categories = data.genres
        categoriesPreviewList.innerHTML=``
        categories.forEach((element,index) => {
            categoriesPreviewList.innerHTML+=`
            <div class="category-container" data-id="${element.id}" data-name="${element.name}">
            <h3 id="id${element.id}" class="category-title">${element.name}</h3>
            </div>
            `
        })
        document.querySelectorAll(".category-container").forEach(element=>{
            element.addEventListener("click",()=>location.hash=`category=${element.dataset.id}-${element.dataset.name}`)
        })  
    } catch (error) {
        throw new Error(error)
    }
}
async function renderMoviesGrid(container,movies) {
    movies.forEach((movie) => {
        const altName = movie.title ?? movie.name
        if (movie.poster_path){
            container.innerHTML+=`
            <div class="movie-container">
                <img 
                data-img="https://image.tmdb.org/t/p/w300/${movie.poster_path}"
                class="movie-img"
                alt="${altName}"
                data-id="${movie.id}"
                data-name="${altName}"
                />
            </div>
            `
        }
    })
    document.querySelectorAll(".movie-container > img").forEach(movie=>{
        movie.addEventListener("click",()=>location.hash=`movie=${movie.dataset.id}-${movie.dataset.name}`)
        lazyLoader.observe(movie);
    }) 
}
async function renderRelatedMovies(urlMod){
    relatedMoviesContainer.innerHTML=loadingTemplates.movie
    try {
        const { data } = await API(urlMod);
        const movies = await data.results
        relatedMoviesContainer.innerHTML=``
        renderMoviesGrid(relatedMoviesContainer,movies)
    } catch (error) {
        throw new Error(`Sorry
        ${error}`)
    }
}
async function renderMoviesBySearch(query) {       
    genericSection.innerHTML=loadingTemplates.movie
    try {
        const  {data}  = await API("search/movie",{
            params:{
                query:query
            }
        });
        const movies = data.results
        genericSection.innerHTML=``
        renderMoviesGrid(genericSection,movies) 
    } catch (error) {
        throw new Error(`Sorry
        ${error}`)
    }
}
async function renderPreviewTrends(urlMod) {      
    trendingMoviesPreviewList.innerHTML=loadingTemplates.trendingPreview
    try {
        const { data } = await API(urlMod);
        const movies = await data.results
        trendingMoviesPreviewList.innerHTML=``
        renderMoviesGrid(trendingMoviesPreviewList,movies)
    } catch (error) {
        throw new Error(`Sorry
        ${error}`)
    }
}
async function renderTrends(urlMod) {      
    genericSection.innerHTML=loadingTemplates.movie
    try {
        const { data } = await API(urlMod);
        const movies = await data.results
        genericSection.innerHTML=``
        renderMoviesGrid(genericSection,movies)
    } catch (error) {
        throw new Error(`Sorry
        ${error}`)
    }
}
async function renderMoviesByCategory(id,name) {      
    headerCategoryTitle.innerHTML=name
    genericSection.innerHTML=loadingTemplates.movie
    try {
        const  {data}  = await API("discover/movie",{
            params:{
                with_genres:id
            }
        });
        const movies = data.results
        genericSection.innerHTML=``
        renderMoviesGrid(genericSection,movies)
    } catch (error) {
        throw new Error(`Sorry
        ${error}`)
    }
}
async function getMovieByID(id){
    try {
        const {data} = await API(`movie/${id}`)
        const URL = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        headerSection.style.background = `
            linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.35) 19.27%,
                rgba(0, 0, 0, 0) 29.17%
            ),
            url(${URL})
        `;
        headerSection.style.backgroundPosition = 'center';
        headerSection.style.backgroundRepeat = 'no-repeat';
        headerSection.style.backgroundSize = 'cover';
        movieDetailTitle.innerHTML=data.title
        movieDetailDescription.innerHTML=data.overview
        movieDetailScore.innerHTML=data.vote_average.toFixed(1)
        getRelatedCategories(data.genres)
        renderRelatedMovies(`/movie/${id}/recommendations`)

    } catch (error) {
        throw new Error(error)
    }
}
async function getRelatedCategories(categories) {
    categoryList.innerHTML=``
    categories.forEach((element,index) => {
        categoryList.innerHTML+=`
        <div class="category-container" data-id="${element.id}" data-name="${element.name}">
            <h3 id="id${element.id}" class="category-title">${element.name}</h3>
        </div>
        `
    })
    document.querySelectorAll(".category-container").forEach(element=>{
        element.addEventListener("click",()=>location.hash=`category=${element.dataset.id}-${element.dataset.name}`)
    })  
}


const lazyLoader = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const url = entry.target.getAttribute("data-img")
            entry.target.setAttribute("src",url)
        }
    })
})




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

async function renderMovieList(container,urlMod) {      
    try {
        const { data } = await API(urlMod);
        const movies = data.results
        container.innerHTML=``
        movies.forEach((element) => {
            const altName = element.title ?? element.name
            container.innerHTML+=`
            <div class="movie-container" data-id="${element.id}" data-name="${altName}">
                <img src="https://image.tmdb.org/t/p/w300/${element.poster_path} "class="movie-img"alt="${altName}"/>
            </div>
            `
        });

    } catch (error) {
        throw new Error(`Sorry
        ${error}`)
    }
    document.querySelectorAll(".movie-container").forEach(element=>{
        element.addEventListener("click",()=>location.hash=`movie=${element.dataset.id}-${element.dataset.name}`)
    }) 
}

async function getMoviesByCategory(id,name) {      
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
            <div class="movie-container" data-id="${element.id}" data-name="${altName}">
                <img src="https://image.tmdb.org/t/p/w300/${element.poster_path} "class="movie-img"alt="${altName}"/>
            </div>
            `
        });
        document.querySelectorAll(".movie-container").forEach(element=>{
            element.addEventListener("click",()=>location.hash=`movie=${element.dataset.id}-${element.dataset.name}`)
        }) 
    } catch (error) {
        throw new Error(`Sorry
        ${error}`)
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
                    <div class="movie-container" data-id="${element.id}" data-name="${altName}">
                        <img src="https://image.tmdb.org/t/p/w300/${element.poster_path} "class="movie-img"alt="${altName}"/>
                    </div>
                    `
                }
            });
            document.querySelectorAll(".movie-container").forEach(element=>{
                element.addEventListener("click",()=>location.hash=`movie=${element.dataset.id}-${element.dataset.name}`)
            }) 
        } catch (error) {
            throw new Error(`Sorry
            ${error}`)
        }
    }
}

async function getCategoriesMovies() {
    try {
        const {data} = await API(`genre/movie/list`)
        const categories = data.genres
        categoriesPreviewList.innerHTML=``
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
async function getRelatedCategories(categories) {
    categoryList.innerHTML=``
    categories.forEach((element,index) => {
        categoryList.innerHTML+=`
        <div class="category-container_" data-id="${element.id}" data-name="${element.name}">
            <h3 id="id${element.id}" class="category-title">${element.name}</h3>
        </div>
        `
    })
    document.querySelectorAll(".category-container_").forEach(element=>{
        element.addEventListener("click",()=>location.hash=`category=${element.dataset.id}-${element.dataset.name}`)
    })  
}

async function getMovieByID(id){
    try {
        const {data} = await API(`movie/${id}`)
        const URL = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        headerSection.style.background=`url(${URL})`
        movieDetailTitle.innerHTML=data.title
        movieDetailDescription.innerHTML=data.overview
        movieDetailScore.innerHTML=data.vote_average.toFixed(1)
        console.log(data.genres);
        getRelatedCategories(data.genres)

    } catch (error) {
        throw new Error(error)
    }
}
 

/*

 */

searchFormBtn.addEventListener("click",()=>{
    location.hash=`search=${searchFormInput.value.trim()}`
})
trendingBtn.addEventListener("click",()=>{
    location.hash="trends"
})
arrowBtn.addEventListener("click",()=>{
    location.hash=window.history.back()
})
headerTitle.addEventListener("click",()=>{
    location.hash="home"
})

window.addEventListener("hashchange",navigator,false)
window.addEventListener("DOMContentLoaded",navigator,false)

function home() {
    // console.log("home");

    headerSection.classList.remove("header-container--long")
    headerSection.style.background=""
    arrowBtn.classList.add("inactive")
    arrowBtn.classList.remove("header-arrow--white")
    headerTitle.classList.remove("inactive")
    headerCategoryTitle.classList.add("inactive")
    searchForm.classList.remove("inactive")
    
    trendingPreviewSection.classList.remove("inactive")
    categoriesPreviewSection.classList.remove("inactive")
    genericSection.classList.add("inactive")
    movieDetailSection.classList.add("inactive")
    
    getTrendingMovies() 
    getCategoriesMovies() 
}
function category() {
    // console.log("category");
    headerSection.classList.remove("header-container--long")
    headerSection.style.background=""
    arrowBtn.classList.remove("inactive")
    arrowBtn.classList.remove("header-arrow--white")
    headerTitle.classList.add("inactive")
    headerCategoryTitle.classList.remove("inactive")
    searchForm.classList.add("inactive")
    
    trendingPreviewSection.classList.add("inactive")
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.remove("inactive")
    movieDetailSection.classList.add("inactive")
    const id = location.hash.split("=")[1].split("-")[0]
    const name = location.hash.split("=")[1].split("-")[1].replace("%20"," ")

    getMoviesByCategory(id,name)
}
function movie() {
    // console.log("movie");
    headerSection.classList.add("header-container--long")
    // headerSection.style.background=""
    arrowBtn.classList.remove("inactive")
    arrowBtn.classList.add("header-arrow--white")
    headerTitle.classList.add("inactive")
    headerCategoryTitle.classList.add("inactive")
    searchForm.classList.add("inactive")

    trendingPreviewSection.classList.add("inactive")
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.add("inactive")
    movieDetailSection.classList.remove("inactive")
}
function search() {
    // console.log("search");
    headerSection.classList.remove("header-container--long")
    headerSection.style.background=""
    arrowBtn.classList.remove("inactive")
    arrowBtn.classList.remove("header-arrow--white")
    headerTitle.classList.remove("inactive")
    headerCategoryTitle.classList.add("inactive")
    searchForm.classList.remove("inactive")
    
    trendingPreviewSection.classList.add("inactive")
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.remove("inactive")
    movieDetailSection.classList.add("inactive")

    const query = location.hash.split("=")[1]

    getMoviesBySearch(query)
}
function trends() {
    // console.log("trends");
    headerSection.classList.remove("header-container--long")
    headerSection.style.background=""
    arrowBtn.classList.remove("inactive")
    arrowBtn.classList.remove("header-arrow--white")
    headerTitle.classList.add("inactive")
    headerCategoryTitle.classList.remove("inactive")
    searchForm.classList.add("inactive")
    
    trendingPreviewSection.classList.add("inactive")
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.remove("inactive")
    movieDetailSection.classList.add("inactive")
}
function navigator() {
    if (location.hash.startsWith("#trends")) {
        trends()
    }else if (location.hash.startsWith("#search=")) {
        search()
    }else if (location.hash.startsWith("#movie=")) {
        movie()
    }else if (location.hash.startsWith("#category=")) {
        category()
    }else{
        home()
    }
    window.scrollTo(0,0)
}


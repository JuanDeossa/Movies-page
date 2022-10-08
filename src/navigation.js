let page = 1
let maxPages
let infiniteScroll
searchFormBtn.addEventListener("click",()=>{
    location.hash=`search=${searchFormInput.value.trim()}`
})
trendingBtn.addEventListener("click",()=>{
    location.hash="trends"
})
arrowBtn.addEventListener("click",()=>{
    history.back()
})
headerTitle.addEventListener("click",()=>{
    location.hash="home"
})

window.addEventListener("hashchange",navigator,false)
window.addEventListener("DOMContentLoaded",navigator,false)
window.addEventListener("scroll",infiniteScroll,{passive:false,})
window.addEventListener('storage', () => {
    console.log("d");
    console.log(JSON.parse(window.localStorage.getItem("likedMovies")));
});
window.onstorage = () => {
    console.log("d");
    console.log(JSON.parse(window.localStorage.getItem("likedMovies")));
};

function home() {
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
    
    renderPreviewTrends("trending/all/day") 
    getCategoriesMovies() 
    renderFavs()
}
function category() {
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
    favouriteSection.classList.add("inactive")

    renderMoviesByCategory(id,name)
    infiniteScroll = renderCategoryzedMovies(id)
}
function movie() {
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
    favouriteSection.classList.add("inactive")

    const id = location.hash.split("=")[1].split("-")[0]
    getMovieByID(id)
}
function search() {
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
    favouriteSection.classList.add("inactive")

    const query = location.hash.split("=")[1]

    renderMoviesBySearch(query)
    infiniteScroll = renderSearchedMovies(query)
}
function trends() {
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
    favouriteSection.classList.add("inactive")
    headerCategoryTitle.innerHTML="Trends"

    renderTrends("trending/all/day")
    infiniteScroll = renderScrolledTrendingMovies
}
function navigator() {

    if (infiniteScroll) {
        window.removeEventListener("scroll",infiniteScroll,{passive:false,})
        infiniteScroll = undefined
    }
    
    if (location.hash.startsWith("#trends")) {
        // page = 1
        trends()
    }else if (location.hash.startsWith("#search=")) {
        // page = 1
        search()
    }else if (location.hash.startsWith("#movie=")) {
        // page = 1
        movie()
    }else if (location.hash.startsWith("#category=")) {
        // page = 1
        category()
    }else{
        // page = 1
        home()
    }
    window.scrollTo(0,0)
    
    if (infiniteScroll) {
        window.addEventListener("scroll",infiniteScroll,{passive:false,})
    }
}


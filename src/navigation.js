searchFormBtn.addEventListener("click",()=>{
    location.hash="search="
})
trendingBtn.addEventListener("click",()=>{
    location.hash="trends"
})
arrowBtn.addEventListener("click",()=>{
    location.hash="home"
})

window.addEventListener("hashchange",navigator,false)
window.addEventListener("DOMContentLoaded",navigator,false)

function home() {
    console.log("home");

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
    console.log("category");
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
function movie() {
    console.log("movie");
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
    console.log("search");
    headerSection.classList.remove("header-container--long")
    headerSection.style.background=""
    arrowBtn.classList.remove("inactive")
    arrowBtn.classList.remove("header-arrow--white")
    headerTitle.classList.add("inactive")
    headerCategoryTitle.classList.remove("inactive")
    searchForm.classList.remove("inactive")
    
    trendingPreviewSection.classList.add("inactive")
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.remove("inactive")
    movieDetailSection.classList.add("inactive")
}
function trends() {
    console.log("trends");
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
}


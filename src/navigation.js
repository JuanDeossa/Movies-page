window.addEventListener("hashchange",navigator,false)
window.addEventListener("DOMContentLoaded",navigator,false)

function trends() {
    console.log("trends");
}
function search() {
    console.log("search");
}
function movie() {
    console.log("movie");
}
function category() {
    console.log("category");
}
function home() {
    console.log("home");
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

navigator()

const API_KEY="804aa1781acab394d667d99070ae4b0f"
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

async function getTrendingMovies() {
    const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    try {
        let data = await res.json()
        data = data.results
        console.log(data);
        data.forEach((element,index) => {
            if (element.hasOwnProperty("title")) {
                console.log(`${index+1} ${element.title}`);
            }else if (element.hasOwnProperty("name")) {
                console.log(`${index+1} ${element.name}`);
            }else{
                console.log("No name and no title");
            }
        });
    } catch (error) {
        throw new Error(error)
    }
}

getTrendingMovies() 
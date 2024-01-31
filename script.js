const apiKey = "mUmqdvN7IMomdnQlhBi4UrbDDCN7AgeKVqfy2YjEkCo";

const searchForm = document.querySelector("form");
const searchInput = document.querySelector(".search-image");
const searchBtn = document.querySelector(".search-btn");
const showMore = document.querySelector(".show-more");
const searchResult = document.querySelector(".search-result")

let input = '';
let page = 1;

async function searchImages(){
    input = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=mUmqdvN7IMomdnQlhBi4UrbDDCN7AgeKVqfy2YjEkCo&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    
    if(page === 1){
        searchResult.innerHTML = '';
        showMore.style.display = "none";
    }

    const results = data.results;
   

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imgLink = document.createElement("a");
        imgLink.href = result.links.html;
        imgLink.target = "-blank";
        imgLink.appendChild(image);
        searchResult.appendChild(imgLink);

    });
    
    if(input == ''){}else{
        showMore.style.display = "block";
    }
    if(results.length == 0){
        showMore.style.display = "none";
    }
}

searchForm.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", ()=>{
    page++;
    searchImages();
});


const temp = document.querySelector("#temp")
const containor = document.getElementById("containor")
let buttons = document.getElementsByClassName("buttons")
let newsType
var faltu ='general'
fetchdata()
// for(let i = 0;i<buttons.length;i++){
//     buttons[i].addEventListener("click",()=>{
//         var faltu = buttons[i].innerHTML
//         fetchdata()
//     })
// }
async function fetchdata(){
    const apiKey = '1f387920e8c04b5898b87d64ce1bfd70'
    const url =`https://newsapi.org/v2/top-headlines?country=in&category=${faltu}&apiKey=${apiKey}`
    const responce = await fetch(url);
    const data = await responce.json();
    let news = data.articles
    clonedata(news)
}

function clonedata(news){
    news.forEach((news)=>{
        const cloneCard = temp.content.cloneNode(true)
        const image = cloneCard.querySelector("#image")
        const nodetitle =cloneCard.querySelector("#title")
        const nodedesc = cloneCard.querySelector("#desc")
        image.src =  news.urlToImage;
        nodetitle.innerHTML = news.title;
        nodedesc.innerHTML = news.description;
        containor.appendChild(cloneCard)
    })
}

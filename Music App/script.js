const card = document.getElementById("temp")
const containor = document.getElementById("bottom-containor")
async function fetchapi(){
    const inputValue= document.getElementById('input').value;
    const URL= `https://itunes.apple.com/search?term=${inputValue}+song&limit=5`;
    const result = await fetch(URL);
    const data = await result.json()
    var output = data.results
    cloneData(output)
}
function cloneData(output){
    output.forEach((output)=>{
        const clone = card.content.cloneNode(true);
        const img= clone.querySelector("#img")
        const title= clone.querySelector("#title")
        const desc= clone.querySelector("#desc")
        const audio = clone.querySelector("#audio")
        img.src = output.artworkUrl100
        title.innerHTML = output.artistName
        desc.innerHTML = output.collectionCensoredName
        audio.src = output.previewUrl
        containor.appendChild(clone)
    });
}




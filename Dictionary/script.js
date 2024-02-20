const bottomContainor = document.getElementById("bottom-containor")
async function fetchapi(){
    const inputValue = document.getElementById("input").value
    const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${inputValue}?key=e376c035-5046-4165-a014-f00abd8ec1b3`
    const data = await fetch(url)
    const json = await data.json();
    const oprData=json[0];
    const{shortdef} = oprData;
    // console.log(shortdef);
    createdata(shortdef)
}
function createdata(shortdef){
    shortdef.forEach((data)=>{
        displaydata(data)
    });
}
function displaydata(data){
    console.log(data);
    const heading = document.createElement("h3")
    heading.innerHTML = `..   ${data}`;
    bottomContainor.appendChild(heading)

}
fetchapi()
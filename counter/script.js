const text = document.getElementById("text")
const poss = document.getElementById("possitive")
const neg = document.getElementById("negative")
let count = 0;
poss.addEventListener("click",()=>{
    count = count+1;
    updateText(count);
})
neg.addEventListener("click",()=>{
    count = count-1;
    if(count<0){
        alert("Not possible")
    }
    else {
        updateText(count)
}})
function updateText(num){
    text.innerHTML = num;
}
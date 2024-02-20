let buttons = document.getElementsByClassName("button")
const input = document.getElementById("text")
console.log(buttons.length)
for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener("click",()=>{
        if(buttons[i].innerHTML==document.getElementById("clear").innerHTML){
            reset();
        }
        else if(buttons[i].innerHTML==document.getElementById("cut").innerHTML){
         hello(input.innerHTML)
        }
        else if(buttons[i].innerHTML==document.getElementById("equal").innerHTML){
            answer(input.innerHTML)
        }
        else {
         solve(buttons[i].innerHTML)
        }
    })
}
function reset(){
    input.innerHTML = ""
}
function hello(data){
    input.innerHTML = data.slice(0,-1)
}
function answer(data){
    const result = eval(data)
    input.innerHTML = result
}
function solve(data){
    input.innerHTML+=data

}
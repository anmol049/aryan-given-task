// var score = 10;
window.addEventListener("load",getnumber());
function getnumber(){
    let number = Math.floor(Math.random()*11);
    startgame(number)
}
function startgame(number){
    for(let i =0;i<10;i++){
        let ans = prompt("enter the value between 0 to 10")
        if(ans<number){
            alert("enter a bigger number")
        }
        else if(ans>number){
            alert("enter small number")
        }
        else{
           var score = 10 - i;
             console.log(score)
            break;
        }
        console.log(score);

    }
    document.getElementById("won").innerHTML = "you won"
    console.log(score);
    document.getElementById("score").innerHTML = `your score is: ${score}`
}
// console.log(score);

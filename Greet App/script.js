const firstName = document.getElementById("first-name")
const lasttName = document.getElementById("last-name")
const submitButton = document.getElementById("submit-button")
const resetButton = document.getElementById("reset-button")
const greetData = document.getElementById("greet-data")
function handlesubmit(){
    const name = firstName.value
    const lname = lasttName.value
    display(name,lname)
}
submitButton.addEventListener("click",()=>{
   handlesubmit();
})
function display(name,lname){
    greetData.innerHTML = `Hello ${name} ${lname}`
}
resetButton.addEventListener("click",()=>{
    greetData.innerHTML = ""
    firstName.value = ""
    lasttName.value = ""
})
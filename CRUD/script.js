const text = document.getElementById("output")
let nameIn = document.getElementById("name")
const email = document.getElementById("email")
const phn = document.getElementById("phn")
const addButton = document.getElementById("add-button")
let updateButton = document.getElementById("update-button")
let detailsArr=[];
let detailsObj={};

addButton.addEventListener("click",()=>{
    detailsObj = {"name":nameIn.value,"email":email.value,"phn":phn.value}
    detailsArr.push(detailsObj)
    let n = detailsArr.length-1
    displayData(detailsArr,n)
})
function update(i){
    updateButton.addEventListener("click",()=>{
        updateText(i)
    })
}

function displayData(detailsArr,n){
    console.log(detailsArr.length);
       
    for(let i=n;i<detailsArr.length;i++){
        let data = document.createElement("tr")
        data.id = "test"
        data.style.textAlign = "center"
        let data1 = document.createElement("td")
        let data2 = document.createElement("td")
        let data3 = document.createElement("td")
        let data4 = document.createElement("td")
        let data5 = document.createElement("td")
        data5.style.display ="flex"
        data5.style.justifyContent="center"
        data5.style.gap = "20px"
        let button1 = document.createElement("button")
        button1.id = "delete-button"
        button1.innerHTML = "Delete"
        button1.addEventListener("click",()=>{deletedata(detailsArr,i)})
        let button2 = document.createElement("button")
        button2.addEventListener("click",()=>{
            editData(i)
        })
        button2.id = "edit-button"
        button2.innerHTML ="edit"
        data5.appendChild(button1)
        data5.appendChild(button2)
        data1.innerHTML = i
        data2.innerHTML = detailsArr[i].name;
        data3.innerHTML = detailsArr[i].email
        data4.innerHTML = detailsArr[i].phn
        data.appendChild(data1)
        data.appendChild(data2)
        data.appendChild(data3)
        data.appendChild(data4)
        data.appendChild(data5)
        text.appendChild(data)
    }
}
function deletedata(detailsArr,i){
    nameIn.value = ""
    email.value = ""
    phn.value = ""
    
    detailsArr.forEach((element)=>{
        let exp = document.getElementById("test")
        exp.remove()
    });
    detailsArr.splice(i,1)
    console.log(detailsArr);
    n=0;
    displayData(detailsArr,n)
    
}
function editData(i){
    let obj = detailsArr[i]
    console.log(obj);
    nameIn.value = obj.name;
    email.value = obj.email;
    phn.value = obj.phn
    update(i)
}
function updateText(i){
    console.log("clicked" + i);
    let newObj = {"name":nameIn.value,"email":email.value,"phn":phn.value}
    detailsArr.forEach((element)=>{
        let exp = document.getElementById("test")
        exp.remove()
    });
    detailsArr.splice(i,1,newObj)
    displayData(detailsArr,0)

}



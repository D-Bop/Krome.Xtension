// alert("This page is still being developed")
let myLeads = ["www.cars.com", "www.cats.com", "www.pizza.com"]
const inputEl = document.querySelector("#input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.querySelector("#ul-el")
let listItems = ""
console.log(ulEl)
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
    listItems += "<li>" + myLeads[i] + "</li>"
    
}


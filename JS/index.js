// alert("This page is still being developed")
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.querySelector("#ul-el")

let leadsFromLocalStorage = localStorage.getItem("myLeads")
leadsFromLocalStorage = JSON.parse(leadsFromLocalStorage)
console.log(typeof leadsFromLocalStorage)
 
// let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
// console.log(typeof leadsFromLocalStorage)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
    
})

function renderLeads() {
    let listItems = ""
    for(i = 0; i < myLeads.length; i++) {
        listItems += 
        `<li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>`
        
        console.log(listItems)
    }
    ulEl.innerHTML = listItems
}

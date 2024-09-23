// alert("This page is still being developed")
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
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

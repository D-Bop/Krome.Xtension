// alert("This page is still being developed")
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")

const leadsFromLocalStorage = JSON.parse (localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for(i = 0; i < leads.length; i++) {
        listItems += 
        `<li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`
        
        console.log(listItems)
    }
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("click", e => {
    console.log("doubleclicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", e => {
    
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
    
})


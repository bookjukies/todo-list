const add = document.getElementById(`add`)

add.onclick = ()=>{
    let ul = document.getElementById(`list`)
    let itemText = document.getElementById(`item-add`)
    let li = document.createElement(`li`)
    li.textContent = itemText.value
    ul.appendChild(li)
    
    let check = document.querySelector(".check")
    let checkbox = document.createElement(`input`)
    checkbox.setAttribute(`type`,`checkbox`)
    check.appendChild(checkbox)

    let remove = document.querySelector(`.remove`)
    let removeBtn = document.createElement(`button`)
    removeBtn.innerHTML= `remove`
    remove.appendChild(removeBtn)

    itemText.value = ``
}
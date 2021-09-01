let count = 0
let countEl = document.getElementById("count-el")
let totnum = 0
let numstr = ''

function increment(){
    count+=1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")

function save(){
    numstr = count + " - "
    totnum += count
    saveEl.textContent += numstr
    count = 0
    countEl.textContent = count
}

function del(){
    count = 0
    countEl.textContent = count
    saveEl.textContent = 'Previous entries: ' 
    totnum = 0
    totalEl.textContent = "Total: " + totnum
}
function decrement(){
    count -=1
    countEl.textContent -= 1
    if(count<0){
        count = 0
        countEl.textContent = 0
    }
}

function reset(){
    count = 0
    countEl.textContent = 0
}

let totalEl = document.getElementById("total-el")
function total(){
    totalEl.textContent = "Total: " + totnum
}

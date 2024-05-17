let age = document.querySelector('#age')
let male = document.querySelector('#male')
let female = document.querySelector('#female')
let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let calculateBtn = document.querySelector('#calculateBtn')
let answer = document.querySelector('#answer')

function calculation(){
    if (age < 17 || age > 66){
        answer = weight/ (height*height)
     
    }
}

calculateBtn.addEventListener("click",()=>{
    answer.innerText = calculation()
})

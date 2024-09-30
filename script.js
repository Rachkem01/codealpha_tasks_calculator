
let display = document.getElementById('display');
const equal = document.getElementById('equal')
const dateBox = document.getElementById('date')
const timeBox = document.getElementById('time')
const buttons = document.querySelectorAll('.btn')
const log = document.querySelector('.log')
const sin = document.querySelector('.sin')
const cos = document.querySelector('.cos')
const tan = document.querySelector('.tan')
const pi = document.querySelector('.pi')
const del = document.querySelector('.del')
const sqr = document.querySelector('.sqr')
const sqrt = document.querySelector('.sqrt')
const power = document.querySelector('.power')

const clear = document.querySelector('.clear')
const mean = document.querySelector('.mean')
const median = document.querySelector('.median')
const std = document.querySelector('.std')
const variance = document.querySelector('.var')


function displayDate () {
const dates = new Date()
let date = dates.getDate()
let month = dates.getMonth() +1
let year = dates.getFullYear()
return `${date}/${month}/${year}`

}
dateBox.textContent= displayDate()


function displayTime (){
const time = new Date()
let hour = time.getHours()
let min = time.getMinutes()
let sec = time.getSeconds()
return `${hour}:${min}:${sec}`
}

timeBox.textContent = displayTime()

for (item of buttons){
    item.addEventListener('click',(e)=>{
        btnText = e.target.innerText
        if (btnText =='x'){
            btnText ='*'
        }
        
        display.value += btnText
        equal.addEventListener('click', ()=>{
            display.value = eval(display.value)
        })
    })
}


sin.addEventListener('click',()=>{
    display.value= Math.sin(display.value)
})

log.addEventListener('click',()=>{
    display.value= Math.log(display.value)
})
tan.addEventListener('click',()=>{
    display.value= Math.tan(display.value)
})
pi.addEventListener('click',()=>{
    display.value= Math.PI(display.value)
})
sqrt.addEventListener('click',()=>{
    display.value= Math.sqrt(display.value, 2)
})
power.addEventListener('click',()=>{
    display.value= Math.pow(display.value, display.value)
})
del.addEventListener('click',()=>{
    display.value=display.value.substr(0, display.value.length -1)
})
sqr.addEventListener('click',()=>{
    display.value= Math.pow(display.value, 2)
})
clear.addEventListener('click',()=>{
    display.value= ''
})

 mean.addEventListener('click',()=>{
   let number = 0;
   if(display.value.includes('+')){
    number ++;
    display.value = eval(display.value)/(display.value.length-number)
   }
 })


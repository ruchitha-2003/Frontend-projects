let hours_space = document.querySelector('#hours')
let min_space = document.querySelector('#min')
let sec_space = document.querySelector('#sec')

function time(){
    let date = new Date()

    let hours = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if(hours <= 9){
        hours_space.innerHTML = '0' + hours
    }else{
        hours_space.innerHTML = hours
    }

    if(min <= 9){
        min_space.innerHTML = '0' + min
    }else{
        min_space.innerHTML = min
    }

    if(sec <= 9){
        sec_space.innerHTML = '0' + sec
    }else{
        sec_space.innerHTML = sec 
    }

    hours_space.innerHTML = hours
    min_space.innerHTML = min
    sec_space.innerHTML = sec

}

setInterval(time,1000)
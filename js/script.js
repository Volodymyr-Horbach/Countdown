
function initCountdown(parent, to){
    let decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

    function decOfNum(number, titles) {
    if(!decCache[number]) decCache[number] = number % 100 > 2 && number % 100 < 60   ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
    }

    let timer;
    parent && to ? timer = setInterval(countdown, 1000) : null

    function countdown(){
        let toCountDate;
        to ? toCountDate = new Date(to) : console.error('Countdown error : no toCountDate mantion')
        let currentDate = new Date()
        
        let totalSeconds = Math.floor((toCountDate - currentDate) / 1000);
       
    
        const seconds = totalSeconds % 60;
        const minutes = Math.floor((totalSeconds / 60) % 60)
        const hours = Math.floor((totalSeconds / 3600) % 24)
        const days = Math.floor((totalSeconds / 86400))
    
        const rootElements = document.querySelectorAll(parent)
    
        if(rootElements.length > 0){
            rootElements.forEach(root =>{
                if (days > 0 && root.querySelector('.days')){
                 root.querySelector('.days .num').textContent = days;
                 root.querySelector('.days .name').textContent = decOfNum(days, ['day', 'days', 'days']);
             } else {
                 root.querySelector('.days').style.display = "none"
             }
             // hours
                 root.querySelector('.hours .num').textContent = hours;
                 root.querySelector('.hours .name').textContent = decOfNum(hours, ['hour', 'hours', 'hours']);
             // minutes
                 root.querySelector('.minutes .num').textContent = minutes;
                 root.querySelector('.minutes .name').textContent = decOfNum(minutes, ['minute', 'minutes', 'minutes']);
             // seconds
                 root.querySelector('.seconds .num').textContent = seconds;
                 root.querySelector('.seconds .name').textContent = decOfNum(seconds, ['second', 'seconds', 'seconds']);

                if(days < 0 && hours < 0 && minutes < 0 && seconds < 0){
                    clearInterval(timer)

                    root.textContent = 'Hey dude, congratulations!!!'
                }
             })
        }
        else {
            console.error('Countdown error : no parent mantion')
        }
    }
    countdown()
}


function startCountdown(){
    let data = document.querySelector('.data')
    return initCountdown('.countdown', new Date(data.value))
}

let button = document.querySelector('.play_img')
button.addEventListener('click', startCountdown)



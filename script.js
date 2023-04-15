//Grabbing the Elements
const display = document.querySelector('.stopwatch-display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

 let [mseconds,seconds,minutes] = [0,0,0]
    let timer =null ;

        function stopwatch(){
            mseconds++;
            if(mseconds==10){
                mseconds= 0;
                seconds++;
                if(seconds==60){
                    seconds=0;
                    minutes++;
                }
            }
            //displaying numbers in two digits 
            let m = minutes <10 ? "0" + minutes : minutes;
            let s = seconds <10 ? "0" + seconds : seconds;
            let ms = mseconds <10 ? "0" + mseconds : mseconds;

          display.innerHTML= m + ":" + s + ":" + ms ; 
        }

        function start(){
           timer= setInterval(stopwatch,100)
        }
        function stop(){
            clearInterval(timer);
        }
        function reset(){
            clearInterval(timer);
            [mseconds,seconds,minutes] = [0,0,0]
            display.innerHTML = "00:00:00"
        }

        //Adding Event Listeners to Buttons
        startBtn.addEventListener('click', start);
        stopBtn.addEventListener('click', stop);
        resetBtn.addEventListener('click', reset);
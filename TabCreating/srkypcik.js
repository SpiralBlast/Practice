window.addEventListener("DOMContentLoaded", function(){
    let headerTab = document.querySelectorAll(".info-header-tab"),
        header = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

        function hideTabContent(a){
            for(let i = a; i < tabContent.length; i++ ){
                tabContent[i].classList.remove("show");
                tabContent[i].classList.add("hide");
            }
        }

        hideTabContent(1);

        function showHideContent(a){
            if(tabContent[a].classList.contains("hide")){
                tabContent[a].classList.remove("hide"); 
                tabContent[a].classList.add("show");
            }
        }
        
        
        //эта херня делегированием называется а сам контейнер табом
        header.addEventListener("click", function(event) {
            let target = event.target; 
            if(target && target.classList.contains("info-header-tab")) {
                for(let i = 0; i < headerTab.length; i++) {
                    if(target == headerTab[i]) {
                    hideTabContent(0);
                    showHideContent(i); 
                    break;
                    }
                }
            } else{
                alert("1");
            }

        });

    let deadline = "2020-05-22";

    function getRemainingTime(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = zeroPlus(Math.floor((t/1000)%60)),
        minutes = zeroPlus(Math.floor((t/1000/60)%60)),
        hours = zeroPlus(Math.floor((t/(1000*60*60))));
        //hours = Math.floor((t/1000/60/60)%24),
        //days = Math.floor(t/(1000*60*60*24 ));

        return{
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours 
        }
    }

    function zeroPlus(a){
        if(a<10) return "0" + a;
        return a;
    }

    function setClock(id, endtime){
        let timer = document.getElementById(id),
         hours = timer.querySelector('.hours'),
         minutes  = timer.querySelector('.minutes'),
         seconds = timer.querySelector('.seconds'),
         timeInterval = setInterval(updateClock, 1000);
        

        
         function updateClock(){
             let t = getRemainingTime(endtime);
             hours.textContent = t.hours,
             minutes.textContent = t.minutes,
             seconds.textContent = t.seconds;

             if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00",
                minutes.textContent = "00",
                seconds.textContent = "00";
             } 
         }
    }

    setClock("timer", deadline);
});
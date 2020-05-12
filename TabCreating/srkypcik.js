//window.addEventListener("DOMContentLoaded", function(){
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
//});
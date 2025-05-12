     

        const inputFieldEl=document.getElementById("result");
        const butonlar=document.querySelectorAll("button");
        for (let i=0;i<butonlar.length; i++){
            butonlar[i].addEventListener("click",() => {
                const buttonValue=butonlar[i].textContent;

                if(buttonValue==="AC"){
                    clearResult();
                }else if (buttonValue==="="){
                   calculateResult();
                } else {
                    appendValue(buttonValue);
                }
            });
            
        }

        function clearResult(){
            inputFieldEl.value="";
        }
        function calculateResult(){
            inputFieldEl.value=eval(inputFieldEl.value);
        }

        function appendValue(buttonValue){
            inputFieldEl.value += buttonValue;
        }
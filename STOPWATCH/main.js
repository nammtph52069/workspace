window.onload = function(){
    var Start = document.getElementById("button-start");
    var Stop = document.getElementById("button-stop");
    var Reset = document.getElementById("button-reset");

    var getSeconds = document.getElementById("seconds");
    var getTens = document.getElementById("tens");

    var seconds = 00;
    var tens = 00;

    var interval;

    Start.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTime, 10);
    }
    Stop.onclick = function(){
        clearInterval(interval);
    }
    Reset.onclick = function(){
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        getSeconds.innerHTML = seconds;
        getTens.innerHTML = tens;
        
    }



    function startTime(){
        tens++

        if(tens <= 9){
            getTens.innerHTML = "0" + tens;
          }
          
          if (tens > 9){
            getTens.innerHTML = tens;
            
          } 
          
          if (tens > 99) {
            console.log("seconds");
            seconds++;
            getSeconds.innerHTML = "0" + seconds;
            tens = 0;
            getTens.innerHTML = "0" + 0;
          }
          
          if (seconds > 9){
            getSeconds.innerHTML = seconds;
          }
        
    }






}
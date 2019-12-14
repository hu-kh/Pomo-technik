function start()
{
    document.getElementById("start").style.display = 'none';
    document.getElementById("active").style.display = 'none';
    document.getElementById("active_p").style.display = 'none';
    document.getElementById("timer").style.display = 'block';
    
    var d = new Date();
    var n = d.getTime();
    var startTime = n;

    var tm=0;
    function updateTimer(){
        d = new Date();
        n = d.getTime();
        var currentTime = n;  
        tm = (currentTime-startTime);
        
        var hours = Math.floor(tm / 1000 / 60 / 60);
        var minutes = Math.floor(tm / 60000) % 60;
        var seconds =  ((tm / 1000) % 60);
        // saca los decimales ej 2 d{0,2}
        var seconds = seconds.toString().match(/^-?\d+(?:\.\d{0,-1})?/)[0];
        var miliseconds = ("00" + tm).slice(-3);
        var centiseconds;

        centiseconds = miliseconds/10;
        centiseconds = (centiseconds).toString().match(/^-?\d+(?:\.\d{0,-1})?/)[0];

        minutes = (minutes < 10 ? '0' : '') + minutes;
        seconds = (seconds < 10 ? '0' : '') + seconds;
        centiseconds = (centiseconds < 10 ? '0' : '') + centiseconds;
        hours = hours + (hours > 0 ? ':' : '');
        if (hours==0){
            hours='';
        }

        if(minutes == 25)
        {
            var sound = document.getElementById("sound");
            sound.play();
            clearInterval(timerInterval);
            document.getElementById("start").style.display = 'block';
            document.getElementById("timer").style.display = 'none';
            document.getElementById("active").style.display = 'block';
            document.getElementById("active_p").style.display = 'block';
        }

        document.getElementById("timer").innerHTML = hours + minutes + ':' + seconds + '<small>.' + centiseconds + '</small>';
    }

    var timerInterval = setInterval(updateTimer, 10);
    // clearInterval(timerInterval);
}
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

        var str = "&#1575;";
        var count = document.getElementById("counter");

        if(minutes == 25)
        {
            count.innerHTML += str;
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
}

//color gold
var c = document.getElementById("default");     
    c.onclick = function(){
    document.getElementById("change_c").style.background = "#f7b02a";
    document.getElementById("start").style.color = "rgb(255, 251, 238)";
    document.getElementById("active").style.color = "rgb(255, 251, 238)";
    document.getElementById("active_p").style.color = "rgb(255, 251, 238)";
}
// color red
var c = document.getElementById("c_1");      
    c.onclick = function(){
    document.getElementById("change_c").style.background = "rgb(251, 131, 131) none repeat scroll 0% 0%";
    document.getElementById("start").style.color = "rgb(232, 21, 21)";
    document.getElementById("active").style.color = "rgb(232, 21, 21)";
    document.getElementById("active_p").style.color = "rgb(232, 21, 21)";
}
// color green
var c = document.getElementById("c_2");  
    c.onclick = function(){
    document.getElementById("change_c").style.background = "rgb(91, 172, 44) none repeat scroll 0% 0%";
    document.getElementById("start").style.color = "rgb(181, 255, 74)";
    document.getElementById("active").style.color = "rgb(181, 255, 74)";
    document.getElementById("active_p").style.color = "rgb(181, 255, 74)";
}
var purpuleColor = document.getElementById('color-2');
var bluecolor = document.getElementById('color-1');
var BlackeColor = document.getElementById('color-3');
var watch = document.getElementById('watch');
var timeButton = document.getElementById('time');
var spanClock = document.getElementById('clockTime')
var HeartBeat = document.getElementById('Heart_rate')
let heartRate = document.getElementById('hbNumber');

purpuleColor.addEventListener('click',function(){

    watch.src = "https://i.imgur.com/xSIK4M8.png"
    watch.alt = " purpulewatch"


})
bluecolor.addEventListener('click',function(){

    watch.src = "https://i.imgur.com/Mplj1YR.png"
    watch.alt = " purpulewatch"


})
BlackeColor.addEventListener('click',function(){

    watch.src = "https://i.imgur.com/iOeUBV7.png"
    watch.alt = " purpulewatch"


})

function time(){
    var d= new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    spanClock.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);

}

function random (){
    heartRate.textContent =String(Math.floor(Math.random() * 51) + 80);
}


timeButton.addEventListener('click',function(){

    setInterval(time,1000);


})

HeartBeat.addEventListener('click',function(){
   
    spanClock.style.display = 'none'
    random();   
    console.log(heartRate.innerHTML);
    console.log(heartRate)
    


})




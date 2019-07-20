var weather;

function setup(){
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Bellaire&APPID=300ae133999d23f7fa9406cbeed0b966&units=imperial');
} //setup

function goData(data){
    weather = data;
} //goData


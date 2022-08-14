let click = 0;

var timeout=5000;
var button = document.querySelector('#button');
var display = document.querySelector('#CountDisplay');
var gameoff= document.querySelector('#timer');

button.onclick=start;

function start(){
    const startTime=Date.now();
    gameoff.textContent=format(timeout);

    button.onclick=function(){
        click++;
        display.textContent=click;
    }
    const interval = setInterval(() => {
        const delta = Date.now()-startTime;
        gameoff.textContent=format(timeout-delta);
    }, 100);
    
    setTimeout(() => {
        button.onclick=null;
        gameoff.textContent='არც თუ ისე ცუდი შედეგია...';
        clearInterval(interval);
        clearTimeout(timeout);
        }, timeout);

    function format(ms){
        return parseInt(ms/1000).toFixed(0);
    }
}

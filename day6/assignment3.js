
var a=prompt("enter our name")
var welcome="welcome "+a;
document.getElementById("title").innerHTML = welcome;

const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

clock();

setInterval(clock,1000);
const attr = document.getElementById('dark');
attr.onclick = function changeColor(){
    
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
        
}


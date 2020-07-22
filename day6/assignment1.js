i=0;
function call(i) {
    

let aray=["green","red","yellow","orange","blue"];
    

var a=aray[i];
document.body.style.backgroundColor=a;
}

    
setInterval(() => {call(i++);
    
}, 5000); 


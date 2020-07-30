var quotes=[' "A rose by any other name would smell as sweet" ',' "All that glitters is not gold" ',' "Eighty percent of success is showing up" ',' "Go ahead, make my day" ',' "I love the smell of napalm in the morning" ',' "Life is like riding a bicycle. To keep your balance, you must keep moving" ',' "No one can make you feel inferior without your consent" ',' "Speak softly and carry a big stick" ',' "The love of money is the root of all evil" ',' "The truth will set you free" ',' "To be or not to be, that is the question" ',' "To thine own self, be true" ',' "United we stand, divided we fall" ',' "Whatever you are, be a good one" ',' "You must be the change you wish to see in the world" ',' "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference" '];
function newquotes() {
    var n=Math.floor(Math.random()*20);
    document.getElementById("div1").innerHTML=quotes[n];

}

    
setInterval(() => {newquotes();
    
}, 5000); 

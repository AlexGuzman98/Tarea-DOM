function mix() { 
     x = Math.floor(Math.random() * 256);
     y = Math.floor(Math.random() * 256);
     z = Math.floor(Math.random() * 256);
        
    return `rgb(${x},${y},${z})`
}
let parrafo = document.querySelectorAll('.container p');
for(let i = 0; i < parrafo.length; i++){
    parrafo[i].style.color = mix();
 
}
console.log(mix());

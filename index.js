const colors = ['#CEE5D0', '#F3F0D7', '#D8B384', '#5E454B', '#FFC074', '#B6C867'];
document.body.style.backgroundColor = "#5F939A";
function changecolor(){
    const colorIndex = parseInt(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
   
}





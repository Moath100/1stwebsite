document.addEventListener("DOMContentLoaded",function() {
    const button = document.getElementById("ChangeColorBtn");
    button.addEventListener("click",function() {
        const colors = ["#80f6f3", "#33ff50", "#95ee8b","#ac0d27","#e4872d","#e4db2d","#2d53e4"];
        const randomcolor = colors[Math.floor(Math.random()* colors.length)]; 
        document.body.style.background = randomcolor;
    });
});
    
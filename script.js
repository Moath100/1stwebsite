document.addEventListener("DOMContentLoaded",function() {
    const button = document.getElementById("ChangeColorBtn");
    button.addEventListener("click",function() {
        const colors = ["rgb(15, 15, 15)", "#ffffff"];
        const randomcolor = colors[Math.floor(Math.random()* colors.length)]; 
        document.body.style.background = randomcolor;
    });
});
    
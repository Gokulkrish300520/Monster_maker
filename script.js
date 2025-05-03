
let facebtn=document.querySelector(".face-btn");
let colorbtn=document.querySelector(".color-btn");
let hornsbtn=document.querySelector(".horns-btn");
let tailbtn=document.querySelector(".tail-btn");

let docroot=document.querySelector(":root");
const faceImg = document.getElementById("face");

let bodyColors = [
    "#a8d530",
    "#42aaff",
    "#f3d55b",
    "#ff4f51",
    "#904ae8",
    "#ffa711",
    "#00c1d4",
    "#ff69b4",
    "#8bc34a",
    "#795548"
];
let color=[...bodyColors,"transparent"];
let [counter1,counter2,counter3,counter4]=Array(4).fill(0);

function setCounter(counter,length){
    return counter < length-1 ? counter + 1 : 0;
}
facebtn.addEventListener("click",()=>{
    counter1 = setCounter(counter1,11);
    console.log(counter1);
    faceImg.setAttribute("src",`images/face-${counter1}.png`)
    if (counter1>5)
    {
        faceImg.style.top="100px";
        faceImg.style.left="55px";
    }
    else {
        // Reset position for normal face images
        faceImg.style.top = "90px";
        faceImg.style.left = "47px";
    }
});
colorbtn.addEventListener("click",()=>{
    counter2 = setCounter(counter2,color.length);
    docroot.style.setProperty("--color-monster",bodyColors[counter2]);

});
hornsbtn.addEventListener("click",()=>{
    counter3 = setCounter(counter3,color.length);
    docroot.style.setProperty("--color-horns",bodyColors[counter3]);
});
tailbtn.addEventListener("click",()=>{
    counter4 = setCounter(counter4,color.length);
    docroot.style.setProperty("--color-tail",bodyColors[counter4]);
});

let downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", () => {
    const monster = document.getElementById("container");
    html2canvas(monster).then(canvas => {
    const link = document.createElement("a");
    link.download = "monster-sticker.png";
    link.href = canvas.toDataURL();
    link.click();
    }).catch(error => {
    console.error("Error generating sticker:", error);
    });
});
document.body.addEventListener("click",()=>{
    const audio=document.getElementById("bg-music");
    audio.play()
}, { once: true });
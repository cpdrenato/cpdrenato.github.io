const secHand= document.querySelector('.sec');
const minHand= document.querySelector('.min');
const hurHand= document.querySelector('.hur');
let hue=0;
function setTime() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hur = now.getHours();
  const secDeg = ((sec/60)* 360)+90;
  const minDeg = ((min/60)* 360)+90;
  const hurDeg = ((hur/12)* 360)+90;
  secHand.style.transform=`rotate(${secDeg}deg)`
  minHand.style.transform=`rotate(${minDeg}deg)`
  hurHand.style.transform=`rotate(${hurDeg}deg)`
  hue = hue + 10;
  document.documentElement.style.setProperty('--background' , `hsl(${hue}, 100%, 5%)`);
  document.documentElement.style.setProperty('--color' , `hsl(${hue}, 100%, 90%)`);
  document.documentElement.style.setProperty('--text' , `10px 10px 0 hsl(${hue}, 100%, 75%)`);
  document.documentElement.style.setProperty('--border' , `solid hsl(${hue}, 100%, 90%) 0.5vw`);
  if(hue>=360){
    hue= (hue + 30) - 360;
  }
}

setInterval(setTime,1000)

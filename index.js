setInterval(()=>{
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
const second = date.getSeconds();
const currMinute = document.getElementById("current-mins");
currMinute.innerText = minute;
const currSecs = document.getElementById("current-secs");
currSecs.innerText = second;
const currHour = document.getElementById("current-hour");
const ampm = document.getElementById("ampm")
var check = hour;
if(check>12){
 hour -=12; 
 currHour.innerHTML=hour;
     
}

else
{
    currHour.innerHTML=hour;
     
}
 if(check==0)
{
    currHour.innerHTML = 12;
}
 if(check>=12)
{
    ampm.innerText = "PM";
}
 if(check>=0 && check<12)
{
    ampm.innerText= "AM";
}
},1000);
function create (){


const data = document.createElement("div");
const data1 = document.createElement("div");
const data2 = document.createElement("div");
// data1.style.background= "white";
// data.style.background="white";
// data2.style.background= "white";
var wake = document.getElementById("wake");
var lunch = document.getElementById("lunch");
var nap = document.getElementById("nap");
var display =document.getElementById("lunchid");
var reminder = document.getElementById("inttext")
data.innerText = "wake up time : " + wake.value  
data1.innerText = "lunch time : " + lunch.value;
data2.innerText = "nap time : " + nap.value;


       

// data.appendChild(document.createTextNode( wake.values));
// data.appendChild(document.createTextNode( lunch.value));
// data.appendChild(document.createTextNode( nap.value));

document.getElementById("parent").appendChild(data);
document.getElementById("parent").appendChild(data1);
document.getElementById("parent").appendChild(data2);
setInterval(() => {
    
    var wake = document.getElementById("wake");
 wake= wake.value;
var make = wake.split(" ");
if(hour==0)
         {
             hour =12;
         }

    if (make[1]=="PM")
    {
        var wcon = (make.slice(0,1));
        
     wcon = parseInt(wcon);
     
     wcon += 12
        
    }
    if (make[1]=="AM")
    {
        var wcon = (make.slice(0,1));
        
       wcon = parseInt(wcon); 
    }
    if (wcon==hour)
    {
        image.style.backgroundImage = 'url("./images/wakeup.png.png")';
        display.innerHTML ="wake up !!"
        reminder.innerText = "GOOD MORNING";
    }
    var lunch = document.getElementById("lunch");
    lunch= lunch.value;
var make1 = lunch.split(" ");
    if (make1[1]=="PM")
    {
        var lcon = (make1.slice(0,1));
        
         lcon = parseInt(lcon);
         lcon +=12;
    }
    if (make1[1]=="AM")
    {
        var lcon = (make1.slice(0,1));
        
         lcon = parseInt(lcon);
        
    }
    if (lcon==hour)
    {
        image.style.backgroundImage = 'url("./images/lunch.png.png")';
        display.innerHTML ="Let's have some lunch !!"
        reminder.innerText = "GOOD AFTERNOON";
    }
    var nap = document.getElementById("nap");
    nap= nap.value;
var make2 = nap.split(" ");
    if (make2[1]=="PM")
    {
        var ncon = (make2.slice(0,1));
        
         ncon = parseInt(ncon);
         ncon +=12;
    }
    if (make2[1]=="AM")
    {
        var ncon = (make2.slice(0,1));
        
         ncon = parseInt(ncon);
         
        
    }
    if (ncon==hour)
    {
        image.style.backgroundImage = 'url("./images/goodnight.png.png")';
        display.innerHTML ="nap time !!"
        reminder.innerHTML = "GOOD NIGHT";
    }
    if (wcon==hour&& lcon==hour&&ncon==hour)
    {
        image.style.backgroundImage = 'url("./images/wakeup.png.png")';
        display.innerHTML ="wake up !!"
        reminder.innerText = "GOOD MORNING";
    }
}, 10000);

    

    

}
    if(hour>4&&hour<12)
    {
    reminder.innerText = "GOOD MORNING";
    }
    if(hour>12&&hour<16)
    {
    reminder.innerText = "GOOD EVENING";
    }
    if(hour>16&&hour<24)
    {
    reminder.innerHTML = "GOOD NIGHT";
    }
const wake = document.getElementById("wake").value;
const lunch = document.getElementById("lunch").value;
const nap = document.getElementById("nap").value;
var date = new Date();
var hour = date.getHours();
var checkHour = hour;
if(ampm=="PM")
{
checkHour = hour + 12;
}
// var checkTime = document.createElement("img");
// checkTime.style.width="535px";
// checkTime.style.height ="474px"


    let image = document.getElementById("image");
    var arrayImg = [];
    arrayImg[0] = './images/wakeup.png.png';
    arrayImg[1] = './images/goodnight.png.png';
    arrayImg[2] = './images/lunch.png.png';
    image.style.backgroundImage = 'url("./images/lunch.png.png")';
    console.log(hour);
    
    var make = wake.split(" ");
    console.log(make)
    if (make[1]=="PM")
    {
        var tcon = (make.slice(0,1));
        
     tcon = parseInt(tcon);
     
     tcon += 12
        
    }
    if (tcon==hour)
    {
        image.style.backgroundImage = 'url("./images/wakeup.png.png")';
    }
    console.log(tcon);
    











const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items    = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear,tempMonth,tempDay + 10,11,30,0);


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
let month = futureDate.getMonth();
let weekday = futureDate.getDay();
weekday = weekdays[weekday];
month = months[month];

giveaway.textContent = `giveaway ends on ${weekday},${date} ${month} ${year} ${hours}:${minutes}am`;


const futureTime = futureDate.getTime();

const getRemaindingTime = ()=>{
    const today = new Date().getTime();
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    
    //values in millisecond
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    // calculate all values 
     let days = t/oneDay;
     days = Math.floor(days);
     let hours = Math.floor((t%oneDay)/oneHour);
     let minutes = Math.floor((t%oneHour)/oneMinute);
     let seconds = Math.floor((t%oneMinute) /1000);
     
    //  set values array 
    const values = [days,hours,minutes,seconds];
    const format = (item)=>{
       if(item < 10){
           return(item = `0${item}`);
       }
       return item;
    }
    items.forEach((item,index)=>{
        item.innerHTML = format(values[index]);
    });
    if(t<0){
        clearInterval(countDown);
        deadline.innerHTML = `<h4 class="expired>sorry,this giveaway expired</h4>`;
    }
}
let countDown = setInterval(getRemaindingTime,1000);
getRemaindingTime();
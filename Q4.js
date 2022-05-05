// Create a function to build a Clock in 12 hours(with AM & PM ) and show The current
// Time in the console.



function currentTime(data) {
    let Hours = data.getHours()
    let Minutes = data.getMinutes()
    let  meridiemIndicator = "";

    if (Hours >= 12) {
        meridiemIndicator = "PM";
    } else
        meridiemIndicator = "AM";

    Hours = Hours % 12;
    if (Hours % 12 === 0) 
       Hours=12; 
    
    if (Minutes < 10) {   //07
        Minutes = "0" + Minutes;
    } else
        Minutes = Minutes; //12

    return Hours + ":" + Minutes + " " +  meridiemIndicator;
}
console.log(currentTime(new Date));
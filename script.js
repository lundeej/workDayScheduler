// currentTime 
var currentTime = moment().format("dddd MMMM Do YY"); 
console.log(currentTime); 

// currentDay Element 
var currentDay = document.querySelector("#currentDay"); 
currentDay.textContent = currentTime; 

// timeEntry container Element 
var timeEntryContainer = document.querySelector("#container"); 

// block for each hour of the day 
for(var i = 9; i <= 17; i++) {
    //attempt to get the saved data for the hour of the loop 
    var data = "HELLO"; 

    var template = `
        <div class="row">
        <div>${i}</div>
        <div><textarea>${data}</textarea></div>
        <div><button data-hour="${i}">Save</button></div>
        </div>
    `; 
    
}
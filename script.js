// currentTime 
var currentTime = moment().format("dddd, MMMM Do YYYY"); 
console.log(currentTime); 

//currentHour 
var currentHour = moment().format("hh"); 
console.log(currentHour); 

// currentDay Element 
var currentDay = document.querySelector("#currentDay"); 
currentDay.textContent = currentTime; 

// timeEntry container Element 
var timeEntryContainer = document.querySelector(".container"); 

// block for each hour of the day 
for(var i = 5; i <= 20; i++) {
    //attempt to get the saved data for the hour of the loop 
    var savedData = "hour-"+i; 

    var data = ""; 

    //compare i to current hour to determine if hour is in the past/present/future 

    var template = `
        <div class="row">
        <div>${i}</div>
        <div><textarea>${data}</textarea></div>
        <div><button data-hour="${i}">Save</button></div>
        </div>
    `; 
    //append the HTML to the page 
   var timeEntryDiv = document.getElementById("timeEntries"); 
   timeEntryDiv.append(template); 
}

// save data using the container 
timeEntryContainer.on("click", "button", function() {
    console.log("yes"); 

}); 
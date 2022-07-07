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
var containerEl; 
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
}

// save data using the container 
containerEl.on("click", "button", function() {
    console.log("yes"); 
    
    //Fetch the hour from the clicked button's (event.target) 'data-hour' attribute
    
    // use the hour to save for local storage 

    // Getting the value/text user wants to save 

    // from the clicked button, traverse the DOM to the nearby <textarea> to fetch its value 

    // use the key to save to local area 

}); 
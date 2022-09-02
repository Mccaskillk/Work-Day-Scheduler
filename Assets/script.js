

//Current Month, Date & Year
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


//Loops over the time blocks
var momentTime = moment().startOf("day").add(7, "hour");
var hour = moment().format("H");

for (var i = 8; i < 20; i++) {
    var timeSlot = momentTime.add(1, "hour").format("HH:mm A");
    var currentState;
    
  
    // Color allows user to indicate whether it is in the past, present, or future on the specific timeblock.
    if (hour == i) {
        currentState = 'present';
    } else if (hour > i) {
        currentState = 'future';
    } else if (hour < i) {
        currentState = 'past';
    }

    var newStuff =
        `<container class="row" id='hour-${i}'>
            <div class="col-2"></div>
            <div class="hour w-25 p-4 col-1">${timeSlot}</div>
            <textarea class="description w-50 p-4 col-6 ${currentState} hour-${i}"></textarea>
            <button class="saveBtn w-25 p-4 col-1 fas fa-save fa-2x"></button>
            <div class="col-2">
            </div>  
        </container>
        <p></p>`
        ;

    $("#containAll").append(newStuff);



};
// when the save button is clicked ,that event is saved into local storage 
 $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    saveID = $(this).data("save");
    inputText = $(this).siblings().find("textarea").val();
    localStorage.setItem(saveID, inputText);
});

// Loop to get item from from local storage 
function showTask() {
    for (var i = 9; i < 18; i++) {
      var task = localStorage.getItem(i);
      console.log(task);
      $("#" + i + "").text(task);
    }
  }






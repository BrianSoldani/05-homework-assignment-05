// Get proper time format at top of Day Planner on page load
const time = moment();

console.log(time.toString());

const currentDate = $("#currentDay");

function setDate() {
    currentDate.html(time.format("dddd, MMMM Do, YYYY"));
};

setDate();


// Load updates from local storage at page load
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));



// Initiate and set local storage items on save button click
    $(".saveBtn").on("click", function() {

        event.preventDefault();
        
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, description);
    });
        

// Update color scheme on time blocks throughout the day
    function colorChanges() {

        var currentHour = moment().hours();

        console.log(currentHour)

        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            console.log(blockHour)
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    colorChanges();


var interval = setInterval(colorChanges, 300000)

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC97u_SJy_E6_vpJ9PuuB6KLzMv9TEKfmE",
    authDomain: "ke-train-scheduler.firebaseapp.com",
    databaseURL: "https://ke-train-scheduler.firebaseio.com",
    projectId: "ke-train-scheduler",
    storageBucket: "ke-train-scheduler.appspot.com",
    messagingSenderId: "581787075295"
};
firebase.initializeApp(config);

//
var database = firebase.database();

$("button").on("click", function (event) {
    event.preventDefault();
    var name = $("#train-name").val();
    var destination = $("#destination-input").val();
    var start = $("#start-input").val();
    var frequency = $("#frequency-input").val();

    database.ref().push({
        "name": name,
        "destination": destination,
        "start": start,
        "frequency": frequency,
    });

    // Moment JS Logic

    //Frequency
    var tFrequency = frequency;

    //First Train Time
    var firstTime = start;

    // First Time(pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("Difference in Time: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minutes Until Train
    var tMinusTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinusTrain);

    // Next Train
    var nextTrain = moment().add(tMinusTrain);
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    var arrivalTime = moment(nextTrain).format("hh:mm");
    // find table and add a table row
    $("#train-time-table tbody").append(
        `
<tr>
    <td>${name}</td>
    <td>${destination}</td>
    <td>${frequency}</td>
    <td>${tMinusTrain}</td>
    <td>${arrivalTime}</td>
</tr>
`
    );



});






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
        "frequency": frequency
    });
    // find table and add a table row
    $("#train-time-table tbody").append(
        `
<tr>
    <td>${name}</td>
    <td>${destination}</td>
    <td>${start}</td>
    <td></td>
    <td>${frequency}</td>
    <td></td>
</tr>
`
    );
});


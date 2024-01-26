// app.js

import getEvents from "./pages/events.js";

// Veriyi çekme ve etkinlikleri görüntüleme işlemleri
function fetchData() {
    const baseURL = "http://localhost:3000";
    
    // Fetch data from json-server
    $.ajax({
        url: `${baseURL}/events`,
        dataType: 'json',
        success: function (json) {
            console.log(json);
            displayEvents(json);
        },
        error: function () {
            console.log("Error fetching data from server");
        }
    });
}

// Display events on the page
function displayEvents(data) {
    const appElement = $("#app");
    appElement.empty();

    data.forEach(function (event) {
        const eventHtml = `
            <div class="event">
                <h2>${event.date} - ${event.scene}</h2>
                <p>${event.description}</p>
                <p>Time: ${event.time}</p>
                <p>Price: ${event.price} SEK</p>
                <button class="reserve-btn" data-id="${event.id}">Reserve Tickets</button>
            </div>
        `;
        appElement.append(eventHtml);
    });

    // Add event listener for reserve button
    $(".reserve-btn").on("click", function () {
        const eventId = $(this).data("id");
        reserveTicket(eventId);
    });
}

// Reserve tickets for an event
function reserveTicket(eventId) {
    // Reservation process
    // ...

    // After reservation, you might want to update the displayed data
    fetchData();
}

// Fetch initial data when the document is ready
$(document).ready(function () {
    fetchData();
});

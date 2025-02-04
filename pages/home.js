
/*
// home.js
export default function home() {
  const eventsContainer = $("<div>");

  // Asenkron olarak db.json dosyasını oku
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      // Varsayılan olarak db.json içinde bir "events" alanı olduğunu varsayalım
      const eventsData = data.events;

      // Etkinlikleri döngü ile listeleyin
      eventsData.forEach((event, index) => {
        const eventElement = $(`
          <div class="event" data-index="${index}">
            <h2>${event.date} - ${event.time}</h2>
            <p>${event.description}</p>
            <p>Price: ${event.price}</p>
            <p>Scene: ${event.scene}</p>
            <p>Max Capacity: ${event.maxCapacity}</p>
            <button class="book-btn">Book Now</button>
          </div>
        `);

        // Etkinliğe tıklandığında detayları göster
        eventElement.find(".book-btn").on("click", () => {
          showEventDetails(index);
        });

        eventsContainer.append(eventElement);
      });
    })
    .catch(error => {
      console.error('Error reading db.json:', error);
    });

  return eventsContainer;
}

// Etkinlik detaylarını gösteren fonksiyon
function showEventDetails(index) {
  // Detayları göstermek için gerekli işlemleri yapabilirsiniz.
  // Örneğin, seçilen etkinlik bilgilerini konsola yazdırabilirsiniz.
  console.log("Selected Event:", eventsData[index]);
}
*/

import { getEvents } from './pages/events.js';

export default function home() {
  const eventsContainer = $("<div>");

  // Etkinlikleri döngü ile listeleyin
  getEvents().forEach((event, index) => {
    const eventElement = $(`
      <div class="event" data-index="${index}">
        <h2>${event.date} - ${event.time}</h2>
        <p>${event.description}</p>
        <p>Price: ${event.price}</p>
        <p>Scene: ${event.scene}</p>
        <p>Max Capacity: ${event.maxCapacity}</p>
        <button class="book-btn">Book Now</button>
      </div>
    `);

    // Etkinliğe tıklandığında detayları göster
    eventElement.find(".book-btn").on("click", () => {
      showEventDetails(index);
    });

    eventsContainer.append(eventElement);
  });

  return eventsContainer;
}

// Etkinlik detaylarını gösteren fonksiyon
function showEventDetails(index) {
  const selectedEvent = getEvents()[index];
  console.log("Selected Event:", selectedEvent);

  // Burada rezervasyon sayfasına geçişi sağlayabilirsiniz
  // Örneğin: window.location.href = "#reserve";
}

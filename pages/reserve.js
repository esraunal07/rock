export default function reserve(events) {
    const reserveContainer = $("<div>");
  
    // Etkinlikleri döngü ile listeleyin
    events.forEach((event, index) => {
      const eventElement = $(`
        <div class="event" data-index="${index}">
          <h2>${event.date} - ${event.time}</h2>
          <p>${event.description}</p>
          <p>Price: ${event.price}</p>
          <p>Scene: ${event.scene}</p>
          <p>Max Capacity: ${event.maxCapacity}</p>
          <button class="reserve-btn" data-index="${index}">Reserve Tickets</button>
        </div>
      `);
  
      // Etkinliğe tıklandığında rezervasyon işlemleri gerçekleştirilebilir
      eventElement.find(".reserve-btn").on("click", () => {
        reserveTicket(index);
      });
  
      reserveContainer.append(eventElement);
    });
  
    return reserveContainer;
  }
  
  // Rezervasyon işlemi
  function reserveTicket(index) {
    const selectedEvent = events[index];
    console.log("Reserved Ticket for Event:", selectedEvent);
    // Burada rezervasyon işlemleri gerçekleştirilebilir
  }
  
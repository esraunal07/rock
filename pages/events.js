const eventsData = [
    {
      date: "2024-02-01",
      time: "19:00",
      price: 100,
      scene: "Rökrock",
      description: "Lorem ipsum",
      maxCapacity: 250, // Maksimum kapasite
      bookings: [
        {
          name: "John Doe",
          surname: "Doe",
          email: "john.doe@example.com",
          mobile: "123-456-7890",
        },
        // Diğer rezervasyonlar
      ]
    },
    {
      date: "2024-02-15",
      time: "20:00",
      price: 150,
      scene: "Trenchcoat",
      description: "Dolor sit amet",
      maxCapacity: 500,
      bookings: [
        {
          name: "Jane Doe",
          surname: "Doe",
          email: "jane.doe@example.com",
          mobile: "987-654-3210",
        },
        // Diğer rezervasyonlar
      ]
    },
    // Diğer etkinlikler
  ];


async function getEvents() {
  try {
    const response = await fetch('./db.json');
    const data = await response.json();
    return data.events; 
  } catch (error) {
    console.error('Error reading db.json:', error);
    return [];
  }
}

export default getEvents;


  
import getEvents from './pages/events.js';
import admin from './pages/admin.js';
import home from './pages/home.js';
import reserve from './pages/reserve.js'; // Yeni ekledik

async function router() {
  const events = await getEvents();

  switch (location.hash) {
    case "#events":
      $('main').html(await events());
      break;
    case "#reserve":
      $('main').html(await reserve(events)); // Etkinlikleri rezervasyon sayfasına gönderiyoruz
      break;
    case "#admin":
      $('main').html(await admin());
      break;
    case "#home":
    default:
      $('main').html(await home());
  }
}

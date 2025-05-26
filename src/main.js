/*Hamburger menu button behaviour*/
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


/*MENU 2*/
const menu = {
  menuList: [
    {
      menuId: 0,
      menuName: "Chicken Burger",
      menuDescription: "We placed 70 years of delicious into this sandwich. Taste our legendary hand-battered chicken.",
      menuPrice: 10.00,
      image: "src/images/gastro/gasto-item-chicken-buger.jpg"
    },
    {
      menuId: 1,
      menuName: "Chicken wings",
      menuDescription: "Get your fill with the Texas-Sized Meal: 3PC Legs & Thighs, 2 regular sides plus a signature jalapeño pepper.",
      menuPrice: 9.00,
      image: "src/images/gastro/gasto-item-chicken-wings.jpg"
    },
    {
      menuId: 2,
      menuName: "Beer",
      menuDescription: "Just simple and fresh beer.",
      menuPrice: 2.20,
      image: "src/images/gastro/gasto-item-beer.jpg"
    },
    {
      menuId: 3,
      menuName: "French fries",
      menuDescription: "Our fries are extra-long and center-cut from Grade A potatoes. They are cooked to a golden-brown crisp while remaining slightly soft in the middle. Every batch is cooked to order in our premium quality Canola Oil blend, then lightly salted immediately after leaving the fryer, so the taste melts onto each fry.",
      menuPrice: 12.00,
      image: "src/images/gastro/gasto-item-french-fries.jpg"
    },
    {
      menuId: 4,
      menuName: "Milshake",
      menuDescription: "Our creamy Milkshakes are hand-spun the old-fashioned way each time and feature delicious. Topped with whipped cream and a cherry (except when served via delivery).",
      menuPrice: 1.80,
      image: "src/images/gastro/gasto-item-milkshake.jpg"
    },
    {
      menuId: 5,
      menuName: "Fried chicken",
      menuDescription: "We use premium chicken breast tenderloins to make the most tender chicken fingers possible. Our special marinade tenderizes the chicken, locks in moisture and adds flavor.",
      menuPrice: 8.00,
      image: "src/images/gastro/gasto-item-fried-chicken.jpg"
    }
  ]
};

const menuItems = menu.menuList;
console.log(menuItems);
const slider = document.getElementById('menu-slider');

menuItems.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    card.innerHTML = `
    <img src="${item.image}" alt="${item.menuName}">
    <div class="space-evenly">
    <h3>${item.menuName}</h3>
    <p>${item.menuDescription}</p>
    <p class="price-label">€${item.menuPrice.toFixed(2)}</p>
    </div>
  `;

    slider.appendChild(card);
});

// SLIDER NAVIGATION
const btnLeft = document.getElementById('slide-left');
const btnRight = document.getElementById('slide-right');

btnLeft.addEventListener('click', () => {
    slider.scrollBy({ left: -100, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
    slider.scrollBy({ left: 100, behavior: 'smooth' });
});



//GOOGLE MAP
  (g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
    key: "AIzaSyDR5_B5s-b6_PewkV2u_7KzYxj9h3owYT8",
    v: "weekly",
  });

let map;

//MAPS STYLES
const googleMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [{ "color": "#ebe3cd" }]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#479cd5" }]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      { "color": "#479cd5" },
      { "visibility": "off" }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#523735" }]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [{ "color": "#f5f1e6" }]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{ "color": "#c9b2a6" }]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#479cd5" }]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [{ "color": "#479cd5" }]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#ae9e90" }]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [{ "color": "#479cd5" }]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{ "color": "#dfd2ae" }]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#93817c" }]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#225193" }]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#225193" }]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{ "color": "#f5f1e6" }]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{ "color": "#fdfcf8" }]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{ "color": "#f8c967" }]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{ "color": "#e9bc62" }]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [{ "color": "#e98d58" }]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [{ "color": "#db8555" }]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#806b63" }]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [{ "color": "#dfd2ae" }]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#8f7d77" }]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [{ "color": "#ebe3cd" }]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [{ "color": "#dfd2ae" }]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#b9d3c2" }]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#92998d" }]
  }
];

async function initMap() {
  // LOCATION
  const position = { lat: 40.4194165, lng: -3.6897175 };
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  // MAP
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    styles: googleMapStyle,
    mapTypeControl: false,
  });

  // MARKER LOCATION
  const marker = new Marker({
  position: position,
  map: map,
  title: "Los Pollos Hermanos",
  icon: {
    url: "src/images/header/lph-logo.png",
    scaledSize: new google.maps.Size(40, 40),
  }
});

}

initMap();


// MODAL CALCULATOR MENU
document.getElementById("openModalBtn").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "flex";
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
});

function loadMenu() {
  const container = document.getElementById("menuContainer");

  menu.menuList.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";

    div.innerHTML = `
      <img src="${item.image}" alt="${item.menuName}">
      <div class="menu-info">
        <h4>${item.menuName}</h4>
        <p><strong>${item.menuPrice.toFixed(2)} €</strong></p>
      </div>
      <div class="menu-quantity">
        x <input type="number" min="0" value="0" data-price="${item.menuPrice}">
      </div>
    `;

    container.appendChild(div);
  });

  container.addEventListener("input", calculateTotal);
}

function calculateTotal() {
  const inputs = document.querySelectorAll("input[type='number']");
  let subtotal = 0;

  inputs.forEach(input => {
    const quantity = parseInt(input.value) || 0;
    const price = parseFloat(input.dataset.price);
    subtotal += quantity * price;
  });

  const total = subtotal;
  document.getElementById("totalPrice").textContent = total.toFixed(2);
}

loadMenu();
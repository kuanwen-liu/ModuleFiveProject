// CSS Font Loading api
let font = new FontFace("Libre Baskerville", "url(https://fonts.gstatic.com/s/librebaskerville/v4/pR0sBQVcY0JZc_ciXjFsK8j0T1k_tV7QYhgnOhA2764.woff2) format('woff2'), url(https://fonts.gstatic.com/s/librebaskerville/v4/pR0sBQVcY0JZc_ciXjFsK5gtRqbDAavNCEBluaoIIJc.woff) format('woff')");

font.load().then(function(loadedFont) {
    document.fonts.add(loadedFont);
    document.querySelector('body').style.fontFamily = "Libre Baskerville";
});

// google maps api function
function initMap() {
  let map1, map2, map3, map4;
  // get latitude and longitude
  let hotel1 = {
    lat: 11.9603037,
    lng: 121.9262782
  };
  let hotel2 = {
    lat: 9.549038,
    lng: 123.7743402
  };
  let hotel3 = {
    lat: 10.1957416,
    lng: 118.8991075
  };
  let hotel4 = {
    lat: 11.9609718,
    lng: 121.9251152
  };

  // create map objects
  map1 = new google.maps.Map(document.getElementById('map1'), {
    center: hotel1,
    zoom: 15
  });

  map2 = new google.maps.Map(document.getElementById('map2'), {
    center: hotel2,
    zoom: 15
  });

  map3 = new google.maps.Map(document.getElementById('map3'), {
    center: hotel3,
    zoom: 15
  });

  map4 = new google.maps.Map(document.getElementById('map4'), {
    center: hotel4,
    zoom: 15
  });

  // create marker objects
  let marker1 = new google.maps.Marker({position:hotel1, map:map1});
  let marker2 = new google.maps.Marker({position:hotel2, map:map2});
  let marker3 = new google.maps.Marker({position:hotel3, map:map3});
  let marker4 = new google.maps.Marker({position:hotel4, map:map4});
};


// main class object
class RentalProperty {
    // constructor
    constructor(name, about, price, rating, location, rooms, availability, features) {
        this.name = name;
        this.about = about;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.rooms = rooms;
        this.availability = availability;
        this.features = features;
    }
    // getter methods
    getName() {
        return 'Hotel Name: ' + this.name;
    }
    getAbout() {
        return this.about;
    }
    getPrice() {
        return this.price;
    }
    getRating() {
        return this.rating;
    }
    getLocation() {
        return 'Location: ' + this.location;
    }
    getRooms() {
        return 'Rooms: ' + this.rooms;
    }
    getAvailability() {
        return 'Available Rooms: ' + this.availability;
    }
    getFeatures() {
        return 'Room Features: ' + this.features;
    }
}

//create a sub class name SpecialRate that inherits from RentalProperty
class SpecialRate extends RentalProperty {
    constructor(name, about, price, rating, location, rooms, availability, features, specialR) {
        // use super to initialize those properties in the main class
        super(name, about, price, rating, location, rooms, availability, features);
        this.specialR = specialR;
    }
    getSpecialR() {
        return this.specialR;
    }
}

//create a sub class name SuperHost that inherits from RentalProperty
class SuperHost extends RentalProperty {
    constructor(name, about, price, rating, location, rooms, availability, features, hostRating) {
        // use super to initialize those properties in the main class
        super(name, about, price, rating, location, rooms, availability, features);
        this.hostRating = hostRating;
    }
    getHostRating() {
        return 'Host Rating: ' + this.hostRating;
    }
}

// create some variable assign hotel information
let hotelAbout1 = 'Le Soleil de Boracay Hotel is conveniently located in the popular Station 2 area. The hotel offers a wide range of amenities and perks to ensure you have a great time. To be found at the hotel are free Wi-Fi in all rooms, 24-hour front desk, 24-hour room service, express check-in/check-out, luggage storage. Guestrooms are fitted with all the amenities you need for a good night\'s sleep. In some of the rooms, guests can find non smoking rooms, air conditioning, wake-up service, desk, mini bar. The hotel\'s peaceful atmosphere extends to its recreational facilities which include private beach, fitness center, outdoor pool, massage, garden. No matter what your reasons are for visiting Boracay Island, Le Soleil de Boracay Hotel will make you feel instantly at home.';
let hotelAbout2 = 'Dip into one of the 3 outdoor swimming pools or enjoy other recreational amenities, which include a fitness center.The rooms have a flat-screen TV. Some rooms include a seating area to relax in after a busy day. The rooms are equipped with a private bathroom. Extras include free toiletries and a hair dryer.Grab a bite to eat at the resort\'s restaurant, where you can take in a pool view, or stay in and take advantage of room service (during limited hours). Relax with a refreshing drink from a bar/lounge or one of the 3 poolside bars.';
let hotelAbout3 = 'A destination consecutively named as World’s Best Island located in the Western part of the tropical island of the Philippines, Daluyon Beach and Mountain Resort, is a luxury eco/green resort and private beach resort offering luxurious beachfront cabanas with all contemporary comforts of a home.​​ <br />Daluyon Beach and Mountain Resort is located in a prime location, providing everyone the opportunity to explore, as it is home of the UNESCO World Heritage Site and one of the New 7 Wonders of Nature – The Puerto Princesa Subterranean River National Park.';
let hotelAbout4 = 'Boracay Uptown is a beach front resort located in Boracay Island, Philippines and is four kilometres from Diniwid Beach and eight kilometres from Godofredo P. Ramos Airport. The resort offers guests in-room air-conditioning and water sports activities. <br /> The colourful rooms come with mini bars, flat-screen TVs, and electric kettles. There are also en suite bathrooms, toiletries and safes. <br /> Amenities include a 24-hour reception, laundry and airport shuttle services for a charge, as well as a concierge and a tour desk. There\'s also an outdoor pool with panoramic ocean views and a sun deck.';

// instantiate new object
let boracayHotel = new RentalProperty('Hotel Le Soliel De Boracay', hotelAbout1, 120, 8, 'Balabag, Boracay Island', 10, 1, 'Free WiFi, Air Conditioned, TV, Pool, and Spa');

let hennanResort = new RentalProperty('Henann Resort Alona Beach', hotelAbout2, 160, 8.9, 'Panglao Island', 30, 6, 'Free WiFi, Air Conditioned, TV, Pool, and Gym');

let palawanHotel = new SpecialRate('Daluyon Beach and Mountain Resort', hotelAbout3, 155, 8.7, 'Puerto Princesa, Palawan Island', 15, 4, 'Free WiFi, TV, Pool, and Spa', 0.8);

let uptownHotel = new SuperHost('Boracay Uptown', hotelAbout4, 107, 8, 'Balabag, Boracay Island', 20, 11, 'Free WiFi, Pets, Air Conditioned, Pool, and Spa', 9.5);

// get HTML elements
let h2 = document.querySelectorAll('h2');
let about = document.querySelectorAll('.about');
let infoBtn = document.querySelectorAll('.infoBtn');
let mapBtn = document.querySelectorAll('.mapBtn');
let p = document.querySelectorAll('p');



// Display Fitst Property
h2[0].innerHTML = boracayHotel.getName();

//the event when click button displays the description
infoBtn[0].addEventListener('click', function() {

    p[0].innerHTML = 'Price: ' + boracayHotel.getPrice() + '<br />' +
        'Rating: ' + boracayHotel.getRating() + '/10<br />' +
        boracayHotel.getLocation() + '<br />' +
        boracayHotel.getRooms() + '<br />' +
        boracayHotel.getFeatures() + '<br />' +
        '<button class="btn1 btn btn-primary">Available Rooms</button>';

    let btn = document.querySelector('.btn1');

    //Displays the availability
    btn.addEventListener('click', function() {
        p[1].innerHTML = boracayHotel.getAvailability();
    });

});

// display about the hotel
about[0].addEventListener('click', function() {
    p[0].innerHTML = boracayHotel.getAbout();
    p[1].innerHTML = '';
});


// Display Second Property
h2[1].innerHTML = hennanResort.getName();

//the event when click button displays the description
infoBtn[1].addEventListener('click', function() {

    p[2].innerHTML = 'Price: ' + hennanResort.getPrice() + '<br />' +
        'Rating: ' + hennanResort.getRating() + '/10<br />' +
        hennanResort.getLocation() + '<br />' +
        hennanResort.getRooms() + '<br />' +
        hennanResort.getFeatures() + '<br />' +
        '<button class="btn2 btn btn-primary">Available Rooms</button>';

    let btn = document.querySelector('.btn2');

    //Displays the availability
    btn.addEventListener('click', function() {
        p[3].innerHTML = hennanResort.getAvailability();
    });

});

// display about the hotel
about[1].addEventListener('click', function() {
    p[2].innerHTML = hennanResort.getAbout();
    p[3].innerHTML = '';
});




// Display Third Property
h2[2].innerHTML = palawanHotel.getName();

//the event when click button displays the description
infoBtn[2].addEventListener('click', function() {
    let value = 100 - (100 * palawanHotel.getSpecialR());

    p[4].innerHTML = 'Price: ' + palawanHotel.getPrice() * palawanHotel.getSpecialR() + '<span>Original Price: ' + palawanHotel.getPrice() + '</span><span> Discount: ' + value + '% OFF </span><br />' +
        'Rating: ' + palawanHotel.getRating() + '/10<br />' +
        palawanHotel.getLocation() + '<br />' +
        palawanHotel.getRooms() + '<br />' +
        palawanHotel.getFeatures() + '<br />' +
        '<button class="btn3 btn btn-primary">Available Rooms</button>';

    let btn = document.querySelector('.btn3');

    //Displays the availability
    btn.addEventListener('click', function() {
        p[5].innerHTML = palawanHotel.getAvailability();
    });

});

// display about the hotel
about[2].addEventListener('click', function() {
    p[4].innerHTML = palawanHotel.getAbout();
    p[5].innerHTML = '';
});


// Display Fourth Property
h2[3].innerHTML = uptownHotel.getName();

//the event when click button displays the description
infoBtn[3].addEventListener('click', function() {

    p[6].innerHTML = 'Price: ' + uptownHotel.getPrice() + '<br />' +
        'Rating: ' + uptownHotel.getRating() + '/10<br />' +
        uptownHotel.getLocation() + '<br />' +
        uptownHotel.getRooms() + '<br />' +
        uptownHotel.getFeatures() + '<br />' +
        uptownHotel.getHostRating() + '<br />' +
        '<button class="btn4 btn btn-primary">Available Rooms</button>';

    let btn = document.querySelector('.btn4');

    //Displays the availability
    btn.addEventListener('click', function() {
        p[7].innerHTML = uptownHotel.getAvailability();
    });

});

// display about the hotel
about[3].addEventListener('click', function() {
    p[6].innerHTML = uptownHotel.getAbout();
    p[7].innerHTML = '';
});

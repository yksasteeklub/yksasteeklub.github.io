let review_content = document.querySelector(".reviews");
let key_back = document.querySelector(".key-back");
let key_next = document.querySelector(".key-next");

let data = [
  {
    name: "Negat",
    avatar:
      "https://i1.sndcdn.com/artworks-xld5lLClKqURslHF-XgFUzw-t500x500.jpg",
    review:
      '"Vitun paska serveri, kokoajan holokausteja, olen mutella aina. 0/5!"',
  },
  {
    name: "SharpSX",
    avatar: "../kuvat/icofix.png",
    review:
      '"Itsehän olen moderaattori kyseisellä serverillä, joten oma mp on 5/5, mut ei oo ihan niin 5/5 mut ei oo ihan täys 5/5 mut on 5/5"',
  },
  {
    name: "ETSKA_",
    avatar: "https://avatars.githubusercontent.com/u/51335321?v=4",
    review: '"Vitun kyrvät vetäkää käteen teiän pingien kanssa!!"',
  },
  {
    name: "Koze",
    avatar:
      "https://cdn.discordapp.com/attachments/844238966152888381/914568396291575909/11393072_10207029210395650_8988498390013272154_n.jpg",
    review: '"millo se mun dragon lore saatana ku annoin suihin perkele"',
  },
  {
    name: "Aatu",
    avatar:
      "https://cdn.discordapp.com/attachments/812654337775763507/914586566087835698/adolf-hitler.jpg",
    review:
      '"Joo elikkäs nyt tulisi vähän rankempaa tekstiä. Voisitteko vittu rauhoittua? Ymmärrän toisaalta sokerihumalan mutta oikeasti, herra varjele mitä pentuja koko palvelin täynnä."',
  },
  {
    name: "Roplays",
    avatar: "../kuvat/roplays.png",
    review: '"Pls boobs"',
  },
  {
    name: "Gyyppi",
    avatar: "../kuvat/amogus.png",
    review: '"卐"',
  },
  {
    name: "Riihi Pizzeria",
    avatar:
      "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/be/bef9f2e32c531942c3cc38b50af1c704f45b6978_full.jpg",
    review:
      '"Vittu teidan kansa, aina hairitse meita soita pilapuhelu joka paiva. Sina levitaa propaganda meidan koogle sivuilamme. Poliisit on soitettu ja tama ei jaa tahan. "',
  },
  {
    name: "Angela",
    avatar: "../kuvat/angela-logo.png",
    review:
      '"Meidän pizzeria parempi kuin Anfora. Aito pizza valmistettu suoraan Italia. Älä soita enää pilapuhelu."',
  },
  {
    name: "Lyseon Koulu",
    avatar: "../kuvat/lyseo.png",
    review:
      '"Kuka perkele DDoSSaa ja skannnaa MLIedu_mobile nettiä kokoajan. Saatana ei toimi netti ei sitten yhtään, kun pitäis laittaa parit wilma viestit vielä, mutta ku joku j0nne luulee olevansa niin hauska, niin ei sekään onnistu."',
  },
  {
    name: "Tero Höylä",
    avatar:
      "../kuvat/paappanen.jpg",
    review:
      '"Hoka helevetin päivä pittää palvelinta huoltaa ja tehdä vianmäärityksiä."',
  },
];

let random_r;
let random = Math.floor(Math.random() * data.length);
let date = new Date().getFullYear();

if (key_back && key_next) {
  window.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".yearNow").innerHTML =
      "Copyright © 1ST CLUB 2020 - " +
      date +
      ' All rights reserved <br><br>design by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">roplays</a> 2021';
    showPerson(random);
  });

  key_back.onclick = () => {
    random_r = Math.floor(Math.random() * data.length);
    showPerson(random_r);
  };
  key_next.onclick = () => {
    random_r = Math.floor(Math.random() * data.length);
    showPerson(random_r);
  };

  function showPerson(person) {
    let item = data[person];
    review_content.innerHTML =
      "<img src=" +
      item.avatar +
      ">" +
      "<br></br>" +
      item.name +
      "<br></br>" +
      item.review;
  }
} else {
  window.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".yearNow").innerHTML =
      "Copyright © 1ST CLUB 2020 - " +
      date +
      ' All rights reserved <br><br>Design by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">roplays<a/> 2021';
  });
}

var path;
var song = document.getElementById("taustamusic");
var images = ["sound_off.png", "sound_on.png"];
var imgState = 0;
var imgTag = document.getElementById("on-off");

imgTag.addEventListener("click", function (event) {
  if (window.location.pathname.includes("index.html")) {
    path = "kuvat/";
  } else {
    path = "../kuvat/";
  }
  imgState = ++imgState % images.length;
  event.target.src = path + images[imgState];
});

function togglePlayPause() {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}

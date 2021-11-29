window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}
px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
tail = 5;
function game() {
        px += xv;
    py += yv;
    if (px < 0) px = tc - 1;
    if (px > tc - 1) px = 0;
    if (py < 0) py = tc - 1;
    if (py > tc - 1) py = 0;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == px && trail[i].y == py) {
            tail = 5;
        }
    }
    trail.push({
        x: px,
        y: py
    });
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax == px && ay == py) {
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xv=-1;yv=0;
            break;
        case 38:
            xv=0;yv=-1;
            break;
        case 39:
            xv=1;yv=0;
            break;
        case 40:
            xv=0;yv=1;
            break;
    }
}

let review_content = document.querySelector(".reviews")
let key_back = document.querySelector(".key-back")
let key_next = document.querySelector(".key-next")

let data = [
    {
        name: 'Negat',
        avatar: 'https://i1.sndcdn.com/artworks-xld5lLClKqURslHF-XgFUzw-t500x500.jpg',
        review: '"Vitun paska serveri, kokoajan holokausteja, olen mutella aina. 0/5!"'
    },
    {
        name: 'SharpSX',
        avatar: 'https://lh3.googleusercontent.com/HobxEgUh9zVin2VjIYK8C_ltgX68XZFHOMmfU00gyZWf8qFYNv8GVvHxuECQGGJ-FeG4=s85',
        review: '"Itsehän olen moderaattori kyseisellä serverillä, joten oma mp on 5/5"'
    },
    {

        name: 'ETSKA_',
        avatar: 'https://lh3.googleusercontent.com/57bqYcHBeLzBoM5JYqKSz05B6w4XBIfxOVv0JnqH7xZwRo5epxs8d01gJweQ59s_8TLS=s85',
        review: '"Vitun kyrvät vetäkää käteen teiän pingien kanssa!!"'
    },
    {

        name: 'Koze',
        avatar: 'https://cdn.discordapp.com/attachments/844238966152888381/914568396291575909/11393072_10207029210395650_8988498390013272154_n.jpg',
        review: '"millo se mun dragon lore saatana ku annoin suihin perkele"'
    },
    {
        name: 'Aatu',
        avatar: 'https://cdn.discordapp.com/attachments/812654337775763507/914586566087835698/adolf-hitler.jpg',
        review: '"Joo elikkäs nyt tulisi vähän rankempaa tekstiä. Voisitteko vittu rauhoittua? Ymmärrän toisaalta sokerihumalan mutta oikeasti, herra varjele mitä pentuja koko palvelin täynnä."'
    },
    {
        name: 'Roplays',
        avatar: 'kuvat/roplays.png',
        review: '"Pls boobs"'
    },
    {
        name: 'Gyyppi',
        avatar: 'https://i.pinimg.com/originals/bc/07/40/bc0740ebf3ff7464c6086a9096f0e010.jpg',
        review: '"卐"'
    },
]

let random_r;
let random = Math.floor(Math.random() * data.length);

window.addEventListener("DOMContentLoaded", function () {
    showPerson(random)
})

key_back.onclick = () => {
    random_r = Math.floor(Math.random() * data.length);
    showPerson(random_r);
}
key_next.onclick = () => {
    random_r = Math.floor(Math.random() * data.length);
    showPerson(random_r);
}

function showPerson(person) {
    let item = data[person]
    review_content.innerHTML = "<img src=" + item.avatar + ">" + "<br></br>" + item.name + "<br></br>" + item.review;
}

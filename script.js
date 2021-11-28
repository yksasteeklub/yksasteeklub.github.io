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
        avatar: 'kuvat/icofix.png',
        review: '"Itsehän olen moderaattori kyseisellä serverillä, joten oma mp on 5/5"'
    },
    {
        name: 'ETKSA_',
        avatar: 'https://lh3.googleusercontent.com/57bqYcHBeLzBoM5JYqKSz05B6w4XBIfxOVv0JnqH7xZwRo5epxs8d01gJweQ59s_8TLS=s85',
        review: '"Vitun kyrvät vetäkää käteen teiän pingien kanssa!!"'
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

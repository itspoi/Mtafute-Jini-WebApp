// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯


import {monsters} from "./monsters.js"

for (let mosterdiv of monsters){
    mon(mosterdiv);
}

function mon(mosterdiv) {
    const monster = document.createElement('div');
    monster.className = 'monster';

    const img = document.createElement('img');
    img.src = `https://robohash.org/${mosterdiv.id}?set=set2`;
    img.alt = "Jini Gumba";

    const mname = document.createElement("p");
    mname.className = 'name';
    mname.innerText = `${mosterdiv.name}`;

    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = `${mosterdiv.email}`;

    monster.append(img, mname, email);

    document.querySelector('.monsters').append(monster);

    console.log(monster);
};


notFound();

function notFound() {
    const notFoundDiv = document.createElement("div");
    notFoundDiv.className = "p-5 not-found";
    notFoundDiv.style.display = "none";

    const nFspan = document.createElement("span");
    nFspan.innerText = "404";

    const h1 = document.createElement("h1");
    h1.innerHTML = "🧟‍♂️ No Monster Found 🧟‍♂️";

    notFoundDiv.append(nFspan, h1);

    document.querySelector(".monster").append("h1");
};



// <div class="p-5 not-found" style="display: none">
// <span>404</span>
// <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
// </div>
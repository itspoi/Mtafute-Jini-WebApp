// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯


import { monsters } from "./monsters.js"

for (let mosterdiv of monsters) {
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

    document.querySelector(".monsters").append("notFoundDiv");
    console.log(notFoundDiv);


};



// <div class="p-5 not-found" style="display: none">
// <span>404</span>
// <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
// </div>


//SEARCH IMPLEMENT
document.querySelector("#search-monster").addEventListener('keyup', function (e) {
    const keyword = e.target.value.toLowerCase();
    console.log(e);
    console.log(keyword);

    const findmonster = document.querySelectorAll(".monster");

    for (let monster of findmonster) {

        const name = monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();
        console.log(monster.children);
            if (name.inlcudes(keyword) || email.includes(keyword)) {
                monster.style.display = 'block';
                notFound = false;

            } else { 
                monster.style.display = 'none' };

        
    };

    let notFound =true;
    if (notFound) {
                document.querySelector('.not-found').style.display = 'block'

            } else { 
                document.querySelector('.not-found').style.display = 'none'};

});
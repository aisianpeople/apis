const residentContainer = document.querySelector('#resident-container');
const button = document.querySelector('button');

const alderaanAPI = 'https://swapi.dev/api/planets/2/';

const alderaanCallback = ({ data: alderaan }) => findResidents(alderaan);
const residentCallback = ({ data: resident }) => createResidentCard(resident);
const errCallback = err => console.log(err);

const getAlderaan = () => axios.get(alderaanAPI).then(alderaanCallback).catch(errCallback);
const getResident = (person) => axios.get(person).then(residentCallback).catch(errCallback);

const getResidents = (evnt) => {
    evnt.preventDefault();
    console.log('Button Clicked');

    getAlderaan();
}

const createResidentCard = (resident) => {
    console.log('Creating resident card.');

    const residentCard = document.createElement('div');
    residentCard.classList.add('resident-card');

    residentCard.innerHTML = `<h2 class="name">${resident.name}</h2>`;

    residentContainer.appendChild(residentCard);
}

const findResidents = (ald) => {
    console.log('Finding residents.');
    console.log(ald);
    const res = ald.residents

    residentContainer.innerHTML = ``;
    
    for (let i = 0; i < res.length; i++) {
        console.log('Finding resident.');
        console.log(res[i]);
        getResident(res[i]);
    }
}

button.addEventListener('click', getResidents);
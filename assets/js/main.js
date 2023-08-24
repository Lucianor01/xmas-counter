//? ELEMENTI NEL DOM
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const panel = document.querySelector('.panel');

function timer(data) {
    // Creo un oggetto Date per la data di Natale dell'anno corrente
    const dataNatale = new Date(data.getFullYear(), 11, 25);

    // Calcolo la differenza in millisecondi tra la data corrente e la data di Natale
    const diff = dataNatale - data


}
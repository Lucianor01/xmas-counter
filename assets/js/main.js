//? ELEMENTI NEL DOM
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const panel = document.querySelector('.panel');

function timer() {

    // Data corrente
    const oggi = new Date();

    // Creo un oggetto Date per la data di Natale dell'anno corrente
    const dataNatale = new Date(oggi.getFullYear(), 11, 25);

    // Calcolo la differenza in millisecondi tra la data corrente e la data di Natale
    const diff = dataNatale - oggi

    // Calcolo il numero di giorni dalla differenza in millisecondi
    const giorniMancanti = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Calcolo le ore rimanenti
    const oreMancanti = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Calcolo i minuti rimanenti
    const minutiMancanti = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    // Calcolo i secondi rimanenti
    const secondiMancanti = Math.floor((diff % (1000 * 60)) / 1000);

    // console.log(giorniMancanti);

    if (diff > 0) {

        // Stampo i giorni mancanti
        days.innerHTML = giorniMancanti;
        // Stampo le ore mancanti
        hours.innerHTML = oreMancanti;
        // Stampo i minuti mancanti
        minutes.innerHTML = minutiMancanti;
        // Stampo i secondi mancanti
        seconds.innerHTML = secondiMancanti;

    } else {
        clearInterval(interval); // Arresto l'aggiornamento del contatore
        panel.innerHTML = `"<h1 class="mb-0">Buon Natale!🎅🏻</h1>"`;
    }

}

// Eseguo la funzione timer ogni secondo
const interval = setInterval(timer, 1000);
let boxContainer = document.querySelector ('.list');
for (let n = 0; n <= 100; n++) {

    let scritta;

    if ( n % 3 === 0 ) {
        scritta = 'Fizz';
    } 
    else if ( n % 5 === 0 ) {
        scritta = 'Buzz';
    }
    else{
        scritta = n;
    }


    const items = `
        <li class="box">${scritta}</li>
    `;


    boxContainer.innerHTML += items;
}

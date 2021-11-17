let boxContainer = document.querySelector ('.list');
for (let n = 1; n <= 100; n++) {

    let scritta;
    let color;

    if ( (n % 3 === 0) && (n % 5 === 0) )   {
        scritta = 'fizzbuzz';
        color = 'red';
    } 
    else if ( n % 3 === 0 ) {
        scritta = 'Fizz';
        color = 'yellow';
    } 
    else if ( n % 5 === 0 ) {
        scritta = 'Buzz';
        color = 'green';
    }
    else{
        scritta = n;
        color = '';
    }


    const items = `
        <li class="box ${color}">${scritta}</li>
    `;

    

    boxContainer.innerHTML += items;
}

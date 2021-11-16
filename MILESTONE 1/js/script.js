
for (let n = 0; n <= 10; n++) {

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

    console.log(scritta);
}

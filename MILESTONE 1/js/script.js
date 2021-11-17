
for (let n = 1; n <= 100; n++) {

    let scritta;

    if ( (n % 3 === 0) && (n % 5 === 0) )   {
        scritta = 'fizzbuzz';
        
    }
    else if ( n % 3 === 0 ) {
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

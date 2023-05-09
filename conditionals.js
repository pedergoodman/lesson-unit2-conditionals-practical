// road trip planner
let seatsInCar = 7;
let passengers = 5;
let infants = 1;
let infantSeats = 1;
let fullTank = true;

// check that there's enough room for passengers

if( seatsInCar >= passengers && infantSeats >= infants ){
    console.log('ready for road trip');
    if( fullTank  ){
        console.log('Tank is full');
    }
    else{
        console.log('Fill up before you leave');
    } // end fullTank
} // end enough seats
else {
    console.log( 'not ready. check car, passengers, and equipment' );
} // end not enough seats 


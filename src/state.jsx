import React from 'react';
import { render } from 'react-dom';

 
    let amountDue = this.state.amountDue;
    let amountReceived = this.state.amountReceived;
    let change = (amountReceived - amountDue).toFixed(2);

    let twenty = 20.00;  
    let ten = 10.00;  
    let five = 5.00;
    let dollar = 1.00;
    let quarter = 0.25;
    let dime = 0.10;
    let nickel = 0.05;
    let cent = 0.01;
 
    let twenties = Math.floor(change / twenty);
    let tens = Math.floor(((change % twenty).toFixed(2)) / ten);
    let fives = Math.floor(((((change % twenty).toFixed(2)) % ten).toFixed(2)) / five);
    let dollars = Math.floor(((((((change % twenty).toFixed(2)) % ten).toFixed(2)) % five).toFixed(2)) / dollar);
    let quarters = Math.floor(((((((((change % twenty).toFixed(2)) % ten).toFixed(2)) % five).toFixed(2)) % dollar).toFixed(2)) / quarter);
    let dimes = Math.floor(((((((((((change % twenty).toFixed(2)) % ten).toFixed(2)) % five).toFixed(2)) % dollar).toFixed(2)) % quarter).toFixed(2)) / dime);
    let nickels = Math.floor(((((((((((((change % twenty).toFixed(2)) % ten).toFixed(2)) % five).toFixed(2)) % dollar).toFixed(2)) % quarter).toFixed(2)) % dime).toFixed(2)) / nickel);
    let pennies = Math.floor(((((((((((((((change % twenty).toFixed(2)) % ten).toFixed(2)) % five).toFixed(2)) % dollar).toFixed(2)) % quarter).toFixed(2)) % dime).toFixed(2)) % nickel).toFixed(2)) / cent);

        console.log(twenties);
        console.log(tens);
        console.log(fives);
        console.log(twenties);
        console.log(dollars);
        console.log(quarters);
        console.log(dimes);
        console.log(nickels);
        console.log(pennies);

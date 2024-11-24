import {formatCurrency} from '../script/utils/money.js';


console.log('test suite : formatCurrency');
console.log('convert cents into dollars');

if(formatCurrency(2095) === '20.95'){
    console.log('passed');
}
else{
    console.log('Failed');
}
console.log('it works with 0');

if(formatCurrency(0) === '0.00'){
    console.log('passed');
}
else{
    console.log('Failed');
}
console.log('rounds up to the nearest cent');
if(formatCurrency(2000.5) === '20.01'){
    console.log('passed');
}
else{
    console.log('Failed');
}
expr = '/23*76+97';

try{
    console.log('try block');
    console.log(eval(expr));//error
}

catch{
    console.log('catch block');
    console.log('error');
    expr = '23*76+97';
    console.log(eval(expr));
}

finally{
    console.log('finally block');
    console.log('takkitikki');
}
console.log('Data Transmitted:' + eval(expr));
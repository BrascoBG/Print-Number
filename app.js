function number(arg1){
    let num = parseInt(arg1);

    if(num == 1){
        console.log('One');
    }
    else if(num == 2){
        console.log('Two');
    }
    else if(num == 3){
        console.log('Three');
    }
    else if(num == 4){
        console.log('Four');
    }
    else if(num == 5){
        console.log('Five');
    }
    else if (num > 5){
        console.log('The number is too big!');
    }
}
number(8);

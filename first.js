function display(val){

    document.getElementById('result').value += val

    return val

}
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
function clearScreen(){

    document.getElementById('result').value = ''

}

































// let a=document.getElementById("display").innerHTML;
// document.write(a);
// console.log(a);


// function display(val){

//     document.getElementById('result').value += val

//     return val

// }

// function solve(){

//     let x = document.getElementById('result').value

//     let y = eval(x);

//     document.getElementById('result').value = y

//     return y

// }
// function clearScreen(){

//     document.getElementById('result').value = ''

// }


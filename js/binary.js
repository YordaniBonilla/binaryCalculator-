/*add operators */

let addSign = () => {
    document.getElementById("res").innerHTML += '+';
}

let subSign = () => {
    document.getElementById("res").innerHTML += '-';
}

let multSign = () => {
    document.getElementById("res").innerHTML += '*';
}

let divSign = () => {
    document.getElementById("res").innerHTML += '/';
}
let addZero = () => document.getElementById('res').innerHTML += 0;


let addOne = () => document.getElementById('res').innerHTML += 1;


/*reset res div*/

let reset = () => {
    document.getElementById('res').innerHTML = '';
}

/* Calculations*/

let calculate = (res) => {
    let c = document.getElementById(res).innerHTML.match(/(\d+\*)|(\d+\/)|(\d+\+)|(\d+\-?)/g);
    let answer = 0;
    if (c[0][c[0].length - 1] === '*') {
        answer = (parseInt(c[0].slice(0, -1), 2) * parseInt(c[1], 2)).toString(2)
    } else if (c[0][c[0].length - 1] === '/') {
        answer = (parseInt(c[0].slice(0, -1), 2) / parseInt(c[1], 2)).toString(2)
    } else if (c[0][c[0].length - 1] === '+') {
        answer = (parseInt(c[0].slice(0, -1), 2) + parseInt(c[1], 2)).toString(2)
    } else if (c[0][c[0].length - 1] === '-') {
        answer = (parseInt(c[0].slice(0, -1), 2) - parseInt(c[1], 2)).toString(2)
    }

    document.getElementById('res').innerHTML = answer;
}

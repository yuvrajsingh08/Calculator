
let input = document.querySelector('h1');
let buttons = document.querySelectorAll('button');
let k = document.querySelector('.k');
console.dir(k);
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.innerText = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.innerText = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.innerText = string;
        }
        else{
            string += e.target.innerHTML;
            input.innerText = string;
        }
        
    })
})

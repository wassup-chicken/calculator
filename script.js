let pre = '';
let post = '';
let oper = '';
let operand = ['+', '*', '/', '-'];

document.addEventListener("keydown", (e) => {
    if (Number(e.key) <= 9) {
    
        if (!oper) {
            pre += e.key;
            document.getElementById("screen").innerHTML = pre;
        } else {      
            post += e.key;
            document.getElementById("screen").innerHTML = post;        
        }
        }
        
        if (operand.includes(e.key)) {
            oper += e.key;
            if (post) {
                pre = operate(Number(pre), Number(post), oper.charAt(oper.length -2));
                document.getElementById("screen").innerHTML = pre;
                post = '';
            }
        };

        if (e.key === 'Enter') {
            let results = operate(Number(pre), Number(post), oper.charAt(oper.length -1));
            if (results) {
            document.getElementById("screen").innerHTML = results;
            reset();
            };
        };

        if (e.key === 'Escape') {
            reset();
            clear();
        };

});

document.addEventListener("click", (e) => {
    if (e.target.dataset.key !== undefined) {
        if (Number(e.target.dataset.key) <= 9) { 
            if (!oper) {
                pre += e.target.dataset.key;
                document.getElementById("screen").innerHTML = pre;
            } else {      
                post += e.target.dataset.key;
                document.getElementById("screen").innerHTML = post;        
            }
        };

        if (operand.includes(e.target.dataset.key)) {
            oper += e.target.dataset.key;
            if (post) {
                pre = operate(Number(pre), Number(post), oper.charAt(oper.length -2));
                document.getElementById("screen").innerHTML = pre;
                post = '';
            }
        };

    
    
        if (e.target.dataset.key === 'Enter') {
            let results = operate(Number(pre), Number(post), oper.charAt(oper.length -1));
            if (results) {
                document.getElementById("screen").innerHTML = results;
                reset();
            };
        };

        if (e.target.dataset.key === '27') {
            reset();
            clear();
        };
    };


    
});


const reset = () => {
    pre = '';
    post = '';
    oper = '';
};

const clear = () => {
    document.getElementById("screen").innerHTML = 0;
}


const operate = (num1, num2, operator) => {
    let answer;
    switch (operator) {
        case '+':
            answer = add(num1, num2);
            break;
        case '-':
            answer = subtract(num1, num2);
            break;
        case '*':
            answer = multiply(num1, num2);
            break;
        case '/':
            answer = divide(num1, num2);
            break;
    }

    return answer;
}

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}
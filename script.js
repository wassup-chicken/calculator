let pre;
let post;
let oper = '';
let operand = ['+', '*', '/', '-'];
let output = '';

document.addEventListener("keydown", (e) => {
    if (Number(e.key) <= 9 || operand.includes(e.key)) { 
    output += e.key
    document.getElementById("screen").innerHTML = output;

    if (operand.includes(e.key)) {
        console.log(!pre);
        if (!pre) {
        pre = Number(output.slice(0, -1));
        oper = e.key;
        output = '';
        } else {
            pre = operate(pre, Number(output.slice(0, -1)), e.key);
            oper = e.key;
            output = '';
        }
    }
    }

    if (e.key === 'Enter') {
        if (output) {
                getAnswer(output);
            }
    };

    if (e.key === 'Escape') {
        reset();
    };

});

document.addEventListener("click", (e) => {
    if (e.target.dataset.key !== undefined) {
        if (Number(e.target.dataset.key) <= 9 || operand.includes(e.target.dataset.key)) { 
            output += e.target.dataset.key
            document.getElementById("screen").innerHTML = output;
        
            if (operand.includes(e.target.dataset.key)) {
                console.log(!pre);
                if (!pre) {
                pre = Number(output.slice(0, -1));
                oper = e.target.dataset.key;
                output = '';
                } else {
                    pre = operate(pre, Number(output.slice(0, -1)), e.target.dataset.key);
                    output = '';
                }
            }
            }


    
    if (e.target.dataset.key === 'Enter') {
        if (output) {
            getAnswer(output);
        }
    }


    if (e.target.dataset.key === '27') {
        reset();
    }

    };


    
});


const getAnswer = (output) => {
    post = Number(output);
    output = '';
    const result = operate((pre), (post), oper);
    document.getElementById("screen").innerHTML = result;
}


const reset = () => {
    output = '';
    pre = '';
    post = '';
    oper = '';
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
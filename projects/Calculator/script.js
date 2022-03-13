class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement
    this.previousOperandTextElement = previousOperandTextElement
    this.clear()
}

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1)
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return
        if (this.previousOperand.includes(" =")) calculator.clear()

        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand == "") return

        this.previousOperand = this.currentOperand.toString() + " " + operation.toString() + " ";
        this.currentOperand = "";
    }

    compute() {
        if (this.previousOperand.includes("=") || this.currentOperand == "") return;

        this.previousOperand = this.previousOperand + this.currentOperand + " =";

        if (this.previousOperand.includes("+")) {
        this.currentOperand = parseFloat(this.previousOperand) + parseFloat(this.currentOperand)
        }
        if (this.previousOperand.includes("-")) {
            this.currentOperand = parseFloat(this.previousOperand) - parseFloat(this.currentOperand)
        }
        if (this.previousOperand.includes("*")) {
            this.currentOperand = parseFloat(this.previousOperand) * parseFloat(this.currentOperand)
        }
        if (this.previousOperand.includes("/")) {
            this.currentOperand = parseFloat(this.previousOperand) / parseFloat(this.currentOperand)
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }
}


const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement) 

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

allClearButton.addEventListener("click", () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click", () => {
    calculator.delete()
    calculator.updateDisplay()
})

equalsButton.addEventListener("click", () => {
    calculator.compute()
    calculator.updateDisplay()
})
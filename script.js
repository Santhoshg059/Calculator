document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById('result');
    const buttons = document.querySelectorAll('.buttons button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = this.textContent.trim();
        handleInput(value);
      });
    });
  
    document.addEventListener('keydown', function(event) {
      const key = event.key;
      if (/^[0-9.]$/.test(key)) {
        handleInput(key);
      } else if (['+', '-', '*', '/', '%', 'Enter'].includes(key)) {
        if (key === 'Enter') {
          calculate();
        } else {
          handleInput(key);
        }
      } else if (key === 'Escape') {
        clearInput();
      } else {
        alert('Only numbers and operators (+, -, *, /, %) are allowed');
      }
    });
  
    function handleInput(value) {
      if (/^[0-9.]$/.test(value)) {
        inputField.value += value;
      } else if (value === '=') {
        calculate();
      } else if (value === 'C') {
        clearInput();
      } else {
        inputField.value += value;
      }
    }
  
    function calculate() {
      try {
        const result = eval(inputField.value);
        if (isNaN(result) || !isFinite(result)) {
          alert('Invalid expression');
        } else {
          inputField.value = result;
        }
      } catch (error) {
        alert('Invalid expression');
      }
    }
  
    function clearInput() {
      inputField.value = '';
    }
  });
  
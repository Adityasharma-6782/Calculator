function convert() {
    const input = document.getElementById("inputNumber").value.trim();
    const fromBase = parseInt(document.getElementById("fromBase").value);
  
    let decimalValue;
    try {
      decimalValue = parseInt(input, fromBase);
  
      if (isNaN(decimalValue)) {
        throw new Error("Invalid input for selected base.");
      }
  
      const binary = decimalValue.toString(2);
      const decimal = decimalValue.toString(10);
      const octal = decimalValue.toString(8);
      const hexadecimal = decimalValue.toString(16).toUpperCase();
  
      document.getElementById("result").innerHTML = `
        <p><strong>Binary:</strong> ${binary}</p>
        <p><strong>Octal:</strong> ${octal}</p>
        <p><strong>Decimal:</strong> ${decimal}</p>
        <p><strong>Hexadecimal:</strong> ${hexadecimal}</p>
      `;
    } catch (error) {
      document.getElementById("result").innerHTML =
        `<p style="color:red;">Invalid input or base selected.</p>`;
    }
  }
  
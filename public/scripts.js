function multiply() {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;

  fetch('/multiply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `num1=${num1}&num2=${num2}`,
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerText = `Result: ${data.result}`;
  })
  .catch(error => console.error('Error:', error));
}

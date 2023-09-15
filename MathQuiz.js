<!DOCTYPE html>
<html>
<head>
  <title>Math Quiz Game</title>
</head>
<body>
  <h1>Math Quiz Game</h1>
  <p id="question"></p>
  <input type="text" id="answer" placeholder="Your Answer">
  <button onclick="checkAnswer()">Submit</button>
  <p id="result"></p>
  <p id="score">Score: 0</p>

  <script>
    let score = 0;
    let totalQuestions = 0;

    function generateQuestion() {
      const operators = ['+', '-', '*', '/'];
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const operator = operators[Math.floor(Math.random() * operators.length)];

      let questionText = '';

      switch (operator) {
        case '+':
          questionText = `${num1} + ${num2}`;
          break;
        case '-':
          questionText = `${num1} - ${num2}`;
          break;
        case '*':
          questionText = `${num1} * ${num2}`;
          break;
        case '/':
          // Ensure division results in whole numbers
          num1 *= num2;
          questionText = `${num1} / ${num2}`;
          break;
      }

      totalQuestions++;
      document.getElementById('question').textContent = `Question ${totalQuestions}: ${questionText}`;
    }

    function checkAnswer() {
      const answer = parseFloat(document.getElementById('answer').value);
      const questionText = document.getElementById('question').textContent;

      if (questionText.includes('+')) {
        const [num1, num2] = questionText.split(' + ').map(Number);
        if (answer === num1 + num2) {
          score++;
          document.getElementById('result').textContent = 'Correct!';
        } else {
          document.getElementById('result').textContent = 'Wrong!';
        }
      } else if (questionText.includes('-')) {
        const [num1, num2] = questionText.split(' - ').map(Number);
        if (answer === num1 - num2) {
          score++;
          document.getElementById('result').textContent = 'Correct!';
        } else {
          document.getElementById('result').textContent = 'Wrong!';
        }
      } else if (questionText.includes('*')) {
        const [num1, num2] = questionText.split(' * ').map(Number);
        if (answer === num1 * num2) {
          score++;
          document.getElementById('result').textContent = 'Correct!';
        } else {
          document.getElementById('result').textContent = 'Wrong!';
        }
      } else if (questionText.includes('/')) {
        const [num1, num2] = questionText.split(' / ').map(Number);
        if (answer === num1 / num2) {
          score++;
          document.getElementById('result').textContent = 'Correct!';
        } else {
          document.getElementById('result').textContent = 'Wrong!';
        }
      }

      document.getElementById('score').textContent = `Score: ${score}`;
      generateQuestion();
      document.getElementById('answer').value = '';
    }

    generateQuestion();
  </script>
</body>
</html>

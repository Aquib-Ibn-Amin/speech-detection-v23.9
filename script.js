// Check if the browser supports the Web Speech API
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  const startButton = document.getElementById('startButton');
  const output = document.getElementById('output');

  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() {
    startButton.textContent = 'Listening...';
  };

  recognition.onresult = function(event) {
    const result = event.results[event.results.length - 1][0].transcript;
    output.textContent = result;
  };

  recognition.onend = function() {
    startButton.textContent = 'Start Listening';
  };

  startButton.addEventListener('click', function() {
    if (recognition.running) {
      recognition.stop();
    } else {
      recognition.start();
    }
  });
} else {
  alert('Speech recognition is not supported in this browser.');
}

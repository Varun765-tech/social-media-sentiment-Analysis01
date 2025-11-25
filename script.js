function analyzeSentiment() {
  const text = document.getElementById("userInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (text.length === 0) {
    showResult("Please enter some text!", "😐", "#999");
    return;
  }

  // Sentiment dictionary
  const positive = [
    "good","great","happy","love","excellent","amazing","nice","fantastic","wonderful",
    "superb","enjoy","cool","awesome","beautiful","perfect","positive","brilliant","wow","loved"
  ];

  const negative = [
    "bad","sad","hate","angry","terrible","worst","disappoint","horrible","awful",
    "pain","upset","annoy","boring","poor","negative","broken","disaster"
  ];

  let score = 0;
  const words = text.toLowerCase().split(/\W+/);

  words.forEach(word => {
    if (positive.includes(word)) score++;
    if (negative.includes(word)) score--;
  });

  let sentiment = "Neutral";
  let color = "#7f8c8d";
  let emoji = "😐";

  if (score > 1) {
    sentiment = "Positive";
    color = "#00e676";
    emoji = "😊";
  } 
  else if (score < -1) {
    sentiment = "Negative";
    color = "#ff5252";
    emoji = "😡";
  }

  showResult(sentiment, emoji, color);
}

function showResult(text, emoji, color) {
  const result = document.getElementById("result");
  result.style.display = "block";
  result.style.background = color + "55";
  result.innerHTML = `${text}<div class="emoji">${emoji}</div>`;
}

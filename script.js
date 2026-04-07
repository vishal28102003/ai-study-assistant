function generateContent() {
  const topic = document.getElementById("topic").value;
  const output = document.getElementById("output");

  if (!topic) {
    output.innerHTML = "Please enter a topic.";
    return;
  }

  // 🔥 Instant working output (no API needed)
  output.innerHTML = `
    <h3>${topic}</h3>
    <p><b>Explanation:</b> ${topic} is an important concept that helps students understand core fundamentals in a simple way.</p>
    
    <p><b>Practice Questions:</b></p>
    <ul>
      <li>What is ${topic}?</li>
      <li>Give a real-life example of ${topic}.</li>
      <li>Why is ${topic} important?</li>
    </ul>
  `;
}
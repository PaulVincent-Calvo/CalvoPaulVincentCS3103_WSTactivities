const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordcount');
const sentenceCountDisplay = document.getElementById('sentenceCount');

textInput.addEventListener('input', wordSentenceCount);

function wordSentenceCount(){
  const text = textInput.value.trim();

  const words = text.split(/\s+/).filter(word => word.length > 0);
  wordCountDisplay.textContent = `Words: ${words.length}`;

  const sentences = text.split(/[.!?]\s+/).filter(sentence => sentence.length > 0);
  sentenceCountDisplay.textContent = `Sentences: ${sentences.length}`;
};  
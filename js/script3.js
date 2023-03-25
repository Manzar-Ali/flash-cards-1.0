function generateFlashcards() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e) {
      const fileContent = e.target.result;
      const regex = /(\w+):\s((?:\w+\W+){0,20}(?:\w+)\b)/g;
      let match;
      const flashcards = document.getElementById('flashcards');
      flashcards.innerHTML = '';
      while ((match = regex.exec(fileContent))) {
        const term = match[1];
        const definition = match[2];
        const card = document.createElement('div');
        card.className = 'card';
        const termElement = document.createElement('div');
        termElement.className = 'term';
        termElement.innerText = term;
        const definitionElement = document.createElement('div');
        definitionElement.className = 'definition';
        definitionElement.innerText = definition;
        card.appendChild(termElement);
        card.appendChild(definitionElement);
        flashcards.appendChild(card);
      }
      saveFlashcardsToLocalstorage(flashcards.innerHTML);
    };

}
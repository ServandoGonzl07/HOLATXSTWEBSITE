document.addEventListener("DOMContentLoaded", function() {
    // Select all <p> elements inside elements with class "familia"
    const paragraphs = document.querySelectorAll('.familia1 p,.familia2 p,.familia3 p,.familia4 p, .familia5 p');

    paragraphs.forEach(function(paragraph) {
        // Split the text into words
        const words = paragraph.textContent.split(' ');
        // Build new HTML with <br> after every 8 words
        let newHTML = '';
        words.forEach(function(word, i) {
            newHTML += word + ' ';
            if ((i + 1) % 8 === 0 && i !== words.length - 1) {
                newHTML += '<br>';
            }
        });
        paragraph.innerHTML = newHTML.trim();
    });
});

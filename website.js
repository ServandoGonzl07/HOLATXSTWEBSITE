// Disable automatic scroll restoration if supported
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Make sure to scroll to top on load
window.addEventListener('DOMContentLoaded', function() {
  window.scrollTo(0, 0);
});

// Optionally, also do it before unload for edge cases
window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});

// Fade-in effect for all elements with .fade-in
function fadeInOnScroll() {
  var elements = document.querySelectorAll('.fade-in');
  var windowHeight = window.innerHeight;
  var fadeInTriggered = false;

  elements.forEach(function(element) {
    // Only trigger if not already visible
    if (!element.classList.contains('visible')) {
      var elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 200) {
        element.classList.add('visible');
        fadeInTriggered = true;
      }
    }
  });

  // Remove listener if all .fade-in elements are visible
  if ([...elements].every(el => el.classList.contains('visible'))) {
    window.removeEventListener('scroll', fadeInOnScroll);
  }
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', fadeInOnScroll);

function toggleAnswer(parentDiv) {
  const answerDiv = parentDiv.querySelector('.answer');
  const arrow = parentDiv.querySelector('.arrow');
  const isOpen = answerDiv.classList.contains('open');

  if (!isOpen) {
    answerDiv.style.height = answerDiv.scrollHeight + "px";
    answerDiv.classList.add('open');
    arrow.classList.add('open');
    answerDiv.addEventListener('transitionend', function handler(e) {
      if (answerDiv.classList.contains('open')) {
        answerDiv.style.height = 'auto';
      }
      answerDiv.removeEventListener('transitionend', handler);
    });
  } else {
    answerDiv.style.height = answerDiv.scrollHeight + "px";
    void answerDiv.offsetHeight;
    answerDiv.style.height = "0";
    answerDiv.classList.remove('open');
    arrow.classList.remove('open');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Select all <p> elements inside elements with class "familia"
  const paragraphs = document.querySelectorAll('.answer p');

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

document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const selectRow = document.querySelector('.selectrow');

  if (menuToggle && selectRow) {
    menuToggle.addEventListener('click', function() {
      selectRow.classList.toggle('active');
      if (selectRow.classList.contains('active')) {
        menuToggle.innerHTML = '&times;';
        menuToggle.setAttribute('aria-label', 'Close menu');
      } else {
        menuToggle.innerHTML = '&#9776;';
        menuToggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }
});

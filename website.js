
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


document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-toggle');
  const selectRow = document.querySelector('.selectrow');
  const overlay = document.querySelector('.menu-overlay');

  function openMenu() {
    selectRow.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  function closeMenu() {
    selectRow.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  }

  menuBtn.addEventListener('click', function () {
    if (selectRow.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  // Optional: Close menu on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape" && selectRow.classList.contains('active')) {
      closeMenu();
    }
  });
});

window.addEventListener('DOMContentLoaded', function () {
  const imageList = document.querySelector('.slider-wrapper .image-list');
  const images = Array.from(imageList.querySelectorAll('.image-item'));

  // Wait for all images to load
  let loadedCount = 0;
  images.forEach(img => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.addEventListener('load', () => {
        loadedCount++;
        if (loadedCount === images.length) {
          startCarousel();
        }
      });
      img.addEventListener('error', () => {
        loadedCount++; // still count errors so it doesn't hang forever
        if (loadedCount === images.length) {
          startCarousel();
        }
      });
    }
  });
  // If all images already loaded
  if (loadedCount === images.length) {
    startCarousel();
  }

  function startCarousel() {
    // Use the images at the time of function call (all should be loaded)
    const imagesNow = Array.from(imageList.querySelectorAll('.image-item'));
    const imgCount = imagesNow.length;

    // Clone all images and append them
    imagesNow.forEach(img => {
      const clone = img.cloneNode(true);
      imageList.appendChild(clone);
    });

    // Calculate width
    const gap = 18;
    const imgWidth = imagesNow[0].offsetWidth + gap;
    const originalWidth = imgWidth * imgCount;

    let translateX = 0;

    function animate() {
      translateX -= 2;
      if (Math.abs(translateX) >= originalWidth) {
        translateX = 0;
      }
      imageList.style.transform = `translateX(${translateX}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }
});

function bookmarkClick(event) {
    const buttonElement = event.target;
    buttonElement.classList.toggle("bookmark_button_clickt");
  }
  
  const bookmark__button = document.querySelector('[data-js="bookmark_button"]');
  bookmark__button.addEventListener("click", bookmarkClick);
  

  

  
  
  
  

  
  function toggleText() {
    var textElement = document.getElementById('toggleText');
    textElement.classList.toggle('hidden');
  }
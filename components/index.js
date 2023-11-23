// Bookmark//


function bookmarkClick(event) {
    const buttonElement = event.target;
    buttonElement.classList.toggle("bookmark_button_clickt");
  }
  
  const bookmark__button = document.querySelector('[data-js="bookmark_button"]');
  bookmark__button.addEventListener("click", bookmarkClick);
  

  //Answer Button//

  function toggleText() {
    var textElement = document.getElementById('toggleText');
    textElement.classList.toggle('hidden');
  }

 
  
  // Form inhalte//

 function createNewCard() {
  
  const question = document.querySelector('[data-js="new_questions"]');
  const answer = document.querySelector('[data-js="new_answers"]');
  const tag = document.querySelector('[data-js="new_tags"]');

}



// Message characters left//

const messageInput = document.querySelector('[data-js="personal-message"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);


console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //     ^ Prevents the default behavior of our form
  // 🔎 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  const formData = new FormData(event.target);
  //    ^ formData Object  ^ FormData constructor
  // The FormData constructor creates a new formData object

  // 🔎 https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
  // 🔎 https://developer.mozilla.org/en-US/docs/Web/API/FormData
  // 🔎 https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries

  const data = Object.fromEntries(formData);
  // Object.fromEntries(iterable) turns an iterable into a "usable" object
  // 🔎 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

  // These console.log()s don't do anything to the code, they're just to investigate what's going on!
  // You can also try to hover over every item you want to know more about and maybe the tooltips offer something interesting.
  console.clear();
  // The above line prevents our console from being absolutely cluttered
  console.log("---");
  console.log("Investigating with console.log()s:");
  console.log("🔍👀");
  console.log("The Event Object:", event);
  console.log("The Event Target:", event.target);
  console.log("The form constant:", form);
  console.log(
    "Is form equal to event.target in our case?",
    event.target === form
  );
  console.log("What is new FormData()?", new FormData());
  console.log("What is formData?", formData);
  console.log("What is FormData?", FormData);
  console.log("What is Object?", Object);
  console.log("What is Object.fromEntries?", Object.fromEntries);
  console.log("What is inside of data?", data);
  console.log("---");

  event.target.reset();
  // Resets our form
  event.target.elements.firstName.focus();
  // Applies focus to the form control with the `firstName` name attribute
});

const messageInput = document.querySelector('[data-js="personal-message"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);

messageInput.addEventListener("input", (event) => {
  charactersLeftElement.textContent = 150 - event.target.value.length;
  // The above line replaces the text content (starting with 150) of our charactersLeftElement every time the personal message textarea input registers an input
  console.clear();
  // The above line prevents our console from being absolutely cluttered
  console.log("---");
  console.log("Investigating, again, with console.log()s:");
  console.log("🔍👀");
  console.log("What is messageInput?", messageInput);
  console.log("What is charactersLeftElement?", charactersLeftElement);
  console.log(
    "What is charactersLeftElement.textContent ?",
    charactersLeftElement.textContent
  );
  console.log("What is event.target?", event.target);
  console.log("What is event.target.value?", event.target.value);
  console.log("What is event.target.value.length?", event.target.value.length);
  console.log("---");
});

document.getElementById("suggestionsButton").addEventListener("click", function() {
    var suggestions = [
      "Consider visiting Paris, France for a romantic getaway.",
      "Tokyo, Japan is a great destination for tech enthusiasts and foodies alike.",
      "New York, USA offers a wide range of activities for all ages and interests."
    ];
  
    var suggestionsElement = document.getElementById("suggestions");
    suggestionsElement.innerHTML = "";
  
    for (var i = 0; i < suggestions.length; i++) {
      var suggestion = document.createElement("p");
      suggestion.textContent = suggestions[i];
      suggestionsElement.appendChild(suggestion);
    }
  });
  
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
  
    alert("Thank you for your message! We will get back to you as soon as possible.");
  
    document.getElementById("contactForm").reset();
  });
  document.getElementById("suggestionForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
  
    alert("Thank you for your suggestions! We will review them and get back to you as soon as possible.");
  
    document.getElementById("suggestionForm").reset();
  });
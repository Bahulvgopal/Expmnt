//nav button js program 
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// quotes change js program
// Array of possible texts
    var texts = ['"The purpose of art is washing the dust of daily life off our souls." - Pablo Picasso', '"Art should comfort the disturbed and disturb the comfortable."   - Cesar Cruz', '"Drawing is the foundation of all art. A drawing is simply a line going for a walk." - Paul Klee', '"The artist is nothing without the gift, but the gift is nothing without work." - Emile Zola', '"Every artist was first an amateur." - Ralph Waldo Emerson'];

    // Select a random text from the array
    var randomIndex = Math.floor(Math.random() * texts.length);
    var newText = texts[randomIndex];

    // Update the heading text
    document.getElementById("dynamicText").innerText = newText;
    
    // whatsapp button1
    function redirectToWhatsApp() {
    // Replace '1234567890' with the phone number you want to redirect to
    window.location.href = 'https://wa.me/+91 8075298373';
}

//details to WhatsApp
function sendWhatsAppMessage() {
  // Get form values
  var productName = document.getElementById("productName").value;
  var address = document.getElementById("address").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var customerName = document.getElementById("customerName").value;
  var age = document.getElementById("age").value;

  // Check if required fields are not empty
  if (!productName || !address || !phoneNumber || !customerName || !age) {
    alert("Please fill in all required fields.");
    return;
  }

  // Construct WhatsApp message with customer information
  var message = "Hello, I would like to order the " + productName + " from your store.\n\n";
  message += "Name: " + customerName + "\n";
  message += "Age: " + age + "\n";
  message += "Address: " + address + "\n";
  message += "Phone: " + phoneNumber + "\n";
 
  // Encode message for URL
  var encodedMessage = encodeURIComponent(message);

  // Phone number of the owner
  var ownerPhoneNumber = "918075298373"; // Owner's phone number in international format

  // Open WhatsApp with pre-filled message to the owner
  var whatsappURL = "https://api.whatsapp.com/send?phone=" + ownerPhoneNumber + "&text=" + encodedMessage;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");
}

// smoothly scroll

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').substr(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
}


// loader 



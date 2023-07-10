const consumerKey = 'KuxxkI0Fm8jKijUGLGUCGLbnmWVLmbLw';
    const consumerSecret = ' DAIeTDmpefUu1QoP';

    const paymentButton = document.getElementById('paymentButton');
    const paymentMessage = document.getElementById('paymentMessage');

    paymentButton.addEventListener('click', makePayment);

    // M-Pesa payment logic using the Daraja API

function makePayment() {
    // Retrieve necessary input values
    var phoneNumber = prompt("Please enter your M-Pesa phone number:");
    var amount = prompt("Please enter the payment amount:");
  
    // Perform API call to initiate the M-Pesa payment
    // Replace <YOUR_API_ENDPOINT> with the actual API endpoint URL for initiating M-Pesa payment
    // Replace <YOUR_ACCESS_TOKEN> with the actual access token for authenticating the API call
  
    fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer <YOUR_ACCESS_TOKEN>",
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        amount: amount,
      }),
    })
      .then(function (response) {
        // Handle API response
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to initiate M-Pesa payment.");
        }
      })
      .then(function (data) {
        // Process the API response
        console.log(data);
        alert("M-Pesa payment initiated successfully!");
      })
      .catch(function (error) {
        // Handle any errors
        console.error(error);
        alert("An error occurred while initiating M-Pesa payment.");
      });
  }
  
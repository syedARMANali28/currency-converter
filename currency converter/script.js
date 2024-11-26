const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

// Add event listener to the form
document.getElementById('converter-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from reloading the page

    // Retrieve selected currencies and the input amount
    let fromCurrency = document.getElementById('From').value; // Match ID from HTML
    let toCurrency = document.getElementById('To').value;     // Match ID from HTML
    let amount = parseFloat(document.getElementById('amount').value); // Convert to number

    // Validate input amount
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid amount.';
        return;
    }

    // Fetch conversion rates
    let fromAmount = currency[fromCurrency];
    let toAmount = currency[toCurrency];

    // Perform conversion
    let baseAmount = amount / fromAmount;  // Convert to base currency (USD)
    let convertedAmount = baseAmount * toAmount;

    // Display the result
    document.getElementById('result').textContent = 
        `Converted Amount: ${Math.round(convertedAmount * 100) / 100} ${toCurrency}`;

    // Trigger confetti after displaying result
    triggerConfetti();
});

// Function to trigger confetti
function triggerConfetti() {
    // Confetti from the left
    confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 } // Start from the left
    });

    // Confetti from the right
    confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1 } // Start from the right
    });
}

// Function to generate random speed between 3 and 3.5 m/s
function generateBallSpeed() {
    return (Math.random() * (3.5 - 3) + 3).toFixed(4); // Returns a random speed between 3 and 3.5 m/s with 4 decimals
}

// Event listener for the throw button
document.getElementById('throwButton').addEventListener('click', function() {
    // Generate a random speed
    const ballSpeed = generateBallSpeed();

    // Display the speed to the user
    document.getElementById('speedDisplay').textContent = `${ballSpeed} m/s`;
});

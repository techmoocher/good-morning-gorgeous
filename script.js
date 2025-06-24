document.addEventListener('DOMContentLoaded', function() {
    const sakuraContainer = document.querySelector('.sakura-container');
    const petalCount = 30;
    
    // Create sakura petals
    for (let i = 0; i < petalCount; i++) {
        createPetal(sakuraContainer);
    }
    
    // Button interaction for quote
    const showQuoteBtn = document.getElementById('showQuote');
    const quoteCard = document.getElementById('quoteCard');
    const quoteText = document.getElementById('quoteText');
    
    // Combined quotes array - updated with more personalized motivation quotes for your crush
    const quotes = [
        "Even the darkest time, your smile still brightens my day! ✨",
        "I firmly believe that you're stronger than you think. You've got this! 💖",
        "You are more useful than you realize. Your energy can make someone's day! 🌟",
        "You're the strongest person I know. Keep shining! ☀️",
        "Every day may not be good, but there's something good in every day! 🌈",
        "Every challenge you face makes you even more incredible. 💪",
        "Your determination inspires me every single day! 👑",
        "Never forget how special you are to me and everyone around you! 💕",
        "To the world you may be one person, but to one person you're the whole world! 🌏",
        "You bring so much light into this world. Keep being amazing! ✨",
        "I'm always here for you, through every up and down! 💯",
        "Your smile could literally light up the entire universe! 🌠"
    ];
    
    // Click event for quote button - update the button text to be more personal
    showQuoteBtn.textContent = "Daily Motivation ❤";
    
    // Make sure the quote card is visible by default
    quoteCard.style.display = 'block';
    
    // Show a random quote when the page loads
    const initialQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = initialQuote;
    
    showQuoteBtn.addEventListener('click', function() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteText.textContent = randomQuote;
        
        // Create sparkle effect
        createSparkleEffect(showQuoteBtn);
        
        // Show the card if it's hidden
        if (quoteCard.style.display !== 'block') {
            quoteCard.style.display = 'block';
        }
    });
    
    // Make the gif interactive
    const daysGif = document.getElementById('daysGif');
    daysGif.addEventListener('click', function() {
        createHeartBurst(daysGif);
    });
});

function createPetal(container) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Randomize petal properties
    const petalSize = Math.random() * 15 + 10; // Between 10px and 25px
    const startPositionLeft = Math.random() * 100; // Random position from 0% to 100%
    const fallDuration = Math.random() * 10 + 8; // Between 8s and 18s
    const fallDelay = Math.random() * 5; // Between 0s and 5s
    
    // Set different shades of purple for petals
    const purpleShades = [
        'rgba(221, 160, 221, 0.7)', // Plum
        'rgba(186, 85, 211, 0.7)',  // Medium Orchid
        'rgba(147, 112, 219, 0.7)', // Medium Purple
        'rgba(138, 43, 226, 0.7)',  // Blue Violet
        'rgba(153, 50, 204, 0.7)'   // Dark Orchid
    ];
    
    const randomPurple = purpleShades[Math.floor(Math.random() * purpleShades.length)];
    
    // Apply styles
    petal.style.width = `${petalSize}px`;
    petal.style.height = `${petalSize}px`;
    petal.style.left = `${startPositionLeft}%`;
    petal.style.backgroundColor = randomPurple;
    petal.style.animationDuration = `${fallDuration}s`;
    petal.style.animationDelay = `${fallDelay}s`;
    
    // Add some rotation variance
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    container.appendChild(petal);
    
    // Remove and recreate petal when animation ends
    setTimeout(() => {
        petal.remove();
        createPetal(container);
    }, (fallDuration + fallDelay) * 1000);
}

function createSparkleEffect(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Position sparkle around the button
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        
        // Randomize sparkle color
        const sparkleColors = ['#ffb6c1', '#e0c3fc', '#c1f0ff', '#ffffb5'];
        sparkle.style.backgroundColor = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
        
        // Randomize size
        const size = Math.random() * 6 + 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        // Apply animation
        sparkle.style.animation = `sparkle ${Math.random() * 0.5 + 0.5}s ease forwards`;
        
        document.body.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

function createHeartBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'absolute';
        heart.style.left = `${centerX}px`;
        heart.style.top = `${centerY}px`;
        heart.style.fontSize = `${Math.random() * 15 + 10}px`;
        heart.style.color = '#ff6b6b';
        heart.style.opacity = '0.9';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '100';
        
        // Calculate random direction
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const destinationX = centerX + Math.cos(angle) * distance;
        const destinationY = centerY + Math.sin(angle) * distance;
        
        // Apply animation with keyframes
        heart.animate([
            { 
                transform: 'scale(0) translate(-50%, -50%) rotate(0deg)',
                opacity: 0.9
            },
            { 
                transform: `scale(1) translate(${destinationX - centerX}px, ${destinationY - centerY}px) rotate(${Math.random() * 360}deg)`,
                opacity: 0
            }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
        });
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
}
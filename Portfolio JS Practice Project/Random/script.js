const btn = document.getElementById("btn");
const text = document.getElementById("text");
const output = document.querySelector(".output");
const quote = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "It is never too late to be what you might have been. - George Eliot",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. - Helen Keller",
    "You must be the change you wish to see in the world. - Mahatma Gandhi"
    // Add more quotes here if needed
];


function displayRandomQuote() {
    let random = Math.floor(Math.random() * quote.length);
    output.textContent = quote[random];
}

btn.addEventListener("click", displayRandomQuote);
text.addEventListener("click", displayRandomQuote);
//31:23
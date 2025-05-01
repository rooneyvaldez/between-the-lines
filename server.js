// server.js (Node.js with Express)
const express = require('express');
const app = express();
const port = 5000;

// Mock Data (Quotes & Featured Posts)
const quotes = [
  "“Sometimes the most powerful stories are hidden between the lines.”",
  "“Your story is waiting to be written, don't let fear hold the pen.”",
  "“Words are the window to the soul, they create the world we live in.”"
];

const posts = [
  { id: 1, title: "The Power of Words", excerpt: "A journey through the art of storytelling...", slug: "power-of-words" },
  { id: 2, title: "Writing from the Heart", excerpt: "When writing comes from within, it connects with others...", slug: "writing-from-the-heart" },
  { id: 3, title: "Behind the Lines", excerpt: "Exploring the hidden meanings behind every story...", slug: "behind-the-lines" }
];

// API Route to get Quote of the Week
app.get('/api/quote-of-the-week', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

// API Route to get Featured Posts
app.get('/api/featured-posts', (req, res) => {
  res.json({ posts });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

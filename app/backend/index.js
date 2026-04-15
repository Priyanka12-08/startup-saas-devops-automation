const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors()); // allow frontend to call backend

// ----------------------------
// Mock Travel Dataset
// ----------------------------
const destinations = [
  {
    city: "Bali",
    weather: "warm",
    budget: "low",
    flight: "medium",
    description: "🌴 Beach paradise with affordable stays"
  },
  {
    city: "Tokyo",
    weather: "cold",
    budget: "high",
    flight: "high",
    description: "🏙️ Tech city with luxury experiences"
  },
  {
    city: "Vancouver",
    weather: "cold",
    budget: "medium",
    flight: "low",
    description: "🏔️ Nature + city balance with moderate cost"
  },
  {
    city: "Thailand",
    weather: "warm",
    budget: "low",
    flight: "low",
    description: "🍜 Budget-friendly tropical destination"
  },
  {
    city: "Dubai",
    weather: "hot",
    budget: "high",
    flight: "medium",
    description: "🏜️ Luxury shopping and desert experiences"
  }
];

// ----------------------------
// Health Check API
// ----------------------------
app.get("/", (req, res) => {
  res.json({
    service: "TravelOps AI Backend",
    status: "running",
    version: "2.0"
  });
});

// ----------------------------
// Travel Recommendation API
// ----------------------------
app.post("/recommend", (req, res) => {
  const { weather, budget, flight } = req.body;

  const results = destinations.filter((d) => {
    return (
      (!weather || d.weather === weather) &&
      (!budget || d.budget === budget) &&
      (!flight || d.flight === flight)
    );
  });

  res.json({
    success: true,
    query: {
      weather,
      budget,
      flight
    },
    count: results.length,
    recommendations: results
  });
});

// ----------------------------
// Chatbot API (NEW - supports frontend chatbot)
// ----------------------------
app.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({
      reply: "Please ask me something about travel ✈️"
    });
  }

  const msg = message.toLowerCase();

  let reply = "I can help you plan your trip ✈️ Try asking about Bali, Tokyo, Thailand or budget travel.";

  if (msg.includes("bali")) {
    reply = "🌴 Bali is perfect for low-budget warm weather travel with beaches and resorts.";
  } 
  else if (msg.includes("tokyo")) {
    reply = "🏙️ Tokyo is a high-budget destination with amazing tech culture and food.";
  } 
  else if (msg.includes("budget")) {
    reply = "💰 For low budget travel, try Thailand or Bali. For premium trips, consider Tokyo or Dubai.";
  } 
  else if (msg.includes("dubai")) {
    reply = "🏜️ Dubai is a luxury destination with shopping, skyscrapers, and desert safaris.";
  } 
  else if (msg.includes("thailand")) {
    reply = "🍜 Thailand is one of the best low-cost travel destinations in Asia!";
  }

  res.json({
    reply
  });
});

// ----------------------------
app.listen(3000, () => {
  console.log("🚀 TravelOps AI backend running on port 3000");
});
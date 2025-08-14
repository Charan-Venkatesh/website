const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock database for states, districts, cities
const statesData = {
  "Andhra Pradesh": {
    districts: ["Anantapur", "Chittoor", "East Godavari"],
    cities: {
      "Anantapur": ["Anantapur", "Dharmavaram", "Hindupur"],
      "Chittoor": ["Chittoor", "Tirupati", "Madanapalle"],
      "East Godavari": ["Kakinada", "Rajahmundry", "Amalapuram"]
    }
  },
  "Karnataka": {
    districts: ["Bangalore", "Mysore", "Hubli"],
    cities: {
      "Bangalore": ["Bangalore", "Electronic City", "Whitefield"],
      "Mysore": ["Mysore", "Chamundi Hills", "Srirangapatna"],
      "Hubli": ["Hubli", "Dharwad", "Gadag"]
    }
  },
  "Tamil Nadu": {
    districts: ["Chennai", "Coimbatore", "Madurai"],
    cities: {
      "Chennai": ["Chennai", "Tambaram", "Porur"],
      "Coimbatore": ["Coimbatore", "Pollachi", "Mettupalayam"],
      "Madurai": ["Madurai", "Usilampatti", "Melur"]
    }
  }
};

// API endpoints
app.get('/api/states', (req, res) => {
  res.json(Object.keys(statesData));
});

app.get('/api/districts/:state', (req, res) => {
  const state = req.params.state;
  if (statesData[state]) {
    res.json(statesData[state].districts);
  } else {
    res.status(404).json({ error: "State not found" });
  }
});

app.get('/api/cities/:state/:district', (req, res) => {
  const { state, district } = req.params;
  if (statesData[state] && statesData[state].cities[district]) {
    res.json(statesData[state].cities[district]);
  } else {
    res.status(404).json({ error: "Data not found" });
  }
});

// Form submission endpoint
app.post('/api/submit', (req, res) => {
  const formData = req.body;
  
  // Basic validation example
  if (formData.firstName.length > 15) {
    return res.status(400).json({ error: "First name too long" });
  }
  
  if (/[^a-zA-Z]/.test(formData.firstName) || /[^a-zA-Z]/.test(formData.lastName)) {
    return res.status(400).json({ error: "Names should not contain special characters or numbers" });
  }
  
  // In a real app, you'd save to database here
  console.log("Form submitted:", formData);
  
  res.json({ success: true, message: "Form submitted successfully!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
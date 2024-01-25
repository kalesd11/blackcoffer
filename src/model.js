const mongoose = require('mongoose');

const EnergyDataSchema = new mongoose.Schema({
    title: String,
    source: String,
    published: String,
    added: String,
    url: String,
    region: String,
    country: String,
    sector: String,
    topic: String,
    insight: String,
    relevance: Number,
    intensity: Number,
    pestle: String,
    start_year: String,  
    end_year: String,  
    impact: String
});

const EnergyData = mongoose.model('EnergyData', EnergyDataSchema);

module.exports = EnergyData;

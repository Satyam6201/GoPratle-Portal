import mongoose from 'mongoose'

const RequirementSchema = new mongoose.Schema({
    eventName: {type: String, required: true},
    eventType: {type: String, required: true},
    dateRange: {
        startDate: {type: Date},
        endDate: {type: Date},
    },
    location: {type: String, required: true},
    venue: {type: String},
    category: {
        type: String,
        enum: ['planner', 'performer', 'crew'],
        required: true
    },
    details: { type: mongoose.Schema.Types.Mixed }
}, {timestamps: true});

const Requirement = mongoose.model("Requirement", RequirementSchema);
export default Requirement;
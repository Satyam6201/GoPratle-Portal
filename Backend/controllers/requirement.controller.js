import Requirement from "../models/requiredment.models.js"

export const createRequirement = async (req, res) => {
    try {
        const newRequiredment = new Requirement(req.body);
        const saveRequirement = await newRequiredment.save();

        res.status(201).json({
            success: true,
            message: "Requirement posted successfully",
            date: saveRequirement
        });

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
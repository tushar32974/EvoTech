import Survey from "../models/Survey.js";

/* CREATE SURVEY POST */
export const createSurveyPost = async (req, res) => {
    try {
        const { name, gender, nationality, email, phoneNumber, address, message } = req.body;

        const newSurveyPost = new Survey({
            name,
            gender,
            nationality,
            email,
            phoneNumber,
            address,
            message,
        });

        await newSurveyPost.save();

        res.status(201).json({ message: 'Success' });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

/* GET ALL SURVEY POSTS */
export const getAllSurveyPosts = async (req, res) => {
    try {
        const surveyPosts = await Survey.find();
        res.status(200).json(surveyPosts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


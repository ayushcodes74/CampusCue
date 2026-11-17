
const Event = require("../models/Event");

async function getEvents(req, res, next) {
    try {
        const events = await Event.find();

        return res.status(200).json({
            status: "success",
            message: "Events fetched successfully",
            data: events
        });
    } catch (error) {
        next(error);
    }
}


async function createEvent(req, res, next) {
    try {
        const {
            title,
            description,
            category,
            collegeName,
            venue,
            startAt,
            endAt
        } = req.body;

        const event = await Event.create({
            title,
            description,
            category,
            collegeName,
            venue,
            startAt,
            endAt,
            status: "draft"
        });

        return res.status(201).json({
            status: "success",
            message: "Event created successfully",
            data: event
        });
    } catch (error) {
        next(error);
    }
}

module.exports = { getEvents, createEvent };

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Event title is required"],
            trim: true
        },

        description: {
            type: String,
            required: [true, "Event description is required"],
            trim: true
        },

        category: {
            type: String,
            required: [true, "Event category is required"],
            trim: true
        },

        collegeName: {
            type: String,
            required: [true, "College name is required"],
            trim: true
        },

        venue: {
            type: String,
            required: [true, "Event venue is required"],
            trim: true
        },

        startAt: {
            type: Date,
            required: [true, "Event start date is required"]
        },

        endAt: {
            type: Date,
            required: [true, "Event end date is required"]
        },

        status: {
            type: String,
            enum: [
                "draft",
                "pending_review",
                "needs_changes",
                "approved",
                "rejected",
                "unpublished",
                "cancelled"
            ],
            default: "draft"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Event", eventSchema);

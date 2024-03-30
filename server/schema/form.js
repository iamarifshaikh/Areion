import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timestamps: {
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    }
});

export default mongoose.model("Form", FormSchema);
import { models, model, Schema } from 'mongoose';

const WaitlistSchema: Schema = new Schema({
    discord: {
        type: String,
        required: true
    },
    walletAddress: {
        type: String,
        required: true
    }
});

const WaitlistModel = models.Waitlist || model('Waitlist', WaitlistSchema);

export default WaitlistModel
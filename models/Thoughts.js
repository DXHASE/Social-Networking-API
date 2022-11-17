const { Schema , model, Types } = require('mongoose');


const ReactionSchema = new Schema({
    reactionsId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    username:{
        type: String,
        required: true
    },
    reactions: [ ReactionSchema ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: false
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
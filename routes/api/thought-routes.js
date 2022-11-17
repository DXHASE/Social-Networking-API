const router = require('express').Router();
const {
    addThought,
    removeThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughts-controller');

router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:userId')
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .delete(removeThought)
    .put(updateThought)
    .get(getThoughtById)
    .post(addReaction);

router
    .route('/:userId/:thoughtId/:reactionsId')
    .delete(removeReaction);


module.exports = router;
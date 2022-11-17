const { 
    getUserById,
    createUser, 
    getAllUsers,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

const router = require('express').Router();

router
    .route('/')
    .post(createUser)
    .get(getAllUsers);
    
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


module.exports = router;

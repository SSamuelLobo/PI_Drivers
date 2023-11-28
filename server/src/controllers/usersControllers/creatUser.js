const { User } = require('../../db.js');


const createUserController = async( email , password , name ,lastname ) => {

    const newUser = await User.create({
        email: email,
        password: password,
        name: name,
        lastname: lastname
    });

    return newUser;
}

module.exports = {
    createUserController
}
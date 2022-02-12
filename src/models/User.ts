import mongoose from "../database/database";

const UserModel = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        allowNull: false,
    },
    request:{
        type: Object,
        required: true,
        allowNull: false
    }
});

const User = mongoose.model('User', UserModel);

export default User;
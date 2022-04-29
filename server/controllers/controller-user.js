const ApiError = require ('../error/api-error');
const {User} = require ('../models/models');
const {check, validationResult} = require ('express-validator');
const bcrypt = require ('bcryptjs');

class userController {
    async register (req, res) {
        let badRequestCode = 400;
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(badRequestCode).json({
                    message: "Incorrect operation",
                    errors
                });
            }

            const {email, password, zodiac_sign, gender} = req.body;
            const candidate = await User.findOne({ where: { email: email } });
            if (candidate) {
                return res.status(badRequestCode).json({message: `User with email ${email} already exist`});
            }

            //somehow create salt
            let salt = 10;
            let hashPassword = await bcrypt.hash(password, salt);
            User.create({
                email: email,
                password: hashPassword,
                zodiac_sign: zodiac_sign,
                gender: gender
            });

            return res.json({message: "User was created"});

        } catch (e) {
            console.log(e);
            res.send({message: `Server error`});
        }
    }

    async login (req, res){
    }

    async check (req, res, next){
         const {id} = req.query;
         if (!id){
            return next(ApiError.badRequest("ID is not set"))
         }
         res.json(id);
    }
}

module.exports = new userController()
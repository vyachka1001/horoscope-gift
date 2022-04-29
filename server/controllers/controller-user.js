const ApiError = require ('../error/api-error');
const {User} = require ('../models/models');
const {check, validationResult} = require ('express-validator');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');

class userController {
    async register (req, res) {
        let badRequestCode = 400;
        try {
            /*let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(badRequestCode).json({
                    message: "Incorrect operation",
                    errors
                });
            }*/

            const { email, password, zodiac_sign, gender } = req.body;
            const user = await User.findOne({ where: { email: email } });
            if (user) {
                return res.status(badRequestCode).json( { message: `User with email ${email} already exist` } );
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

            return res.json( { message: "User was created" } );

        } catch (e) {
            console.log(e);
            res.send({message: `Server error`});
        }
    }

    async login (req, res) {
        let userNotFoundCode = 404;
        let badRequestCode = 400;
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email: email } });
            if (!user) {
                return res.status(userNotFoundCode).json({message: `User with email ${email} was not found`});
            }

            const isSamePassword = bcrypt.compareSync(password, user.password);
            if (!isSamePassword) {
                return res.status(badRequestCode).json( {message: "Wrong password!"} );
            }

            const token = jwt.sign( { id: user.id }, process.env.SECRET_KEY, { expiresIn: "1h" });

            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    zodiac_sign: user.zodiac_sign,
                    gender: user.gender
                }
            });

        } catch (e) {
            console.log(e);
            res.send({message: `Server error`});
        }
    }

    async check (req, res, next) {
         const {id} = req.query;
         if (!id){
            return next(ApiError.badRequest("ID is not set"))
         }
         res.json(id);
    }
}

module.exports = new userController()
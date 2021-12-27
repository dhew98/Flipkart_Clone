
import User from "../model/userSchema.js"

export const usersignup = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username })
        if (exist) {
            return response.status(401).json('User already exist!')
        }
        const user = request.body

        const newUser = new User(user);//vaidate user get from body
        newUser.save((err) => {
            if (err) {
                console.log("problem");
            }
            else {
                console.log('success')
            }
        })

        response.status(200).json('User registered!')

    } catch (error) {
        console.log('Error :', error.message)
    }
}

export const userlogin = async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username, password: req.body.password })
        if (user) {
            return res.status(200).json(`${req.body.username} logged in Successfully!`)
        }
        else {
            return res.status(401).json('Inavlid username or password!')
        }
    } catch (error) {
        console.log('Error', error.message)
    }
}
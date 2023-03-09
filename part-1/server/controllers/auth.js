const users = []
const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        let existingPass = bcrypt.compareSync(password, users[i].passHash)
        if (users[i].username === username && existingPass) {
          res.status(200).send(users[i])
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        // users.push(req.body)
        res.status(200).send(req.body)

        const {username, email, firstName, lastName, password} = req.body
        const salt = bcrypt.genSaltSync(5)
        const passHash = bcrypt.hashSync(password, salt)

        const userObj = {
          username,
          email,
          firstName,
          lastName,
          passHash
        } 
        users.push(userObj)
    }
}
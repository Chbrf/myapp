const addinguser = require('./addinguser')
class login {
    
    constructor(username, password) {
this.username = username;
this.password = password;
    }

    loginuser(){
        try{
            const find = addinguser.users.find(user => user.username === this.username && user.password === this.password);
            if(find){
                return 'welcome'
            }
            else {
                return 'dosnt exist'
            }

        }
        catch(err){
console.log(err)
        }
    }

}
module.exports = login
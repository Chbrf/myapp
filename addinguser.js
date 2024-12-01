
const express = require('express')

class addingusers {
     static users =[]
constructor(username, password) {
    this.username = username;
    this.password = password;}

adduser(){
    try{
      const find = addingusers.users.find(user=>user.username === this.username)
           if(!find){
            addingusers.users.push({username:this.username,password:this.password})
           return(addingusers.users)
           }
           else{
            console.log('already added')
return('already added')

           }
        
    }
    catch(error)
     {
        console.log('asas')
    }

}
}
module.exports = addingusers;

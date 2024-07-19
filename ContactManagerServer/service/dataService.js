const db=require("./db")

getAllContacts=()=>{
    return db.Contact.find().sort({name: 1}).then(data=>{
        if(data){
            console.log(data)
            return{
                status:true,
                serverResult:data,
                statusCode:200
            }
        }
        else{
           return{
            status: false,
            msg: "COntacts Empty !",
            statusCode: 404
           }
        }
    })
}

viewContact=(ph)=>{
    return db.Contact.findOne({mobile:ph}).then(data=>{
        if(data){
return{
    status:true,
    serverResult:data,
    statusCode:200
}
        }
        else{
            return{
             status: false,
             msg: "COntacts Empty !",
             statusCode: 404 
            }
        }
    })
}

addContact=async (data)=>{
    console.log(data)
    var thismobile=parseInt(data.mobile)
    const result = await db.Contact.findOne({ mobile: thismobile })
    if (result) {
        return {
            status: false,
            msg: "Contact already exists !",
            statusCode: 404
        }
    }
    else {
        newContact = new db.Contact(data)
        newContact.save()
        return {
            status: true,
            msg: "New contact added !",

            statusCode: 200
        }
    }
}

editContact=(ph, data)=>{
    return db.Contact.updateOne({mobile:ph},{$set:data}).then(result=>{
        if(result){
        return{
            status: true,
            msg: "Contact updated !",

            statusCode: 200
        }}
        else{
            return{
                status: false,
                msg: "unable to update !",
                statusCode: 404
            }
        }
    })

}


deleteContact=(ph)=>{
    return db.Contact.deleteOne({mobile:ph}).then(result=>{
      if(result){
        return{
          status: true,
          msg: "This contact has been deleted",
          statusCode: 200
        }
      }
      else{
        return{
          status: false,
        msg:"Unable to delete contact",
        statusCode: 404
        }
      }
    })
   }
  

module.exports={
    getAllContacts,
    viewContact,
    addContact,
    editContact,
    deleteContact
}
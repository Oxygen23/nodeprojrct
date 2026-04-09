const getUser = (req,res) => {
    res.status(201).send({msg:"hellow omari"})
}
const userList = [{id:1,username:"omari",displayName:"omi"},
        {id:5,username:"omarioxygen",displayName:"oxygen"},
        {id:2,username:"amari",displayName:"amali"},
        {id:3,username:"jamari",displayName:"jamali"},
        {id:4,username:"johari",displayName:"joha"}
    ]

const getUsers = (req,res) => {
    res.status(201).send(userList);
    //console.log(req.params);
}
const getOneUser = (req,res) => {
    console.log(req.params)
    //res.send(userList.id,userList.username,userList.displayName)
}
const addUser = (req,res) =>{
    const user =req.body;
    userList.push(user);
    res.status(200).send(user);
}


module.exports ={ getUser,getUsers,getOneUser,addUser};




const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

// var id="5c5339d711307cb029b7faca";
// if(!ObjectID.isValid(id)){
//   console.log('Id is not Valid');
// }
//
// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos ',todos);
// });
//
// Todo.findOne({-id:id}).then((todo)=>{
//   console.log('Todo ',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('ID not Found');
//   }
//   console.log('Todo By ID ',todo);
// }).catch((e)=>{console.log(e);});
var id="5c51e62160c1cb441d16ed6b";
// if(!ObjectID.isValid(id)){
//   console.log('Id is not Valid');
// }

User.find({
  _id:id
}).then((todos)=>{
  console.log('Users ',todos);
});

User.findOne({_id:id}).then((todo)=>{
  console.log('User ',todo);
});

User.findById(id).then((todo)=>{
  if(!todo){
    return console.log('ID not Found');
  }
  console.log(JSON.stringify(todo,undefined,2));
}).catch((e)=>{console.log(e);});

const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

// TODO: remove all entries
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });
// 
// Todo.findOneAndRemove({_id:}).then((todo)=>{
// console.log(todo);
// });

Todo.findByIdAndRemove('5c5366a96dc300d009cd894e').then((todo)=>{
  console.log(todo);
});

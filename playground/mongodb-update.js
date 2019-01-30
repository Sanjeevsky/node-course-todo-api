//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
//const obj=new ObjectID();
//console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
  return console.log("Unable To Connect MongoDB server");//To prevent rest line execution
}
  console.log("Connected To MongoDB server");

// db.collection("Todos").findOneAndUpdate({_id:new ObjectID("5c51316aef6c4bcaab9af509")},
// {
//   $set:{
//     completed:true
//   }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });
db.collection("Users").findOneAndUpdate({_id:new ObjectID("5c4f58d4a44f8a1b40a6c683")},
{
  $set:{
    name:"Sanjeev Yadav"
  },
  $inc:{
    age:1
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});


});

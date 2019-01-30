//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
//const obj=new ObjectID();
//console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
  return console.log("Unable To Connect MongoDB server");//To prevent rest line execution
}
  console.log("Connected To MongoDB server");

// db.collection('Todos').insertOne({
//   text:"Something to Do",
//   completed:false
// },(err,result)=>{
//   if(err){
//     return console.log('Failed To insert Data',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });

// db.collection("Users").insertOne({
//   name:"Sanjeev",
//   age:21,
//   location:"Sultanpur"
// },(err,result)=>{
//   if(err)
//   {
//     return console.log("Couldn't insert Data in Collection",err);
//
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
//   console.log(result.ops[0]._id.getTimestamp());
// })
//
//
  db.close();
 });

//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
const obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
  return console.log("Unable To Connect MongoDB server");//To prevent rest line execution
}
//   console.log("Connected To MongoDB server");
// db.collection("Todos").find({completed:true})
// .toArray().then((docs)=>{
//   console.log(JSON.stringify(docs,undefined,2));
//
// },(err)=>{
//   console.log("Unable To fetch Data",err);
// });

// console.log("Connected To MongoDB server");
// db.collection("Todos").count()
// .then((count)=>{
// console.log(`count :${count}`);
//
// },(err)=>{
// console.log("Unable To fetch Data",err);
// });

console.log("Connected To MongoDB server");
db.collection("Users").find({name:"Sanjeev"})
.toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2));

},(err)=>{
console.log("Unable To fetch Data",err);
});

 });

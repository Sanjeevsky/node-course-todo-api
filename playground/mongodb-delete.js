//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
//const obj=new ObjectID();
//console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
  return console.log("Unable To Connect MongoDB server");//To prevent rest line execution
}
  console.log("Connected To MongoDB server");

//Delete Many
// db.collection("Todos").deleteMany({text:'Eat Lunch',completed:true}).then((result)=>{
//   console.log(result);

  //Delete Many
  // db.collection("Todos").deleteOne({text:'Eat Lunch',completed:true}).then((result)=>{
  //   console.log(result);

    //findOneAndDelete
    //Delete Many
    db.collection("Todos").findOneAndDelete({text:'Eat Lunch'}).then((result)=>{
      console.log(result);
});
 });

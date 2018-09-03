var express=require("express"),
    app=express();
    const port=process.env.PORT ||3000;


app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));


//routes

//landing routes

app.get("/",function(req,res){
  res.render("landing");
});

//index route

app.get("/tripstring",function(req,res){
      res.render("index");
});

//offer pages
app.get("/shimla",function(req,res){
  res.render("package-tour/shimla1");
})
//form show pages
app.get("/form",function(req,res){
   res.render("form");
});app.get("/form_wedding",function(req,res){
   res.render("form1");
});
app.get("/form_mice",function(req,res){
   res.render("mice");
});

app.get("/about",function(req,res){
   res.render("about");
});




app.listen(port,function(){
  console.log("server is started .......")
});

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
});
app.get("/manali",function(req,res){
  res.render("package-tour/manali");
});
app.get("/dharam",function(req,res){
  res.render("package-tour/dharam");
});
app.get("/kashmir",function(req,res){
  res.render("package-tour/kashmir");
});
app.get("/darjelling",function(req,res){
  res.render("package-tour/darjelling");
});
app.get("/rajasthan",function(req,res){
  res.render("package-tour/rajasthan");
});
app.get("/wedding",function(req,res){
  res.render("package-tour/wedding");
});
app.get("/kerala",function(req,res){
  res.render("package-tour/kerala");
});
app.get("/andaman",function(req,res){
  res.render("package-tour/andaman");
});
app.get("/goa",function(req,res){
  res.render("package-tour/goa");
});
app.get("/agra",function(req,res){
  res.render("package-tour/agra");
});
app.get("/ladakh",function(req,res){
  res.render("package-tour/ladakh");
});
//form show pages
app.get("/form",function(req,res){
   res.render("form");
});app.get("/form_wedding",function(req,res){
   res.render("form1");
});
app.get("/form_mice",function(req,res){
   res.render("form-mice");
});
app.get("/form_query",function(req,res){
   res.render("queryform");
});

app.get("/about",function(req,res){
   res.render("about");
});
app.get("/mcleodganj",function(req,res){
  res.render("package-tour/mcleodganj");
});
app.get("/manali1",function(req,res){
  res.render("package-tour/manali_s");
});
app.get("/weekend",function(req,res){
  res.render("package-tour/weekend");
});





app.listen(port,function(){
  console.log("server is started .......")
});

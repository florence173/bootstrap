function loadjson(file,callback)
var xhr=new XMLHttpRequest();
xhr.openrideMimetype("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
   if(xhr.onreadystatechange===4 && xhr.status===200){
    callback(xhr.responseText);
};
{
xhr.send(null);
}
loadjson("data.json,function"(Text){
    var data =json.parse
}
let a:any=[
    {name:"khushaboo",mobile:"9665065113",email:"sokhushaboo202@gmail.com"},
    {name:"dhiraj",mobile:"8446054113",email:"dhiru2005@gmail.com"},
    {name:"abcd",mobile:"7645637",email:"abcd@gmail.com"}
];
let names:any="";

for(var i=0;i<a.length;i++){
    if(a[i]['name']=="abcd"){
        names=a[i]['name'];
    }
}
document.write(`${names} Is exist`);

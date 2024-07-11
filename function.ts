var obj:any=[
    {name:"khushaboo",mobile:"9665065113",email:"sokhushaboo202@gmail.com",age:20},
    {name:"dhiraj",mobile:"8446054113",email:"dhiru2005@gmail.com",age:32},
    {name:"neha",mobile:"5647635465",email:"neha@gmail.com",age:45},
    {name:"abcd",mobile:"473474757",email:"abcd@gmail.com",age:18}

];

let new_arr=obj.filter((obj)=>{
    if(obj.age>20){
        console.log(obj);
    }
})
let student:any=[
    {name:"khushaboo",mobile:"9665065113",email:"sokhushaboo202@gmail.com",pass:"khushi"},
    {name:"dhiraj",mobile:"8421347583",email:"dhiru1005@gmail.com",pass:"dhiru"},
    {name:"lilabai",mobile:"9665065113",email:"lilabai202@gmail.com",pass:"lila"},
    {name:"vishawnath",mobile:"9623157559",email:"vish202@gmail.com",pass:"vishwanath"}
];
document.write("<table border='1'>");
document.write(`<tr>
                    <th>name</th>
                    <th>mobile</th>
                    <th>email</th>
                    <th>Password</th>
                </tr>`);
if(student.length>0){
    for(var i=0;i<student.length;i++){

        document.write(`<tr>
                            <td>${student[i]['name']}</td>
                            <td>${student[i]['mobile']}</td>
                            <td>${student[i]['email']}</td>
                            <td>${student[i]['pass']}</td>
                        </tr>`);

    }
}
document.write("</table>");
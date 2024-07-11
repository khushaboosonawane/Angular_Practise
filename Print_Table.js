var student = [
    { name: "khushaboo", mobile: "9665065113", email: "sokhushaboo202@gmail.com", pass: "khushi" },
    { name: "dhiraj", mobile: "8421347583", email: "dhiru1005@gmail.com", pass: "dhiru" },
    { name: "lilabai", mobile: "9665065113", email: "lilabai202@gmail.com", pass: "lila" },
    { name: "vishawnath", mobile: "9623157559", email: "vish202@gmail.com", pass: "vishwanath" }
];
document.write("<table border='1'>");
document.write("<tr>\n                    <th>name</th>\n                    <th>mobile</th>\n                    <th>email</th>\n                    <th>Password</th>\n                </tr>");
if (student.length > 0) {
    for (var i = 0; i < student.length; i++) {
        document.write("<tr>\n                            <td>".concat(student[i]['name'], "</td>\n                            <td>").concat(student[i]['mobile'], "</td>\n                            <td>").concat(student[i]['email'], "</td>\n                            <td>").concat(student[i]['pass'], "</td>\n                        </tr>"));
    }
}
document.write("</table>");

class Second_example{
    full_name:any="khushaboo";
    showfullname(fname:string=""){
        this.full_name=fname;
        document.write(this.full_name);
    }
}
let bb=new Second_example();
bb.showfullname("jesus");
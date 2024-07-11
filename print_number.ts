function print_data(i){
    console.log(i);
    if(i<10){
        print_data(i+1);
    }
}

print_data(5);
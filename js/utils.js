function getIndex(path){
    var index = 1;
    switch(path) {
        case '/list' : index = 1; break;
        case '/about' : index = 2; break;
        case '/form' : index =3; break;
    }
    return index;
}
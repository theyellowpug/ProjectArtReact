function TimeAndDate(){

    var today = new Date();
    var month = (today.getMonth() + 1);
    var date = today.getDate();
    var day = today.getDay();
    var a = "";

    switch(month) {
        case 1: a += "Január "; break;
        case 2: a += "Február "; break;
        case 3: a += "Március "; break;
        case 4: a += "Április "; break;
        case 5: a += "Május "; break;
        case 6: a += "Júnuis "; break;
        case 7: a += "Július "; break;
        case 8: a += "Augusztus "; break;
        case 9: a += "Szeptember "; break;
        case 10: a += "Október "; break;
        case 11: a += "November "; break;
        case 12: a += "December "; break;
    }
    a += date + " ";
    switch(day) {
        case 0: a += ", Vasárnap"; break;
        case 1: a += ", Hétfő"; break;
        case 2: a += ", Kedd"; break;
        case 3: a += ", Szerda"; break;
        case 4: a += ", Csütörtök"; break;
        case 5: a += ", Péntek"; break;
        case 6: a += ", Szombat"; break;
    }

    return a;
}
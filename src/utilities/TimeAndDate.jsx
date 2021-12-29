export function TimeAndDate(){

    let today = new Date();
    let month = (today.getMonth() + 1);
    let date = today.getDate();
    let day = today.getDay();
    let time = "";

    switch(month) {
        case 1: time += "Január "; break;
        case 2: time += "Február "; break;
        case 3: time += "Március "; break;
        case 4: time += "Április "; break;
        case 5: time += "Május "; break;
        case 6: time += "Júnuis "; break;
        case 7: time += "Július "; break;
        case 8: time += "Augusztus "; break;
        case 9: time += "Szeptember "; break;
        case 10: time += "Október "; break;
        case 11: time += "November "; break;
        case 12: time += "December "; break;
        default: break;
    }
    time += date + " ";
    switch(day) {
        case 0: time += ", Vasárnap"; break;
        case 1: time += ", Hétfő"; break;
        case 2: time += ", Kedd"; break;
        case 3: time += ", Szerda"; break;
        case 4: time += ", Csütörtök"; break;
        case 5: time += ", Péntek"; break;
        case 6: time += ", Szombat"; break;
        default: break;
    }

    return time;
}
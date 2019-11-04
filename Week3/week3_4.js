function handlingNa(input) {
    input.splice(1,2,  'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampun')
    input.splice(4,2,  'Pria', 'SMA Internasional Metro')
    input.s
    var ttl = input[3].split('/')
    var bulan =''
    switch (ttl[1]) {
        case '01':
            bulan = 'Januari'          
            break;
        case '02':
            bulan = 'Februari'          
            break;
        case '03':s
            bulan = 'Maret'          
            break;
        case '04':
             bulan = 'April'          
            break;
        case '05':
            bulan = 'Mei'          
            break;
        case '06':
            bulan = 'Juni'          
            break;
        case '07':
            bulan = 'Juli'          
            break;
        case '08':
            bulan = 'Agustus'          
                    break;
        case '09':
            bulan = 'September'          
            break;
        case '10':
            bulan = 'Oktober'          
            break;
        case '11':
            bulan = 'November'          
            break;
        case '12':
            bulan = 'Desember'          
            break;
        default:
            bulan = 'input False'
            break;
    }
     console.log(input)
     console.log(bulan)
     console.log(ttl.sort((a,b) => b-a));
     console.log(ttl.join('-'))
     console.log(input[1].slice(0,15));   
}

 var data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
handlingNa(data)
function dataHandling(input) {
    str=''
    for (let i = 0; i < input.length; i++) {
        var id = 'Nomor Id : ' + input[i][0]
        var nama = 'Nama lengkap : ' + input[i][1]
        var ttl = 'TTL : ' + input[i][2] + ' ' + input[i][3]
        var hobi = 'Hobi : ' + input[i][4]
        str +=  "\n" + id + "\n" + nama + "\n" + ttl + "\n" + hobi + "\n" 
    }
    return str
    
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input))
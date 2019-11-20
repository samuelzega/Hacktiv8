function average(std) {
  var hasil = {};
  for (const i of std) {
      if (!(hasil[i.jurusan])) {
          hasil[i.jurusan] = {
              rataRata: 0,
              students: []
          }
      }
      hasil[i.jurusan].students.push(i.nama)
      hasil[i.jurusan].rataRata = (((hasil[i.jurusan].rataRata) * (hasil[i.jurusan].students.length-1)) + i.nilai)/hasil[i.jurusan].students.length
  }
  return hasil
}
console.log(
  average([
    {
      nama: "titi",
      jurusan: "Teknik Informatika",
      nilai: 10
    },
    {
      nama: "ulfa",
      jurusan: "Teknik Elektro",
      nilai: 80
    },
    {
      nama: "sasa",
      jurusan: "Teknik Informatika",
      nilai: 20
    },
    {
        nama: "siapa ya",
        jurusan: "Teknik Informatika",
        nilai: 30
      }
  ])
);

/*
    output :
            {
                "ekonomi": {
                                rataRataNilai: number,
                                students: []
                           },
                "Fisika": {
                                rataRataNilai: number,
                                student: []
                          }
            }
*/

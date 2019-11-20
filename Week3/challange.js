function kedalaman(obj) {
    for (const keys in obj) {
        if (typeof(obj[keys]) === 'object') {
        return 1 + kedalaman(obj[keys])
        }
    }
    return 1
}
var obj ={
    a:2,
    b:3,
    c:{
        z:5,
        d:{
            k:8,
            j:9,
            l:{
                m:9,
                h:10,
                q:{
                    c:10,
                    d:20
                }
            }
        }
    }
}

console.log(kedalaman(obj));

//Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.


const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
    let longestword = "";
    for (const string of stringList) {
        if(string.length > longestword.length){
            longestword = string
        }
    }
    console.log(longestword)
}

findLongestWord(avengers)
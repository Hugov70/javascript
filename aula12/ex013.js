var agora = new Date()
var diaSem = agora.getDay()
/*
    vai de domingo a sábado
    vai de 0 a 6 
    domingo 0
    segunda 1
    terca 2
    quarta 3
    quinta 4
    sexta 5
    sabado 6
*/
switch (diaSem) {
    case 0: 
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda')
        break
    case 2: 
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4: 
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    
}
var agora = new Date()
var hora = agora.getHours()
if ( hora < 12 && hora >= 6) {
    console.log('Bom dia!')
} else if (hora < 18 && hora >= 12) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 24) {
    console.log('Boa noite' )
} else if (hora >= 0 && hora < 6) {
    console.log('Boa madrugada')
}

else {
    console.log('[ERRO] Hora superior a 24')
}
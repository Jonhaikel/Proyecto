
const formulario = document.querySelector(".form");
formulario.addEventListener("submit" , function(e){
    e.preventDefault();
    var Tarjeta = document.getElementById("tarjeta");
    var Fecha = document.getElementById("fecha");
    var cvv = document.getElementById("codigo");

    var Tar = Tarjeta.value;
    var dta = Fecha.value;
    var cod = cvv.value;
{
   if(Tar === "" || Tar ===" "){
        return swal.fire(
            'No ingreso el numero de tarjeta ',
            '',
            'warning'
        )
    }
    
   if(dta === "" || dta ===" "){
    return swal.fire(
        'No ingreso la fecha',
        '',
        'warning'
    )
   }
    if(cod === "" || cod ===" "){
        return swal.fire(
            'Ingreso un el codigo CVV',
            '',
            'warning'
        )
        }else{
            console.log('Valor: '+ val.value,',Tarjeta: ' + Tar.value,',Fecha: ' + dta.value,',CVV: ' + cod.value);
            swal.fire(
                'Compra Realizada',
                '',
                'success'
                );
                formulario.reset();
        }
        }
})
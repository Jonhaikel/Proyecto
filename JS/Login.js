
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit" , function(e){
    e.preventDefault();
    var Nom = document.getElementById("Nombre");
    var ape = document.getElementById("Apellidos");
    var email = document.getElementById("Correo");
    var password = document.getElementById("Contra");


    var Vnom = Nom.value;
    var Vape = ape.value;
    var Vemail = email.value;
    var Vcontra = password.value;
{
   if(Vnom === "" || Vnom ===" "){
        return swal.fire(
            'No ingreso el nombre',
            '',
            'warning'
        )
    }
    
   if(Vape === "" || Vape ===" "){
    return swal.fire(
        'No ingreso el Apellido',
        '',
        'warning'
    )
   }
    if(Vemail === "" || Vemail ===" "){
        return swal.fire(
            'Ingreso un Email',
            '',
            'warning'
        )
        }
        if(Vcontra === "" || Vcontra === " "){
            return swal.fire(
                'Debes ingresar una contraseña',
                '',
                'warning'
            )
        }else{
            console.log('Nombre: '+ Nom.value,',Apellido: ' + ape.value,',Correo: ' + email.value,',Contraseña: ' + password.value);
            swal.fire(
                'Registro Exitoso',
                '',
                'success'
                ); 
                formulario.reset();
        }
        


 }
})
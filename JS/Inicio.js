
const formulario = document.querySelector(".form");

formulario.addEventListener("submit" , function(e){
    e.preventDefault();

    var Correo = document.getElementById("Correo");
    var ContraID = document.getElementById("Contra");
{

        var Vcorreo = Correo.value;
        var Vcontra = ContraID.value;
    
        if(Vcontra === " " || Vcorreo ===" "|| Vcontra === ""|| Vcorreo === ""){
            return swal.fire(
                'Error al Iniciar Sesion',
                '',
                'error'
            )
        }
    
        var UsuarioE = false;
    
        usuario1.forEach(usuario1 =>{
    
            if(usuario1.email === Vcorreo && usuario1.contra === Vcontra){
                UsuarioE = true;
            }
        });

        usuario2.forEach(usuario2 =>{
    
            if(usuario2.email === Vcorreo && usuario2.contra === Vcontra){
                UsuarioE = true;
            }
        });

         if(UsuarioE){
            swal.fire(
                'Bienvenido a The Jybad Shop',
                '',
                'success'
            ).then((result) =>{
                if(result.isConfirmed){
                    window.location.href = "/Index.html"
                }
            })
        }else{
            return swal.fire(
                'La contraseña o el correo son incorrectas',
                '',
                'error'
    
            )
        }
    
    }

})


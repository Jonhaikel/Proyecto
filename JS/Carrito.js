localStorage.setItem("Cliente",'Jonhaikel');
localStorage.setItem("Correo",'Jonh@hotmail.com');
window.onload = function(){
    document.getElementById('cliente').value =localStorage.getItem("Cliente");
    document.getElementById('correo').value =localStorage.getItem("Correo");
}


localStorage.setItem("Cliente",'Dehjam');
localStorage.setItem("Correo",'Dehjam@hotmail.com');
window.onload = function(){
    document.getElementById('cliente').value =localStorage.getItem("Cliente");
    document.getElementById('correo').value =localStorage.getItem("Correo");
}


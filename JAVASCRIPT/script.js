let form = document.getElementById("loginForm");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let username = document.getElementById("nomeUsuario").value.trim();
    let password = document.getElementById("Senha").value.trim();
    if(username === "" || password === ""){
        alert("Preencha todos os campos");
    }else{
        //form.submit();
        alert("Informações de login enviadas");
    }
});
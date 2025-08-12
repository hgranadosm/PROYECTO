document.getElementById("btn-login").addEventListener("click", login); 

function validation_alert(ptext) {
    Swal.fire({
        icon: "error",
        title: '',
        html: `<div style="background-color: transparent; color: #333; border-radius: 8px; padding: 18px; text-align: center; font-size: 1rem; font-weight: 500;">
                <h3 style='font-size:1.3rem; font-weight:600; margin-bottom:18px;'>Asegúrate de que todos los campos estén completos</h3>
                <iframe width="320" height="240" frameborder="0" src="https://lottie.host/embed/889f8969-bef6-45eb-a988-15965bfa28c5/I8XhTMjfrO.lottie"></iframe>
                <span style='display:block; margin-bottom:12px;'>${ptext}</span>
            </div>`,
        background: '#f1ebe3',
        color: '#333',
        customClass: {
            popup: 'swal2-custom-popup',
            title: 'swal2-custom-title',
            confirmButton: 'swal2-custom-confirm',
        },
        showConfirmButton: true,
        confirmButtonText: "Intentar nuevamente",
        confirmButtonColor: "#8b0000",
    });
}

function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";

    let input = [user_input, pass_input]; 
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0; 
    let text = "";
 
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error"); 
        if (input[i] == "") { 
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error"); 
            error_count++;
        }
    }

    if (error_count == 0) {  
        if (user_input == username && pass_input == password) {
            Swal.fire({
                title: '',
                html: `<div style="background-color: transparent; color: #333; border-radius: 8px; padding: 18px; text-align: center; font-size: 1rem; font-weight: 500;">
                        <h3 style='font-size:1.3rem; font-weight:600; margin-bottom:18px;'>Acceso correcto</h3>
                        <iframe width="320" height="240" frameborder="0" src="https://lottie.host/embed/6cd7f08c-451a-459e-a3c0-f97a03e636af/IEcz3avkKm.lottie"></iframe>
                        <span style='display:block; margin-bottom:12px;'>Esperar un momento...</span>
                    </div>`,
                background: '#f1ebe3',
                color: '#333',
                customClass: {
                    popup: 'swal2-custom-popup',
                    title: 'swal2-custom-title',
                    confirmButton: 'swal2-custom-confirm',
                },
                showConfirmButton: false,
                timer: 4000,
            }).then(() => {
                window.location.href = "landing.html"; 
            });
        } else {
            text = "Usuario o contraseña incorrecta."; 
            validation_alert(text);
        }
    }
}

function limpiar(){
    document.getElementById('in-txt-user').value = "";
    document.getElementById('in-txt-pass').value = "";
}


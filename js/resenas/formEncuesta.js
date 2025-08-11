

emailjs.init("HKiIThGpeT7T6eLPK");

function showError(title, html) {
  Swal.fire({ icon: "error", title, html });
}

function getMissingFields() {
  const missing = [];
  if (!document.getElementById("fullName").value.trim()) missing.push("Nombre");
  if (!document.getElementById("phone").value.trim()) missing.push("Teléfono");
  const email = document.getElementById("email").value.trim();
  if (!email) missing.push("Correo");
  else if (!isEmailValid(email)) missing.push("Correo válido");
  if (!document.querySelector('input[name="experiencia"]:checked')) missing.push("Calificación experiencia general");
  if (!document.querySelector('input[name="atencionPersonal"]:checked')) missing.push("Calificación atención del personal");
  if (!document.querySelector('input[name="instalaciones"]:checked')) missing.push("Calificación calidad de instalaciones");
  return missing;
}

function collectParams() {

  return {
    fullName: document.getElementById("fullName").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    email: document.getElementById("email").value.trim(),
    experiencia: document.querySelector('input[name="experiencia"]:checked')?.value || "",
    atencionPersonal: document.querySelector('input[name="atencionPersonal"]:checked')?.value || "",
    instalaciones: document.querySelector('input[name="instalaciones"]:checked')?.value || "",
    observacion: document.getElementById("observacion").value.trim(),
  };
}

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}



function sendEmail() {
  return emailjs.sendForm('service_0afw3ti', 'template_lzvu2qd', '#formulario3', 't9OTo1lsARRmvaBAv');
}

document.getElementById("formulario3").addEventListener("submit", async function (e) {
  e.preventDefault();

  const missing = getMissingFields();
  if (missing.length) {
    const list = missing.map((m) => `<li>${m}</li>`).join("");
    showError("Campos faltantes", `<ul>${list}</ul>`);
    return;
  }

  try {
    await sendEmail();
    Swal.fire({
      icon: "success",
      title: "¡Gracias!",
      text: "Tu encuesta ha sido enviada exitosamente.",
    });
    document.getElementById("formulario3").reset();
  } catch (err) {
    console.error("EmailJS Error:", err);
    showError("Error al enviar", "Por favor intenta de nuevo más tarde.");
  }
});

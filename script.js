function handleSubmit() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const now = new Date().toLocaleString();

  if (name && email && message) {
    const feedback = `Danke, ${name}. Ihre Nachricht wurde am ${now} übermittelt.`;
    document.getElementById("feedback").innerText = feedback;
  } else {
    document.getElementById("feedback").innerText = "Bitte alle Felder ausfüllen.";
  }
}

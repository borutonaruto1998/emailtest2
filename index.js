function sendMail() {
  var params = {
    sendername: document.getElementById("sendername").value,
    to: document.getElementById("to").value,
    subject: document.getElementById("subject").value,
    replyto: document.getElementById("replyto").value,
    message: document.getElementById("message").value,

    // email: document.getElementById("email").value,
    // message: document.getElementById("message").value,
  };

  const serviceID = "service_5ohuv6o";
  const templateID = "template_3z77sce";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
      document.getElementById("sendername").value ="",
      document.getElementById("to").value ="",
      document.getElementById("subject").value ="",
      document.getElementById("replyto").value ="",
      document.getElementById("message").value ="",

        // document.getElementById("name").value = "";
        // document.getElementById("email").value = "";
        // document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}


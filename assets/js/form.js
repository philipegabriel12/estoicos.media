function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    function ValidateEmail(mail) 
        {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
            return (true)
        }
            alert("You have entered an invalid email address!")
            return (err)
        }

    function ValidateMessage(msg)
    {
        if (msg.length < 20){
            alert("Atleast one of your informations are incorrect.")
            return (err)
        } else if (msg.length > 1000){
            alert("Message is too long.")
            return (err)
        }
    }

    function ValidateName(username)
    {
        if (username.length == 0){
            alert("Atleast one of your informations are incorrect.")
            return (err)
        }
    }
    ValidateName(params.name)
    ValidateEmail(params.email)
    ValidateMessage(params.message)
    const serviceID = "service_vmj6myf";
    const templateID = "template_tifauuj";
  
      emailjs.send(serviceID, templateID, params)
      
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message was sent successfully.")
  
      })
      .catch(err=>console.log(err));
  
  }

  
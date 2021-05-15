function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toEmail").value,
        message: document.getElementById("msg").value,
    
    };
    emailjs.send('service_hxs58jk', 'template_8200yn9', tempParams )
    .then(function(res){
        console.log("success", res.status);
    })
}
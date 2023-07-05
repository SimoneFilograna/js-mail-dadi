const mailAddress = document.getElementById("email-input");
const btnSend = document.getElementById("btn")
const mailList = ["giacomo@gmail.com", "nicola@gmail.com", "francesco@gmail.com", "alessio@gmail.com", "leonardo@gmail.com"];


btnSend.addEventListener("click", function(){
    const mailInputElement = mailAddress.value;
    console.log(mailInputElement);
    console.log(mailList)
    let emailTrovata = false;

    for(let i = 0; i < mailList.length; i++){
        const currentmail = mailList[i]    
        if (currentmail === mailInputElement) {
            emailTrovata = true
        }       
        }

    if (emailTrovata === true){
        alert("Complimenti, la tua email è nel nostro database")
    } else {
        alert("Ci dispiace ma la tua email non risulta essere nel nostro database")
    } 
})
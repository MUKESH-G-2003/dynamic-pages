

function Submit() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const form = document.getElementById("form");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    const isValid = emailPattern.test(email);
    if (name == "") {
        alert("Invalid input");
        return false;
    }
    if (!isValid) {
        alert("Invalid email address");
        return false;
    }
    if (isNaN(phone) || phone.length!=10){
        alert("Phone Number is invalid");
        return false;
    }
    else {
        alert("form submited successfully");
        form.reset()
        return true;
    }
}

function Cancel() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    name = "";
    email = "";
    phone = "";
}

const num = 31244234;
console.log(typeof (num));
const str = "jljldfsa";
console.log(typeof (str));
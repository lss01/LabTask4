(function() {
    ('[data-toggle="tooltip"]').tooltip()
})

function loadalert(){
    alert("WELCOME ! Remember that it’s not how much we give, but how much love we put into giving.");
}

function ListInfo() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var amount = document.getElementById("amount").value;

    if (name == "" && email == "" && phone == "" && amount == "Select Amount") {
        var result = document.getElementById("result");
        var close = document.getElementById("close")
        result.innerHTML = "Please complete your information.";
        result.style.height="40px";
        result.style.width="400px";
        result.style.fontSize="20px";
        result.style.align = "center";
        result.style.background = "#B2D3C2";
        result.style.color ="rgb(207, 22, 22)";
        return false;
    }
    else if (name == ""){
        var result = document.getElementById("result");
        result.innerHTML = " Please enter you name.";
        result.style.align = "center";
        result.style.background = "#B2D3C2";
        result.style.color ="rgb(207, 22, 22)";
        result.style.height="40px";
        result.style.width="400px";
        return false;
    }
    else if (email == ""){
        var result = document.getElementById("result");
        result.style.align="center";
        result.style.height="40px";
        result.style.width="400px";
        result.style.fontSize="20px";
        result.innerHTML = " Please enter your email.";
        result.style.background = "#B2D3C2";
        result.style.color ="rgb(207, 22, 22)";
        return false;
    }
    else if (phone == ""){
        var result = document.getElementById("result");
        result.innerHTML = "Please enter your phone number.";
        result.style.align = "center";
        result.style.fontSize="20px";
        result.style.height="30px";
        result.style.width="400px";
        result.style.background = "#B2D3C2";
        result.style.color ="rgb(207, 22, 22)";
        return false;
    }
    else if (amount == "Select Amount"){
        var result = document.getElementById("result");
        result.innerHTML = "Please select your amount";
        result.style.height="40px";
        result.style.width="400px";
        result.style.fontSize="20px";
        result.style.align = "center";
        result.style.background = "#B2D3C2";
        result.style.color ="rgb(207, 22, 22)";
        return false;
    }
    else
        var result = document.getElementById("result");
        result.innerHTML = "Thank you for donation!";
        result.style.height="40px";
        result.style.fontSize="20px"
        result.style.width="400px";
        result.style.align = "center";
        result.style.background = "#FF7F7F";
        result.style.color ="white";
        alert("Thanks for your donation. \nName: " + name + "\nAmount: RM" + amount);
        return true;
}


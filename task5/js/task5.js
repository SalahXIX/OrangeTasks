document.getElementById('login').classList.add('hidden');
function registering(){
    const fullname= document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password= document.getElementById('password').value;
    sessionStorage.setItem('EmailAdded', email);
    sessionStorage.setItem('PasswordAdded', password);
    document.getElementById('register').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}

function login(){
    const InputedEmail = document.getElementById('login-email').value;
    const InputedPassword = document.getElementById('login-password').value;
    const OriginalEmail = document.getElementById('EmailAdded').value;
    const OriginalPassword = document.getElementById('PasswordAdded').value;
    if (InputedEmail === OriginalEmail && InputedPassword === OriginalPassword){
        alert("You may proceed")
        document.getElementById('login').classList.add('hidden');
    } else {
        alert ("")
    }
}
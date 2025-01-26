const inputUsername = document.getElementById('inputUsername');
const inputPassword = document.getElementById('inputPassword');
const btSubmit = document.getElementById('btSubmit');
const container = document.getElementById('container');


const userInfo = new Map();


getUsername = () => {
    const userName = inputUsername.value;
    const userPassword = inputPassword.value;
    const textSignupStatus = document.createElement('p');

    if(userName && userPassword && validateEmail(userName)){
        userInfo.set(userName, userPassword);
        console.log(userInfo);
        textSignupStatus.textContent = 'You were succesfully signed in!';
        container.appendChild(textSignupStatus);
        return true;
        
    } else if(userInfo.has(userName)) {
        alert('This username is already used!');
        return false;
    } else if (validateEmail(userName) === false){
        alert('Incorrect email!');
    } else {
        alert('error!');
    }
}

redirectToIndex = () => {
    window.location.href = 'index.html';
}

btSubmit.addEventListener('click', (event) =>{
    let signUpResult = getUsername();
    if(signUpResult) {
        setTimeout(redirectToIndex, 1500);
    }
})

validateEmail = (email) => {
    const expression = /^[a-z]+-?@dlit\.dp\.ua$/;
    return expression.test(email);
}
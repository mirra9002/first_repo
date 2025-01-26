const inputUsername = document.getElementById('inputUsername');
const inputPassword = document.getElementById('inputPassword');
const btSubmit = document.getElementById('btSubmit');
const container = document.getElementById('container');


const userInfo = new Map();


getUsername = () => {
    const userName = inputUsername.value;
    const userPassword = inputPassword.value;
    const textSignupStatus = document.createElement('p');

    if(userName && userPassword && !(userInfo.has(userName))){
        userInfo.set(userName, userPassword);
        console.log(userInfo);
        textSignupStatus.textContent = 'You were succesfully signed in!';
        container.appendChild(textSignupStatus);
        return true;
        
    } else {
        alert('This username is already used!');
        textSignupIsShowed = true;
        return false;
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


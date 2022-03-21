let users =[
    {uname:"test",pass:"1"}    
]

const btnStartLogIn = document.getElementById("btn-login-fristpage");
const logInModal = document.getElementById("add-modal");
const backdrop = document.getElementById('backdrop');
const btnCancel = document.getElementById('btn-cancel-modal');
const btnLogIn = document.getElementById('btn-login-modal');
const userInputs = logInModal.querySelectorAll('input');
const wlecomeText = document.getElementById("when-logged");
const btnPublishMssg = document.getElementById("publish-mssg");
const publishModal = document.getElementById("publish_modal");
const btnCancelPublishModal = document.getElementById("btn-cancel-publish");
const btnSubmitMssg = document.getElementById('btn-publish');
const message = document.getElementById("text");
const displayedMessage = document.getElementById('message');
const password = document.getElementById('pssword');
const inputUsername = document.getElementById('usrname');
const btnInfo = document.getElementById("btn-show-info");

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const showLogInModal = () => {
    logInModal.classList.add('visible');
    toggleBackdrop();
};

const removeLogInModal = () => {
    logInModal.classList.remove('visible');
    toggleBackdrop();    
    inputUsername.value = "";
    password.value = "";
};

const removeLogInBtn = () => {
    btnStartLogIn.classList.add('invisible');
    wlecomeText.classList.add("visible");
};

const showBtnPublish = () => {
    btnPublishMssg.classList.remove("invisible");
};

const showModalPublish = () => {
    publishModal.classList.add("visible");
    toggleBackdrop();
};

const removeModalPublish = () => {
    publishModal.classList.remove('visible');
    toggleBackdrop();
    
    message.value = "";
};

const pasteMssg = () => {
    displayedMessage.innerHTML = message.value;
    removeModalPublish();
};

const changePages = () => {
    window.location.replace("info_page.html")
}

const checkCredits = () => {
    if (userInputs[0].value == users[0].uname && userInputs[1].value == users[0].pass) {
        removeLogInModal();
        removeLogInBtn();
        showBtnPublish();
    } else {
        alert("Wrong username or password!");
    }
};


btnStartLogIn.addEventListener('click', showLogInModal);
btnCancel.addEventListener('click', removeLogInModal);
btnLogIn.addEventListener('click', checkCredits);
btnPublishMssg.addEventListener("click", showModalPublish);
btnCancelPublishModal.addEventListener('click', removeModalPublish);
btnSubmitMssg.addEventListener('click', pasteMssg);
btnInfo.addEventListener('clicl', changePages);
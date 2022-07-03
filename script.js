
    function goHome() {
    window.open("https://roozbehzhuleh.github.io/AxisNFTHome/", "_blank");
    }


const createAccount = document.querySelector(".create-account");
const signInBtn = document.querySelector(".sign-in__btn");
const nameInput = document.querySelector(".name");

createAccount.addEventListener("click", () => {
    signInBtn.innerText = "Sign Up";
    nameInput.classList.toggle("display-block");
})
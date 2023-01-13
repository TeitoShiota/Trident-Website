const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
function validate() {
    if (!regex.test(document.newsletterForm.email.value)) {
        alert("Indtast venligst en gyldig e-mail");
        return false;
    } else {
        alert("Du er nu tilmeldt nyhedbrevet");
    }
}
function formvalid() {

    let email = document.querySelector('form input[name="email"]'),
        tel = document.querySelector('form input[name="tel"]'),
        btn = document.querySelector('form button[type="submit"]');

    function validateEmail(email) {
        email.addEventListener('change', function () {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
                return (true)
            }
           alert("Вы указали некорректный адрес");
           email.value = ""; 
        });
    }

    function validateTel(tel) {
        tel.addEventListener('keyup', function () {
            if (/^[0-9+]*$/.test(tel.value))
            {
              return (true)
            }
            alert("Вы указали некорректный телефон");
            tel.value = "";
        });
    }

    validateEmail(email);
    validateTel(tel);
}

export {
    formvalid
};
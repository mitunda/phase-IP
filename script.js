document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    console.log('Email:', email);
    console.log('Phone:', phone);
});
$(document).ready(function() {
    $('form').on('submit', function(event) {
      event.preventDefault();
      validate();
    });
  });
  
  function validate_firstname() {
    let fname = $('#fname').val();
    var name_regx = /^[a-zA-Z]+$/;
  
    if (fname == "") {
      $('#fname-error').html("Firstname can't be Empty");
      return false;
    } else if (!name_regx.test(fname)) {
      $('#fname-error').html("Firstname only contains alphabet");
      return false;
    } else if (fname.length < 2) {
      $('#fname-error').html("Firstname should be at least 2 letters long");
      return false;
    } else {
      $('#fname-error').html("");
      return true;
    }
  }
  
  
  function validate_contact() {
    let contact = $('#contact').val();
    var number_regx = /^\d+$/;
  
    if (contact == "") {
      $('#contact-error').html("Contact can't be Empty");
      return false;
    } else if (!number_regx.test(contact)) {
      $('#contact-error').html("Contact only contains Number");
      return false;
    } else if (contact.length !== 10) {
      $('#contact-error').html("Contact Number should have exactly 10 digits");
      return false;
    } else {
      $('#contact-error').html("");
      return true;
    }
  }
  

  
  function validate_dob() {
    let dob = $('#dob').val();
    let year = dob.slice(0, 4);
    let yearInt = parseInt(year);
  
    function getAge(d1) {
      let g_date = new Date();
      let date_of_today = g_date.getFullYear();
      if (date_of_today - yearInt < 18) {
        $('#dob-error').html("This Account is valid for 18+. Please select your original date of birth");
        return false;
      } else {
        $('#dob-error').html("");
        return true;
      }
    }
  
    return getAge(dob);
  }
  
  function validate_email() {
    let email = $('#email').val();
    var email_regx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (email == "") {
      $('#email-error').html("Email can't be Empty");
      return false;
    } else if (!email_regx.test(email)) {
      $('#email-error').html("Please enter a valid email");
      return false;
    } else {
      $('#email-error').html("");
      return true;
    }
  }
  
  function validate_password() {
    let password = $('#password').val();
    var password_regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  
    if (password == "") {
      $('#password-error').html("Password can't be Empty");
      return false;
    } else if (!password_regx.test(password)) {
      $('#password-error').html("* Password length should be 6 to 16 *<br>* Password should contain at least 1 number and 1 special character *");
      return false;
    } else {
      $('#password-error').html("");
      return true;
    }
  }
  
  function validate_c_password() {
    let c_password = $('#c-password').val();
    let password = $('#password').val();
  
    if (c_password !== password) {
      $('#c-password-error').html("Please enter the same password");
      return false;
    } else {
      $('#c-password-error').html("");
      return true;
    }
  }
  
  function validate_address() {
    let address = $('#address').val();
    var address_regx = /^[a-zA-Z0-9\s,.'-]{3,}$/;
  
    if (address == "") {
      $('#address-error').html("Address can't be Empty");
      return false;
    } else if (!address_regx.test(address)) {
      $('#address-error').html("Please write the address properly");
      return false;
    } else if (address.length > 100) {
      $('#address-error').html("Address length should not exceed 100 characters");
      return false;
    } else {
      $('#address-error').html("");
      return true;
    }
  }
  
 
    function validate() {
      if (
        validate_firstname() &&
        validate_contact() &&
        validate_dob() &&
        validate_email() &&
        validate_password() &&
        validate_c_password() 
      ) {
        // window.location.href = '../form/welcome.html';
        window.location = '../form/welcome.html';
      }
    }
    
  
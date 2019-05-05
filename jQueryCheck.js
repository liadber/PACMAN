//script to do all the checks in registration

$(document).ready(function () {
    //username
    jQuery.validator.addMethod("letters_check", function(value, element) {
        return this.optional(element) || /^[a-zA-Z]+$/.test(value);
    }, "User name need to contain only letters. Please try again.");
    jQuery.validator.addMethod("unique_username", function(value, element) {
        for(var i=0;i<users.length;i++)
        {
            if(users[i].user_name === value)
                return false;
        }
        return true;
    }, "This username exists. Please try another one.");

    //password
    jQuery.validator.addMethod("password_check", function(value, element) {

        return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
    }, "Password need to contain only letters and numbers. Please try again");



    $('#signUpForm').validate({
        rules: {
            user_name: {
                required: true,
                unique_username: true
            },
            pass_w: {
                required: true,
                minlength: 8,
                password_check: true
            },
            firstname: {
                required: true,
                letters_check: true
            },
            lastname: {
                required: true,
                letters_check: true
            },
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) {

            signup();

        }
    });
});
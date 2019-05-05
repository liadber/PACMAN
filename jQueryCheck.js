//script to do all the checks in registration

$(document).ready(function () {

       //username
    jQuery.validator.addMethod("unique_username", function(value, element) {
        for(var i=0;i<users.length;i++)
        {
            if(users[i].user_name === value)
                return false;
        }
        return true;
    }, "This username exists. Please try another one.");


    jQuery.validator.addMethod("letters_check", function(value, element) {
        return this.optional(element) || /^[a-zA-Z]+$/.test(value);
    }, "User name need to contain only letters. Please try again.");



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
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            user_name: {
                required: "Please enter a username",
            },
            pass_w: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long"
            },
            email: "Please enter a valid email address",
        },

        submitHandler: function(form) {
            Submit();
        }
    });
});

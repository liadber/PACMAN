//script to do all the checks in registration

/**
$(document).ready(function () {
    $("#signUpForm").validate({
        rules: {
            user_name: {
                required: true
            },
            pass_w: {
                required: true,
                minlength: 8,
                regexp: '^[a-zA-Z0-9]*$'
            },
            firstname: {
                required: true,
                regexp: '^[a-zA-Z]*$'
            },
            lastname: {
                required: true,
                regexp: '^[a-zA-Z]*$'
            },
            email: {
                required: true,
                email: true
            },
            birthday: {
                required: true,
            }
        },
        massages: {
            user_name: {
                required: "This field cannot be empty",
            },
            pass_w: {
                required: "This field cannot be empty",
                minlength: "password must be at least 8 characters",
                regexp: "password must contain only numbers and letters",
            },
            firstname: {
                required: "This field cannot be empty",
                regexp: "first name must contains only letters",
            },
            lastname: {
                required: "This field cannot be empty",
                regexp: "last name must contains only letters",
            },
            email: {
                required: "This field cannot be empty",
                email: "Please enter a valid email address"
            },
            birthday: {
                required: "This field cannot be empty",
            }
        }
    });
    jQuery.validator.addMethod(
        'regexp',
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );
});
**/

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
        submitHandler: function (form) {

            signup();

        }
    });
});

$(document).ready(function() {
    $('#defaultForm').formValidation({
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        }
    });

    // Replace 'PUBLIC_KEY' with your public key
    Recaptcha.create('PUBLIC_KEY', 'recaptcha', {
         theme: 'white',
         callback: captchaLoaded
    });

    function captchaLoaded() {
        $('#defaultForm')
            .on('added.field.fv', function(e, data) {
                // The field 'recaptcha_response_field' has just been added
                if (data.field === 'recaptcha_response_field') {
                    // Find the icon
                    var $icon = data.element.data('fv.icon');

                    // Move icon to other position
                    $icon.insertAfter('#recaptcha');
                }
            })
            // Add new field after loading captcha
            .formValidation('addField', 'recaptcha_response_field', {
                validators: {
                    notEmpty: {
                        message: 'The captcha is required and can\'t be empty'
                    },
                    remote: {
                        type: 'POST',
                        url: 'recaptcha.php',
                        message: 'The captcha is not valid',
                        data: function() {
                            return {
                                recaptcha_challenge_field: $('#defaultForm').find('[name="recaptcha_challenge_field"]').val()
                            };
                        },
                        // Set it to enough time that you think the user complete typing the captcha
                        delay: 1000
                    }
                }
            });
    };
});


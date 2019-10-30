$(function() {
    $('#contactForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'name': {
                validators: {
                    notEmpty: {
                        message: 'Your Name  is required and cannot be empty'
                    }
                }
            },
            '_replyto': {
                validators: {
                    notEmpty: {
                        message: 'Your Email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not valid'
                    }
                }
            },
            '_subject': {
                validators: {
                    notEmpty: {
                        message: 'The Subject is required and cannot be empty'
                    },
                    stringLength: {
                        max: 100,
                        message: 'The Subject must be less than 100 characters long'
                    }
                }
            },
            'message': {
                validators: {
                    notEmpty: {
                        message: 'A Message is required and cannot be empty'
                    },
                    stringLength: {
                        max: 900,
                        message: 'The Message must be less than 900 characters long'
                    }
                }
            }
        }
    });

});

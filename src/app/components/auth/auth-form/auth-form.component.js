var authForm = {
    // Binding to the attributes on the auth-form compenent. This is a stateless component - will accept data and pass through data through the bindings
    bindings: {
        user: '<', //one way data flow
        button: '@', //interpolated string
        message: '@', //interpolated string
        onSubmit: '&' //callback function
    },
    templateUrl: './auth-form.html',
    controller: 'AuthFormController'
};

angular
    .module('components.auth')
    .component('authForm', authForm);
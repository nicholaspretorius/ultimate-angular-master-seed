function LoginController(AuthService) {
    var ctrl = this;

    // $onInit lifecycle hook for intialisation logic
    ctrl.$onInit = function() {
        ctrl.error = null; // When there is an error message from Firebase when creating a new user
        ctrl.user = {
            email: '',
            password: ''
        };
    };

    // User object comes up from stateless register component to stateful register component
    ctrl.loginUser = function(event) {
        //console.log(event.user);
        return AuthService
            .login(event.user)
            .then(function(user){
                //success
                console.log("USER: ", user);
            }, function(reason){
                //error
                console.log("ERROR: ", reason);
                ctrl.error = reason.message;
            })
    };
}

angular
    .module('components.auth')
    .controller('LoginController', LoginController);
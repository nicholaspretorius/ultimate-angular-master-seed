function AuthFormController() {
    var ctrl = this;

    // Lifecycle hook - using $onChanges in the child component to clone the created object
    ctrl.$onChanges = function(changes) {
        //do something with changes
        if (changes.user) {
            ctrl.user = angular.copy(ctrl.user);
        }
    }

    ctrl.submitForm = function() {
        ctrl.onSubmit({
            $event: {
                user: ctrl.user
            }
        });
    }

}

angular
    .module('components.auth')
    .controller('AuthFormController', AuthFormController);
function ContactNewController(ContactService, $state) {
    var ctrl = this;

    ctrl.$onInit = function(){
        ctrl.contact = {
            name: '',
            email:'',
            job: '',
            social: {
                facebook: '',
                github: '',
                twitter: '',
                linkedin: ''
            },
            tag: 'none'
        }
    }

    ctrl.createNewContact = function(event) {
        //Delegate event back into stateless component which is a child component of this component
        //Call ContactService to create contact
        return ContactService
            .createNewContact(event.contact)
            .then(function(contact){
                // success
                console.log(contact);
                $state.go('contact', {
                    id: contact.key
                })
            });

    }
}

angular
    .module('components.contact')
    .controller('ContactNewController', ContactNewController);
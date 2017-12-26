function ContactsController($filter, $state, $timeout) {
    var ctrl = this;
    var contacts = ctrl.contacts;
    $timeout(function(){
        console.log("ctrl.contacts: ", ctrl.contacts);
        ctrl.filteredContacts = $filter('contactsFilter')(ctrl.contacts, ctrl.filter);
    }, 1000);

    ctrl.goToContact = function(event) {
        $state.go('contact', { 
            id: event.contactId 
        });
    }
}

angular
    .module('components.contact')
    .controller('ContactsController', ContactsController);
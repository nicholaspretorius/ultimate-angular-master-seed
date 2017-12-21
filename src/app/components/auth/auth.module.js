angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])

  .config(function ($firebaseRefProvider){
    var config = {
      apiKey: "AIzaSyAEu6h3kZ1d-Ec0iDPESMEAelZjdo-Rxz8",
      authDomain: "contacts-manager-a4773.firebaseapp.com",
      databaseURL: "https://contacts-manager-a4773.firebaseio.com",
      projectId: "contacts-manager-a4773",
      storageBucket: "contacts-manager-a4773.appspot.com",
      messagingSenderId: "944334513855"
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      });

    firebase.initializeApp(config);
  });
  

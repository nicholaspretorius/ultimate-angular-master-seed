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
  })
  .run(function($transitions, $state, AuthService){
    $transitions.onStart({
      to: function(state){
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return AuthService
        .requireAuthentication()
        .catch(function() {
          return $state.target('auth.login');
        });
    });
    // Once authenticated or logged in, prevent user from going to login/register without logout.
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });
  

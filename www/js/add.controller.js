(function() {
  'use strict';
  angular
    .module('notesApp')
    .controller('AddController', AddController);

  AddController.$inject = ['$state', 'NotesFactory'];
  function AddController($state, NotesFactory) {
    var vm = this;
    vm.note = {
      id: new Date().getTime().toString(),
      title: '',
      description: ''
    };
    vm.save = save;

    ////////
    function save() {
      NotesFactory.createNote(vm.note);
      $state.go('list');
    }
  }
}());

(function() {
  'use strict';
  angular
    .module('notesApp')
    .controller('EditController', EditController);

  EditController.$inject = ['$state', 'NotesFactory'];
  function EditController($state, NotesFactory) {
    var vm = this;
    vm.note = angular.copy(NotesFactory.getNote($state.params.noteId));
    vm.save = save;

    ////////
    function save() {
      NotesFactory.updateNote(vm.note);
      $state.go('list');
    }
  }
}());

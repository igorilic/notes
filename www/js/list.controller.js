(function() {
  'use strict';
  angular
    .module('notesApp')
    .controller('ListController', ListController);

  ListController.$inject = ['NotesFactory'];
  function ListController(NotesFactory) {
    var vm = this;
    vm.notes = NotesFactory.notes;
    vm.remove = remove;

    //////////////////
    function remove(noteId) {
      NotesFactory.remove(noteId);
    }
  }
}());

(function() {
  'use strict';
  angular
    .module('notesApp')
    .controller('ListController', ListController);

  ListController.$inject = ['NotesFactory'];
  function ListController(NotesFactory) {
    var vm = this;
    vm.reordering = false;

    vm.notes = NotesFactory.notes;
    vm.remove = remove;
    vm.move = move;
    vm.toggleReordering = toggleReordering;

    //////////////////
    function toggleReordering() {
      if (vm.reordering === false) {
        vm.reordering = true;
      } else {
        vm.reordering = false;
      }
    }
    function move(note, fromIndex, toIndex) {
      NotesFactory.move(note, fromIndex, toIndex);
    }

    function remove(noteId) {
      NotesFactory.remove(noteId);
    }
  }
}());

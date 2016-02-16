(function() {
  'use strict';
  angular
    .module('notesApp')
    .factory('NotesFactory', NotesFactory);

  function NotesFactory() {
    var service = {
      notes: [],
      getNote: getNote,
      updateNote: updateNote,
      createNote: createNote
    };

    return service;
    ////////////

    function createNote(note) {
      service.notes.push(note);
    }

    function getNote(noteId) {
      for (var i = 0; i < service.notes.length; i++) {
        if (service.notes[i].id === noteId) {
          return service.notes[i];
        }
      }
      return undefined;
    }

    function updateNote(note) {
      for (var i = 0; i < service.notes.length; i++) {
        if (service.notes[i].id === note.id) {
          service.notes[i] = note;
          return;
        }
      }
    }
  }
}());

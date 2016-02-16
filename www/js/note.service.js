(function() {
  'use strict';
  angular
    .module('notesApp')
    .factory('NotesFactory', NotesFactory);

  function NotesFactory() {
    var notes = angular.fromJson(window.localStorage['notes'] || '[]');
    var service = {
      notes: notes,
      getNote: getNote,
      updateNote: updateNote,
      createNote: createNote,
      remove: remove
    };

    return service;
    ////////////

    function remove(noteId) {
      for (var i = 0; i < service.notes.length; i++) {
        if (service.notes[i].id === noteId) {
          service.notes.splice(i, 1);
          persist();
          return;
        }
      }

    }

    function createNote(note) {
      service.notes.push(note);
      persist();
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
          persist();
          return;
        }
      }
    }

    function persist() {
      window.localStorage['notes'] = angular.toJson(notes);
    }
  }
}());

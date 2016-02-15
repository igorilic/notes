(function() {
  'use strict';
  angular
    .module('notesApp')
    .factory('NotesFactory', NotesFactory);

  function NotesFactory() {
    var service = {
      notes: [
        {
          id: '1',
          title: 'First Note',
          description: 'This is the First note'
        },
        {
          id: '2',
          title: 'Second Note',
          description: 'This is the Second note'
        }

      ],
      getNote: getNote,
      updateNote: updateNote
    };

    return service;

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

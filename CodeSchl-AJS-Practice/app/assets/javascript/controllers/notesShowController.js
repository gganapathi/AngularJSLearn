/**
 * Created by Ganapathi on 21-01-2017.
 */
angular.module('NoteWrangler').controller('NotesShowController',function(Note, $scope, $routeParams, $location){
    $scope.note = Note.get({id: $routeParams.id});
    $scope.deleteNote = function(note){
      note.$remove().then(function(){
          $location.path('/notes');
      });
    };
});

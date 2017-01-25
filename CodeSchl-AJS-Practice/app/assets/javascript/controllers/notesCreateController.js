/**
 * Created by Ganapathi on 21-01-2017.
 */
angular.module('NoteWrangler').controller('NotesCreateController',function(Note, $scope, $location){
    $scope.note = new Note();
    $scope.isSubmitting = false;
    $scope.saveNote = function(note){
        $scope.isSubmitting = true;
        note.$save().then(function(){
            //then means generally a success of call
            $location.path("/notes");
        }).finally(function(){
            $scope.isSubmitting = false;
        });
    }
});
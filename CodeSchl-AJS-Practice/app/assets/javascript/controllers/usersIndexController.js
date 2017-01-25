/**
 * Created by Ganapathi on 24-01-2017.
 */
angular.module('NoteWrangler').controller('UsersIndexController',function(User,$scope){
    $scope.users = User.query();
});
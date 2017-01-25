/**
 * Created by Ganapathi on 24-01-2017.
 */
angular.module('NoteWrangler').controller('UsersShowController',function(User, $scope, $routeParams){
    $scope.user = User.get({id: $routeParams.id});
});
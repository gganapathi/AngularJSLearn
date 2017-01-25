/**
 * Created by Ganapathi on 24-01-2017.
 */
angular.module('NoteWrangler').directive('nwPageNav',function(){
    return {
        replace: true,
        resctrict: 'E',
        templateUrl:'assets/templates/directives/nwPageNav.html',
        controller: function($scope, $location){
            $scope.isPage = function(name){
                //The below reg exp to compare path and making active the item
                return new RegExp("/"+name+"($|/)").test($location.path());
            };
        }
    }
});
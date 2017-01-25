/**
 * Created by Ganapathi on 24-01-2017.
 */
angular.module('NoteWrangler').factory('User',function($resource){
    return $resource('/users/:id');
});
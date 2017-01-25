/**
 * Created by Ganapathi on 24-01-2017.
 */
angular.module('NoteWrangler').factory('Category',function($resource){
    return $resource("/categories/:id");
});
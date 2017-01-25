/**
 * Created by Ganapathi on 23-01-2017.
 */
angular.module('NoteWrangler').factory('Note',function($resource){

    return $resource('/notes/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        }
    });
});

/**
 * Created by Ganapathi on 25-01-2017.
 */
//title is an attribute and we are creating directive for that so 'title'
angular.module('NoteWrangler').directive('title',function($timeout){
    return function(scope, element,attr){
        $timeout(function(event){
            //because tooltip is a jQuery plugin it is good to wrap element with dollar sign
            $(element).tooltip();
        });

        //every time when a directive broke the below on will get called and to clear the tooltips on broke of directive we are destroying it
        //otherwise there are chances to get memory leaks due to un destroyed tooltips
        scope.$on('$destroy',function(){
           $(element).tooltip('destroy');
        });
    };
});
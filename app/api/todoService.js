/**
 * Created by ivana on 28.06.15..
 */

define(['appModule'], function (module) {

    'use strict';

    return module.registerFactory('todoService', function (apiService) {

        return {

            'getToDoList': function () {
                return apiService.request({
                    'method': 'GET',
                    'url': '/todos'
                })
            },

            'getToDo': function (id) {
                return apiService.request({
                    'method': 'GET',
                    'url': '/todos/',
                    params: {
                        'id': id
                    }
                })
            },

            'createToDo': function (todo) {
                return apiService.request({
                    'method': 'POST',
                    'url': '/todos',
                    'data': todo
                })
            }
        };
    })
});

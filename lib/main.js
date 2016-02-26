import Vue from 'vue';
import BootstrapCss from 'bootstrap/css/bootstrap.min.css!';
import MediaManager from './media-manager/script.js';

Vue.config.debug = true;

var App = new Vue({
    el: '#solaria-media-manager',
    data: function () {
        return {
            sidebar: {
                currentFolder: {
                    path: '/',
                    files: [
                        {
                            type: 'folder',
                            name: 'First Folder',
                            path: '/First Folder/',
                            files: [
                                {
                                    type: 'file',
                                    fileType: 'image',
                                    fileExtension: 'jpg',
                                    name: 'First File',
                                    path: '/First Folder/First File.jpg',
                                },
                                {
                                    type: 'folder',
                                    name: 'First Folder',
                                    path: '/First Folder/First Folder',
                                    files: [
                                        {
                                            type: 'file',
                                            fileType: 'image',
                                            fileExtension: 'jpg',
                                            name: 'First File',
                                            path: '/First Folder/First Folder/First File.jpg',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'file',
                            fileType: 'image',
                            fileExtension: 'jpg',
                            name: 'First File'
                        }
                    ]
                }
            },
            main: {
                currentFolder: {
                    path: '',
                    files: [
                        {
                            type: 'file',
                            fileType: 'image',
                            fileExtension: 'jpg',
                            name: 'First File'
                        },
                        {
                            type: 'folder',
                            name: 'First Folder'
                        }
                    ]
                }
            }
        }
    },
    components: {
        'media-manager': MediaManager
    }
});
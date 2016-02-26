import Vue from 'vue';

import File from './components/file/script.js';
import FileList from './components/file-list/script.js';
import FileListTree from './components/file-list/tree/script.js';
import FileListFolder from './components/file-list/folder/script.js';
import Path from './components/path/script.js';

Vue.component('file', File);
Vue.component('file-list', FileList);
Vue.component('tree', FileListTree);
Vue.component('folder', FileListFolder);
Vue.component('path', Path);

import template from './template.html!text';
import styles from './styles.css!css';

export default Vue.extend({
    template: template,
    props: ['main', 'sidebar']
});
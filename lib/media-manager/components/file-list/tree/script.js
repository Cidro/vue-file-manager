import Vue from 'vue';

import styles from './styles.css!css';
import template from './template.html!text';

export default Vue.extend({
    template: template,
    props: ['currentFolder'],
    methods: {
        handleFileClick: function (file) {
            if(typeof file.selected == 'undefined')
                Vue.set(file, 'selected', false);

            file.selected = !file.selected;
            this.$dispatch('file-selected', file);
        },
        handleClickExpandFolder: function (file) {
            if(file.type != 'folder')
                return false;
            if(typeof file.expanded == 'undefined')
                Vue.set(file, 'expanded', false);

            console.log(file);
            file.expanded = !file.expanded;
        }
    }
});
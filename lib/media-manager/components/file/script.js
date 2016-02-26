import Vue from 'vue';

import template from './template.html!text';
import styles from './styles.css!css';

export default Vue.extend({
    template: template,
    computed: {
        fileClass: function() {
            if(this.file.type == 'folder')
                return 'file-type-folder';

            return 'file-type-' + this.file.fileType; 
        }
    },
    props: ['file']
});
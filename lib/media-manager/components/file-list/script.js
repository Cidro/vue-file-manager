import Vue from 'vue';

import template from './template.html!text';

export default Vue.extend({
    template: template,
    props: ['currentFolder', 'viewType'],
    ready: function() {
        console.log(this.viewType);
    },
    events: {
        'file-selected': function (index) {
            
        }
    }
});
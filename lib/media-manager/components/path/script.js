import Vue from 'vue';

import styles from './styles.css!css';
import template from './template.html!text';

export default Vue.extend({
    template: template,
    props: ['path']
});
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseExpert from './components/ui/BaseExpert.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App);

app.component('base-button' , BaseButton);
app.component('base-badge' , BaseBadge);
app.component('base-expert' , BaseExpert);
app.component('base-card' , BaseCard);
app.component('base-spinner' , BaseSpinner);
app.component('base-dialog' , BaseDialog);

app.use(store).use(router).mount('#app')

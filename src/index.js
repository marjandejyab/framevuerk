// Components
import fvThemeProvider from '@/components/ThemeProvider.vue';
import fvLayout from '@/components/Layout.vue';
// import fvMain from './components/fvMain.vue'
import fvContent from './components/Content.vue';
import fvHeader from './components/Header.vue';
import fvFooter from './components/Footer.vue';
import fvSidebar from './components/Sidebar.vue';
// import fvContainer from './components/Container.vue';
// import fvForm from './components/fvForm.vue'
// import fvSelect from './components/fvSelect.vue'
// import fvDatepicker from './components/fvDatepicker.vue'
import fvList from './components/List.vue';
import fvListItem from './components/ListItem.vue';
// import fvMenu from './components/fvMenu.vue'
import fvInput from './components/Input.vue';
import fvButton from './components/Button.vue';
// import fvSwitch from './components/fvSwitch.vue'
// import fvDialog from './components/fvDialog.vue'
// import fvTable from './components/fvTable.vue'
// import fvCheck from './components/fvCheck.vue'
// import fvImg from './components/fvImg.vue'
// import fvSlider from './components/fvSlider.vue'
// import fvSlide from './components/fvSlide.vue'
// import fvToast from './components/fvToast.vue'
// import fvAvatar from './components/fvAvatar.vue'
// import fvSteps from './components/fvSteps.vue'
// import fvRange from './components/fvRange.vue'
// import fvLoading from './components/fvLoading.vue'
// import fvPagination from './components/fvPagination.vue'
// import fvFormElement from './components/fvFormElement.vue'
// import config from './utility/config.js'

const Framevuerk = {
  // fvThemeProvider,
  // fvLayout,
  // fvMain,
  // fvContent,
  // fvHeader,
  // fvContainer,
  // fvFooter,
  // fvSidebar,
  // fvForm,
  // fvSelect,
  // fvDatepicker,
  // fvList,
  // fvListItem,
  // fvMenu,
  // fvInput,
  // fvButton,
  // fvSwitch,
  // fvDialog,
  // fvTable,
  // fvCheck,
  // fvImg,
  // fvSlider,
  // fvSlide,
  // fvToast,
  // fvAvatar,
  // fvSteps,
  // fvRange,
  // fvLoading,
  // fvPagination,
  // fvFormElement,
  // config,
  install(Vue, userConfig = []) {
    // Components
    Vue.component('fvThemeProvider', fvThemeProvider);
    Vue.component('fvLayout', fvLayout);
    Vue.component('fvHeader', fvHeader);
    // Vue.component('fvMain', fvMain)
    Vue.component('fvContent', fvContent);
    Vue.component('fvFooter', fvFooter);
    Vue.component('fvSidebar', fvSidebar);
    // Vue.component('fvContainer', fvContainer);
    // Vue.component('fvForm', fvForm)
    // Vue.component('fvSelect', fvSelect)
    // Vue.component('fvDatepicker', fvDatepicker)
    Vue.component('fvList', fvList);
    Vue.component('fvListItem', fvListItem);
    // Vue.component('fvMenu', fvMenu)
    Vue.component('fvInput', fvInput);
    Vue.component('fvButton', fvButton);
    // Vue.component('fvSwitch', fvSwitch)
    // Vue.component('fvDialog', fvDialog)
    // Vue.component('fvTable', fvTable)
    // Vue.component('fvCheck', fvCheck)
    // Vue.component('fvImg', fvImg)
    // Vue.component('fvSlider', fvSlider)
    // Vue.component('fvSlide', fvSlide)
    // Vue.component('fvAvatar', fvAvatar)
    // Vue.component('fvSteps', fvSteps)
    // Vue.component('fvRange', fvRange)
    // Vue.component('fvLoading', fvLoading)
    // Vue.component('fvToast', fvToast)
    // Vue.component('fvPagination', fvPagination)
    // Vue.component('fvFormElement', fvFormElement)
  },
  // name: process.env.name,
  // version: process.env.version
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Framevuerk);
}

export default Framevuerk;

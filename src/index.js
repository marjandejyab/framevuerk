import { each } from './utility/utils';
// Components
import ThemeProvider from './components/ThemeProvider.vue';
import Layout from './components/Layout.vue';
// import fvMain from './components/fvMain.vue'
import Content from './components/Content.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';
// import fvContainer from './components/Container.vue';
// import fvSelect from './components/fvSelect.vue'
// import fvDatepicker from './components/fvDatepicker.vue'
import List from './components/List.vue';
import ListItem from './components/ListItem.vue';
// import fvMenu from './components/fvMenu.vue'
import Form from './components/Form.vue';
import FormElement from './components/FormElement.vue';
import InputGroup from './components/InputGroup.vue';
import InputBox from './components/InputBox.vue';
import Input from './components/Input.vue';
import Button from './components/Button.vue';
import Select from './components/Select.vue'

import Slider from './components/Slider.vue';
import SlideContent from './components/SlideContent.vue';
import SlideLabel from './components/SlideLabel.vue';
import Table from './components/Table.vue';
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
// import config from './utility/config.js'

const Framevuerk = {
  install(Vue) {
    each({
      ThemeProvider,
      Layout,
      Content,
      Header,
      Footer,
      Sidebar,
      List,
      ListItem,
      Form,
      FormElement,
      InputGroup,
      InputBox,
      Input,
      Button,
      Select,
      Slider,
      SlideContent,
      SlideLabel,
      Table,
    }, (key, component) => {
      Vue.component(`fv${key}`, component);
    });
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Framevuerk);
}

export {
  ThemeProvider,
  Layout,
  Content,
  Header,
  Footer,
  Sidebar,
  List,
  ListItem,
  Form,
  FormElement,
  InputGroup,
  Input,
  InputBox,
  Button,
  Select,
  Slider,
  SlideContent,
  SlideLabel,
  Table,
};

export default Framevuerk;

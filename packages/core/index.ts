import {createInstaller} from "@tdesign-pro-component/utils";
import components from './components';

const installer = createInstaller(components);

export * from '../components';

export default installer;
import {createInstaller} from "@tdesign-pro-component/utils";
import components from './components';

const installer = createInstaller(components);

export * from '@tdesign-pro-component/components';

export default installer;
import {createInstaller} from "@element-pro-component/utils";
import components from './components';


const installer = createInstaller(components);

export * from '@element-pro-component/components';

export default installer;
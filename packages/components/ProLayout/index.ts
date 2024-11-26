import { withInstall } from '@tdesign-pro-component/utils';
import _ProLayout from './ProLayout.vue';
import { ProLayoutHeader as _ProLayoutHeader } from './components/ProLayoutHeader/ProLayoutHeader';
import { ProLayoutAside as _ProLayoutAside } from './components/ProLayoutAside/ProLayoutAside';

export const ProLayout = withInstall(_ProLayout);
export const ProLayoutHeader = withInstall(_ProLayoutHeader);
export const ProLayoutAside = withInstall(_ProLayoutAside);

export * from './types';


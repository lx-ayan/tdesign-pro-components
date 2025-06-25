import { Header } from "tdesign-vue-next";
import {  defineComponent } from "vue";

export const ProLayoutHeader = defineComponent({
    name: 'ProLayoutHeader',
    setup(_props, { slots }) {
        return () => <Header>
            <div class="pro-layout-header">
                {slots.logo && <div class="pro-layout-header-logo">{slots.logo()}</div>}

                <div class="pro-layout-header-body">
                    {slots.default && slots.default()}
                </div>

                {slots.actions && <div class="pro-layout-header-actions">
                    {slots.actions()}
                </div>}

            </div>
        </Header>
    }
});
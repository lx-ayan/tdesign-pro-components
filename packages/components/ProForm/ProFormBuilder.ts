import { h } from "vue";
import { ProFormOption, ProFormProps } from "./types";
import { Optional, PromiseFunction } from "@tdesign-pro-component/utils";
import { ProForm } from ".";

export class ProFormBuilder {
    private static innerOptions: ProFormOption[] = [];
    private static innerRequest = () => Promise.resolve(null);
    private static innerSubmit = (_data: any) => Promise.resolve(null)
    private static innerProps = {}
    private constructor() {

    }

    static builder() {
        return new ProFormBuilder()
    }

    options(options: ProFormOption[]) {
        ProFormBuilder.innerOptions = options;
        return this;
    }

    props(props: Optional<ProFormProps, 'options' | 'request'>) {
        ProFormBuilder.innerProps = props;
        return this;
    }

    request<T extends null>(request: PromiseFunction<T>) {
        //@ts-ignore
        ProFormBuilder.innerRequest = request;
        return this;
    }

    submit<T>(submit: (data: T) => Promise<any>) {
        ProFormBuilder.innerSubmit = submit;
        return this;
    }


    build() {
        return h(ProForm, {
            ...ProFormBuilder.innerProps,
            options: ProFormBuilder.innerOptions,
            //@ts-ignore
            request: ProFormBuilder.innerRequest,
            onSubmit: ProFormBuilder.innerSubmit
        })
    }
}
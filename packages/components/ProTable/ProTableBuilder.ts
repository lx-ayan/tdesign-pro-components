import { h } from "vue";
import ProTable from "./ProTable";
import { Optional, PromiseFunction } from "@tdesign-pro-component/utils";
import { ProTableOption, ProTableProps } from "./types";

export class ProTableBuilder<T = any> {
    private static innerOptions: ProTableOption<any>[] = [];
    private static innerRequest = () => Promise.resolve(null);
    private static innerSubmit = (_data: any) => Promise.resolve(null)
    private static innerProps = {}
    private constructor() {

    }

    static builder() {
        return new ProTableBuilder()
    }

    options(options: ProTableOption<T>[]) {
        ProTableBuilder.innerOptions = options;
        return this;
    }

    props(props: Optional<ProTableProps<T>, 'options' | 'request'>) {
        ProTableBuilder.innerProps = props;
        return this;
    }

    request(request: PromiseFunction<T>) {
        ProTableBuilder.innerRequest = request as any;
        return this;
    }


    build() {
        return h(ProTable, {
            ...ProTableBuilder.innerProps,
            options: ProTableBuilder.innerOptions,
            request: ProTableBuilder.innerRequest,
            onSubmit: ProTableBuilder.innerSubmit
        })
    }
}
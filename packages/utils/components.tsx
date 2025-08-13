import { OptionData } from "./types";

export const OptionRenderer = ({ option }: { option: OptionData }) => {
    if (option.render) {
        return option.render(option)
    } else {
        return <div>{option.label}</div>
    }
}
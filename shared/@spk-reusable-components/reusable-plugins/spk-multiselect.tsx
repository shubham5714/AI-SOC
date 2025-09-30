import Select from "react-dropdown-select";

// Define the structure for individual option items
interface Option {
    [key: string]: string | number | boolean;
}

interface SpkMultiselectProps<T extends Option> {
    options: T[];
    placeholder?: string;
    mainClass?: string;
    multi?: boolean;
    labelField?: keyof T;
    valueField?: keyof T;
    values?: T[];
    clearable?: boolean;
    searchable?: boolean;
    disabledLabel?: string | jsx.Element;
    loading?: boolean;
    onChange: (values: T[]) => void;
    onSelect?: (item: T) => void;
    onDeselect?: (item: T) => void;
    noDataLabel?: string;
    dropdownHeight?: number;
}

const SpkMultiselect = <T extends Option>({
    options,
    mainClass,
    placeholder,
    multi = true,
    labelField,
    valueField,
    values = [],
    clearable = true,
    searchable = true,
    disabledLabel,
    loading = false,
    onChange,
    onSelect = () => { },
    onDeselect = () => { },
    noDataLabel,
    dropdownHeight
}: SpkMultiselectProps<T>) => {
    return (
        <Select className={mainClass} placeholder={placeholder} multi={multi} labelField={labelField as string} valueField={valueField as string} options={options} values={values} clearable={clearable} searchable={searchable} disabledLabel={disabledLabel} loading={loading} onChange={onChange} onSelect={onSelect} onDeselect={onDeselect} noDataLabel={noDataLabel} dropdownHeight={dropdownHeight} />
    );
};

export default SpkMultiselect;
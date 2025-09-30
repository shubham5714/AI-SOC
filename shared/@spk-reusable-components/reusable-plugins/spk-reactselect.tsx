import { ReactNode } from 'react';
import Select, { Props as SelectProps, StylesConfig } from 'react-select';

interface SpkSelectProps {
    option: SelectProps['options'];
    defaultvalue?: SelectProps['value'];
    mainClass?: string;
    onfunchange?: (value: number) => void;
    disabled?: boolean;
    getValue?: SelectProps['value'];
    clearable?: boolean;
    multi?: boolean;
    searchable?: boolean;
    placeholder?: string;
    autofocus?: boolean;
    noOptionsmessage?: (obj: {
        inputValue: string;
    }) => ReactNode;
    name?: string
    menuplacement?: 'auto';
    classNameprefix?: string;
    id?: string;
    styles?: StylesConfig
}

const SpkSelect: React.FC<SpkSelectProps> = ({ option, menuplacement, styles, id, autofocus, noOptionsmessage, classNameprefix, defaultvalue, mainClass, onfunchange, disabled, name, getValue, clearable, multi, searchable, placeholder, ...rest }) => {

    return (
        <>
            <Select name={name} styles={styles} options={option} className={mainClass} id={id} onChange={onfunchange as SelectProps['onChange']} isDisabled={disabled} isMulti={multi}
                menuPlacement={menuplacement} classNamePrefix={classNameprefix} defaultValue={defaultvalue} value={getValue} isClearable={clearable} isSearchable={searchable} placeholder={placeholder}
                autoFocus={autofocus} noOptionsMessage={noOptionsmessage} {...rest}
            />
        </>
    )
}
export default SpkSelect;
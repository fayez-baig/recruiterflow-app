import { FC } from 'react';
import { InputProps } from './types';

const Input: FC<InputProps> = ({
    label,
    name,
    id,
    value,
    type,
    list,
    autocomplete,
    maxLength,
    className = '',
    placeholder,
    readonly,
    icon,
    withIcon,
    onKeyUp,
    onChange,
}) => {
    const input = (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                className={`flex-1 border dark:border-gray-600
       px-2 py-2 bg-light-mode dark:bg-dark-mode text-light-mode-text dark:text-dark-mode-text rounded-md appearance-none w-full focus:outline-none focus:ring-1 focus:ring-gray-700  ${className}`}
                type={type || 'text'}
                name={name}
                id={id}
                list={list}
                value={value}
                autoComplete={autocomplete}
                maxLength={maxLength}
                placeholder={placeholder}
                readOnly={readonly}
                onChange={onChange}
                onKeyUp={onKeyUp}
            />
        </>
    );

    return withIcon ? (
        <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 mt-1 pointer-events-none">
                {icon}
            </div>
            <div className="mt-4">{input}</div>
        </div>
    ) : (
        input
    );
};

export default Input;

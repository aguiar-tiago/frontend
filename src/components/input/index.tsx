import * as React from 'react';
import { Props } from './interface';
import { Input as BaseInput } from 'antd';
import './styles.less';

const Input: React.FC<Props> = ({placeholder, handleChange, ariaLabel, id}) => {
    return (
        <BaseInput className="proposify-input" placeholder={placeholder} onChange={handleChange} aria-label={ariaLabel} id={id} />
     );
}

export default Input;

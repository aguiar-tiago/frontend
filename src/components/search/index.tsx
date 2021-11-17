import React from 'react';
import { Props } from './interface';
import { Input } from 'antd';
 
const { Search: BaseSearch } = Input;

const Search: React.FC<Props> = ({onSearch, placeholder, allowClear = false, enterButton}) => {

    return (
        <BaseSearch
            data-testid="search-component"
            onSearch={onSearch}
            placeholder={placeholder}
            allowClear={allowClear}
            enterButton={enterButton}
        />
     );
}
 
export default Search;

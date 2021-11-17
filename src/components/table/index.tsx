import React from 'react';
import { Props } from './interface';
import { Table as BaseTable } from 'antd';
 
const Table: React.FC<Props> = ({columns, selectableTypes, onSelect, data}) => {
    return (
        <div className="table-wrapper" data-testid="table-component">
            <BaseTable
                rowSelection={{
                    type: selectableTypes,
                    ...{onChange: onSelect}
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
     );
}
 
export default Table;

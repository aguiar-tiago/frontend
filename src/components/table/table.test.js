import Table from './index';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const renderedTable = () => {
    const utils = render(<Table columns={columns} data={data} selectableTypes="checkbox" />);
    const table = utils.getByTestId('table-component');
    return {
        utils,
        table
    }
}

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

describe('Table', () => {
    test('Table rows should render correctly', () => {
        const { utils } = renderedTable();
        const firstRow = utils.getByText('John Brown');

        expect(firstRow).toBeVisible();
    });

    test('Table should have three rows', () => {
        const { utils } = renderedTable();
        const rows = utils.getAllByRole('row');

        expect(rows).toHaveLength(5); // rows + header
    });
});

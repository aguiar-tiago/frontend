import Search from './index';
import { render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);

const renderedSearch = () => {
    const onSearch = jest.fn();
    const utils = render(<Search onSearch={onSearch} placeholder="placeholder" allowClear enterButton="Search"/>);
    const search = utils.getByTestId('search-component');
    const searchButton = utils.getByText('Search');
    return {
        onSearch,
        search,
        searchButton,
        ...utils
    }
}

describe('Search', () => {
    test('Event is fired when clicking on search button', () => {
        const { search, searchButton, onSearch } = renderedSearch();

        fireEvent.change(search, {target: {value: 'typing...'}});
        expect(search.value).toBe('typing...');

        fireEvent.click( searchButton, )
        expect(onSearch).toHaveBeenCalled();
    });

    test('On input render value is not pre-filled', () => {
        const { search } = renderedSearch();
        expect(search.value).toBe('');
    });
});

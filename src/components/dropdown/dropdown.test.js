import Dropdown from './index';
import { render, cleanup, fireEvent, waitFor, screen, act } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

describe('Dropdown', () => {
    test('Dropdown should render properly', () => {
        const title = 'title';
        const items = [
            {
                title: 'Item 1',
                href: '#'
            },
            {
                title: 'Item 2',
                href: '#'
            },
            {
                title: 'Item 3',
                href: '#'
            },
            {
                title: 'Item 4',
                href: '#'
            }
        ];

        const { getByText } = render(
            <BrowserRouter>
                <Dropdown title={title} items={items} trigger={["click"]} />
            </BrowserRouter>
        );

        expect(getByText(title)).toBeVisible();
    });

    test('Click should open menu', async () => {
        const title = 'title';
        const items = [
            {
                title: 'Item 1',
                href: '#firstItem'
            },
            {
                title: 'Item 2',
                href: '#secondItem'
            },
            {
                title: 'Item 3',
                href: '#thirdItem'
            },
            {
                title: 'Item 4',
                href: '#fourthItem'
            }
        ];

        const { getByText } = render(
            <BrowserRouter>
                <Dropdown title={title} items={items} trigger={["click"]} />
            </BrowserRouter>
        );


        act(() => {
            fireEvent.click(getByText(title))
        });

        await waitFor(() => expect(screen.getByText('Item 1')).toBeInTheDocument());
    });

    test('Hover should open menu', async () => {
        const title = 'title';
        const items = [
            {
                title: 'Item 1',
                href: '#firstItem'
            },
            {
                title: 'Item 2',
                href: '#secondItem'
            },
            {
                title: 'Item 3',
                href: '#thirdItem'
            },
            {
                title: 'Item 4',
                href: '#fourthItem'
            }
        ];

        const { getByText } = render(
            <BrowserRouter>
                <Dropdown title={title} items={items} trigger={["hover"]} />
            </BrowserRouter>
        );


        act(() => {
            fireEvent.mouseEnter(getByText(title))
        });

        await waitFor(() => expect(screen.getByText('Item 1')).toBeInTheDocument());
    });
});

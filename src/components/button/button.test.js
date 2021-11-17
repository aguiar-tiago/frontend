import Button from './index';
import { render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);

describe('Button', ()=> {
    test('Click should fire event', () => {
        const children = 'Button Test';
        const onClick = jest.fn();

        const { getByText } = render(
            <Button type="primary" onClick={onClick}>{children}</Button>
        );

        fireEvent.click(getByText(children));
        expect(onClick).toHaveBeenCalled();
    });

    test('Content should be present', () => {
        const children = 'Button Test';
        const size = 'small';
        const { getByText } = render(
            <Button type="primary" size={size}>{children}</Button>
        );

        expect(getByText(children)).toBeInTheDocument();
    })
});

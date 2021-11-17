import Input from './index';
import { render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);

const renderedInput = () => {
    const utils = render(<Input ariaLabel="custom-label" placeholder="Start typing..."/>);
    const input = utils.getByLabelText('custom-label');
    return {
        input,
        ...utils
    }
}

describe('Input', () => {
    test('On Input change value should be updated', () => {
        const { input } = renderedInput();

        fireEvent.change(input, {target: {value: 'typing...'}});
        expect(input.value).toBe('typing...');
    });

    test('On input render value is not pre-filled', () => {
        const { input } = renderedInput();
        expect(input.value).toBe('');
    });


    test('Input should have proposify-input class', () => {
        const { container } = render(<Input ariaLabel="custom-label" placeholder="Start typing..."/>);

        expect(container.firstChild).toHaveClass('proposify-input');
    });

    test('Input should have the same id as passed', () => {
        const { container } = render(<Input ariaLabel="custom-label" placeholder="Start typing..." id="proposify"/>);

        const input = container.querySelector('#proposify');
        expect(input).toBeInTheDocument();
    });
});

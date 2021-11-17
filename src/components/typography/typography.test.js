import { Text, Paragraph, Title } from './index';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

const copy = 'Proposify';

describe('Text', () => {
    test('Text should render the right content', () => {
        const { getByText } = render(<Text>{copy}</Text>);

        expect(getByText(copy)).toBeInTheDocument();
    });

    test('Text should have proposify-typography class', () => {
        const { container } = render(<Text>{copy}</Text>);

        expect(container.firstChild).toHaveClass('proposify-typography');
    });
});

describe('Paragraph', () => {
    test('Paragraph should render the right content', () => {
        const { getByText } = render(<Paragraph>{copy}</Paragraph>);

        expect(getByText(copy)).toBeInTheDocument();
    });

    test('Paragraph should have proposify-typography class', () => {
        const { container } = render(<Paragraph>{copy}</Paragraph>);

        expect(container.firstChild).toHaveClass('proposify-typography');
    });
});

describe('Title', () => {
    test('Title should render the right content', () => {
        const { getByText } = render(<Title>{copy}</Title>);

        expect(getByText(copy)).toBeInTheDocument();
    });

    test('Title should have proposify-typography class', () => {
        const { container } = render(<Paragraph>{copy}</Paragraph>);

        expect(container.firstChild).toHaveClass('proposify-typography');
    });
});

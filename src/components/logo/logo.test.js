import Logo from './index';
import { render, cleanup } from '@testing-library/react';
import proposifyLogo from '../../images/proposify-logo.png';

afterEach(cleanup);

describe('Logo', () => {
    test('Logo should be rendered correctly', () => {
       const { getByTestId } = render(
        <Logo background={proposifyLogo} href="#" title="Proposify logo"/>
       );

       expect(getByTestId('logo-component')).toBeInTheDocument();
    });
});

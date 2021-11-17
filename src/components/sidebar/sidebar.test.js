import Sidebar from './index';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';

afterEach(cleanup);

describe('Sidebar', () => {
    test('Navigation items should be visible on mouse enter', async () => {
        const { getByTestId, getByText } = render(
            <Sidebar className="dashboard-left-sidebar" />
        );

        const sidebar = getByTestId('sidebar-component');
        const pipeline = getByText('Pipeline');

        fireEvent.mouseEnter(sidebar);
        await waitFor(() => expect(pipeline).toBeVisible());
        
    });
    
})

import CustomerPage from './customers';
import { initI18n, addI18nResources } from '../../../utils/TranslationTestHandler';
import i18n from '../../../utils/i18n';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: true,
        addListener: function() {},
        removeListener: function() {}
    };
};

beforeAll(() => {
    initI18n();
    addI18nResources({
        admin: {
            customers: {
                customers: "Customers",
                new_customer_button: "New Customer",
                search_button: "Search",
                search_input_placeholder: "Keywords",
                total_account: "Total Account {{count}}",
                total_account_plural: "Total Accounts {{count}}",
                total_user: "Total User {{count}}",
                total_user_plural: "Total Users {{count}}",
                total_proposal: "Total Proposal {{count}}",
                total_proposal_plural: "Total Proposals {{count}}"
            }
        }
    })
});

describe('Customer Page', () => {

    test('Page should render translations key correctly ', () => {
        
        const { getByText } = render(
            <I18nextProvider i18n={i18n}>
                <CustomerPage />
            </I18nextProvider>
        );

        expect(getByText("Customers")).toBeInTheDocument();
        expect(getByText("New Customer")).toBeInTheDocument();
        expect(getByText("Search")).toBeInTheDocument();

    });

    test('Counts trigger plurals', () => {
        const { getByText } = render(
            <I18nextProvider i18n={i18n}>
                <CustomerPage />
            </I18nextProvider>
        );

        expect(getByText("Total Account 1")).toBeInTheDocument();
        expect(getByText("Total Proposals 135")).toBeInTheDocument();

    })

});

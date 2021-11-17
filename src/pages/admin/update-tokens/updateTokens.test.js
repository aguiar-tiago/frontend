import UpdateTokensPage from './updateTokens';
import { initI18n, addI18nResources } from '../../../utils/TranslationTestHandler';
import i18n from '../../../utils/i18n';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import integrations from './integrations';

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
            update_tokens: {
                greeting: "Hello",
                button_submit: "Submit",
                button_send_all: "Send All",
                button_clear_all: "Clear All"
            }
        }
    })
});

describe('Update Tokens Page', () => {
    test('Page should have the correct content', () => {
        const { getByText } = render(
            <I18nextProvider i18n={i18n}>
                <UpdateTokensPage />
            </I18nextProvider>
        );

        expect(getByText("Hello", {exact: false})).toBeInTheDocument();
        expect(getByText("Clear All")).toBeInTheDocument();
        expect(getByText("Send All")).toBeInTheDocument();
    });
    
    test('The number of integrations should render the exact amount of rows', () => {
        const { getAllByText } = render(
            <I18nextProvider i18n={i18n}>
                <UpdateTokensPage />
            </I18nextProvider>
        );
        
        const { length } = integrations;

        expect(getAllByText("Submit")).toHaveLength(length);
    });
});

import React from 'react';
import { IntlProvider } from 'react-intl';
import { locales } from './locales';

export const IntlProviderConfigured = ({ children, locale }) => {
  const messages = locales[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

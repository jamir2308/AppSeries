import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Header from '../../components/organisms/header/Header';
import { locales } from './../../i18n/locales';
import { Outlet } from 'react-router-dom';
import { ContentLayout } from './MainLayoutStyles';

function MainLayout() {
    const [locale, setLocale] = useState('es');
    return (
        <>
            <IntlProvider locale={locale} messages={locales[locale]}>
                <Header setLocale={setLocale} />
                <ContentLayout>
                    <Outlet />
                </ContentLayout>
            </IntlProvider>
        </>
    )
}

export default MainLayout
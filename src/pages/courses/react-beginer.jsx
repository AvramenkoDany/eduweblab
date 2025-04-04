import React from 'react';
import { useTranslation } from 'react-i18next';

const ReactProgresPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <h1 className="main__title">{t('eror.page')}</h1>
        </>
    );
};
export default ReactProgresPage;

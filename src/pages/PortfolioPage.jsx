import { useTranslation } from 'react-i18next';

const PortfolioPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <h1 className="main__title">{t('eror.page')}</h1>
        </>
    );
};
export default PortfolioPage;

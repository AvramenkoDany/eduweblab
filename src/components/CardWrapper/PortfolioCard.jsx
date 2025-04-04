import '@/styles/index.scss';

const PortfolioCard = ({ id, title, subTitle }) => {
    return (
        <div id={id} className="card">
            <h3 className="card__title">{title}</h3>
            <div className="card__row">
                <p className="card__desc">{subTitle}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;

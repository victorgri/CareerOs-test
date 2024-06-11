import { Quest } from "../../types/Types";

import './QuestCard.scss';

type Props = {
    quest: Quest
}

export const QuestCard: React.FC<Props> = ({ quest }) => {
    return (
        <div className="questCard">
            <img src={quest.company !== null ? quest.company.logo_url : './img/logo.svg'} alt="logo" className="questCard__img" />
            <div className="questCard__middle">
                <h2 className="questCard__middle--title">{quest.type.split('_').join(' ')}</h2>
                <p className="questCard__middle--desc">{quest.description}</p>
            </div>
            <a href="#" className="questCard__middle--link">
                <img src='./img/install.svg' alt="install" />
            </a>
        </div>
    )
}
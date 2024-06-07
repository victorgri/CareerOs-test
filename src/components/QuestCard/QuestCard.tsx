import { Quest } from "../../types/Types";

import './QuestCard.scss';

type Props = {
    quest: Quest
}

export const QuestCard: React.FC<Props> = ({ quest }) => {
    return (
        <div className="questCard">
            <img src={quest.company.logo_url} alt="logo" className="questCard__img" />
            <div className="questCard__middle">
                <h2 className="questCard__middle--title">{quest.company.name}</h2>
                <p className="questCard__middle--desc">{quest.status}</p>
            </div>
            <a href="#" className="questCard__middle--link">
                <img src='./img/install.svg' alt="install" />
            </a>
        </div>
    )
}
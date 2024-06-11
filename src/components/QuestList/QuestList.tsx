import { Quest } from "../../types/Types";
import { QuestCard } from "../QuestCard/QuestCard";

import './QuestList.scss';

type Props = {
    quests: Quest[];
    title: string;
};

export const QuestList: React.FC<Props> = ({ quests, title}) => {
    return (
      <div className="questList">
            <h1 className="questList__title">
                {title}
                <img src="./img/info.svg" alt="info" className="questList__title--img" />
            </h1>
        {quests.map((d) => (
          <QuestCard key={d.id} quest={d} />
        ))}
      </div>
    );
}
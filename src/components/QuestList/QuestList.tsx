import { Quest } from "../../types/Types";
import { QuestCard } from "../QuestCard/QuestCard";

import './QuestList.scss';

type Props = {
    styleName: string;
    data: Quest[];
    title: string;
};

export const QuestList: React.FC<Props> = ({styleName, data, title}) => {
    return (
      <div className={`box questList ${styleName}`}>
            <h1 className="questList__title">
                {title}
                <img src="./img/info.svg" alt="info" className="questList__title--img" />
            </h1>
        {data.map((d) => (
          <QuestCard key={d.id} quest={d} />
        ))}
      </div>
    );
}
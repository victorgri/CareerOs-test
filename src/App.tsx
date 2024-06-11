import { useEffect, useState } from "react";

import { QuestList } from "./components/QuestList/QuestList";
import { Quest } from "./types/Types";

function App() {
    const [quests, setQuests] = useState<Quest[]>([]);

    useEffect(() => {
      fetch("/CareerOs-test/quests.json")
        .then((res) => res.json())
        .then((data) => setQuests(data.quests));
    }, []);

    return (
      <div className="app">
        <QuestList quests={quests} title="Quests" />
      </div>
    );
}

export default App;

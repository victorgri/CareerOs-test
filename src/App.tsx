import { useEffect, useState } from "react";
import { QuestList } from "./components/QuestList/QuestList";
import { SideBar } from "./components/SideBar/SideBar";
import { Quest } from "./types/Types";
import { Header } from "./components/Header/Header";

function App() {
    const [quests, setQuests] = useState<Quest[]>([]);

    useEffect(() => {
      fetch("/quests.json")
        .then((res) => res.json())
        .then((data) => setQuests(data.quests));
    }, []);

  return (
    <div className="app">
      <SideBar />
      <div className="app-right">
        <Header />

        <QuestList styleName="quest" data={quests} title="Quests" />
        <QuestList styleName="message" data={[]} title="Recent Messages" />
      </div>
    </div>
  );
}

export default App;

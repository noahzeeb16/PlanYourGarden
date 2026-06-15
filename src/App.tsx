import { useState } from "react";
import type { GardenTask } from "./types/GardenTask";

function App() {
  const [tasks, setTasks] = useState<GardenTask[]>([]);

  return (
    <div>
      <h1>PlanYourGarden 🌱</h1>
      <p>Aufgaben: {tasks.length}</p>
    </div>
  );
}

export default App;

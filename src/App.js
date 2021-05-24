import { useState } from "react";
import Header from "./components/header/header";
import Medicines from "./components/medicines/medicines";
import Search from "./components/search/search";

import "./App.css";

//on page load, get our hardcoded medicines from a file
import originalMedicines from "./medicines.json";

function App() {
  const [medicines] = useState(originalMedicines);
  const [search, setSearch] = useState("");

  return (
    <>
      <Header>
        <Search setSearch={setSearch} search={search} />
      </Header>
      <div className="mild-defaults">
        <Medicines medicines={medicines} search={search} />
      </div>
    </>
  );
}

export default App;

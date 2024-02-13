import "../scss/App.scss";
import dataDogs from "../data/dataDogs.json";
import { useState } from "react";

import Form from "./Form";
import Gallery from "./Gallery";
import Header from "./Header";

function App() {
  const [listDogs] = useState(dataDogs);
  console.log(listDogs);

  const [filter, setfilter] = useState("");

  const handleFilter = (filterValue) => {
    setfilter(filterValue);
  };

  const filteredDogs = listDogs.filter((dog) =>
    dog.breed.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <main>
        <Form handleFilter={handleFilter} />
        <Gallery listDogs={filteredDogs} />
      </main>
    </div>
  );
}

export default App;

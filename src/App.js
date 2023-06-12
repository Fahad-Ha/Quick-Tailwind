import Navbar from "./components/Navbar";
import "./App.css";
import Main from "./components/Main";
import data from "./data";

function App() {
  const pets = data.map((pet) => <Main pet={pet} key={pet.id} />);
  return (
    <div className="App ">
      <Navbar />
      <section className="bg-gray-100 h-auto xl:h-[95vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
          {pets}
        </div>
      </section>
    </div>
  );
}

export default App;

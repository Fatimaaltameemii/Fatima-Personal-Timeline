import data from "./data";
import ItemList from "./MyComponents/ItemList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <section class="page-section" id="about">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">About</h2>
            <h3 class="section-subheading text-muted">
              Fatima Majed ALTameemii
            </h3>
          </div>
          <ItemList filling={data} />
        </div>
      </section>
    </div>
  );
}

export default App;

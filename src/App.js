import "./App.css";

function App() {
  return (
    <div>
      <main>
        <section>
          <div class="container">
            <div class="row">
              {/* Main Article */}
              <article>
                <div class="col-6">Column1</div>
              </article>
              {/* Sidebar or Related Information */}
              <aside>
                <div class="col-6">Column2</div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

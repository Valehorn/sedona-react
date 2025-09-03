import Header from "../blocks/header/header";
import Hero from "../blocks/hero/hero";

function Main() {
  return (
    <div className="page-container">
      <Header />
      <main className="main">
        <Hero />
      </main>
    </div>
  )
}

export default Main;

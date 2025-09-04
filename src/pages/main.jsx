import Header from "../blocks/header/header";
import Hero from "../blocks/hero/hero";
import Reasons from "../blocks/reasons/reasons";

function Main() {
  return (
    <div className="page-container">
      <Header />
      <main className="main">
        <Hero />
        <Reasons />
      </main>
    </div>
  )
}

export default Main;

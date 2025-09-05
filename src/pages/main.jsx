import Advantages from "../blocks/advantages/advantages";
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
        <Advantages />
      </main>
    </div>
  )
}

export default Main;

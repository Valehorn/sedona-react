import Advantages from "../blocks/advantages/advantages";
import Header from "../blocks/header/header";
import Hero from "../blocks/hero/hero";
import Reasons from "../blocks/reasons/reasons";
import Total from "../blocks/total/total";

function Main() {
  return (
    <div className="page-container">
      <Header />
      <main className="main">
        <Hero />
        <Reasons />
        <Advantages />
        <Total />
      </main>
    </div>
  )
}

export default Main;

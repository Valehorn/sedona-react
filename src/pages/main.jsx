import Advantages from "../blocks/advantages/advantages";
import Header from "../blocks/header/header";
import Hero from "../blocks/hero/hero";
import Modal from "../blocks/modal/modal";
import Reasons from "../blocks/reasons/reasons";
import Subscription from "../blocks/subscription/subscription";
import Total from "../blocks/total/total";

function Main() {
  return (
    <>
      <div className="page-container">
        <Header />
        <main className="main">
          <Hero />
          <Reasons />
          <Advantages />
          <Total />
          <Subscription />
        </main>
      </div>
      <Modal />
    </>
  )
}

export default Main;

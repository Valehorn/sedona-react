import Footer from "../blocks/footer/footer";
import Header from "../blocks/header/header";
import Filter from "../blocks/filter-form/filter";
import Modal from "../blocks/modal/modal";
import CatalogHotels from "../blocks/catalog-hotels/catalogHotels";

function Catalog() {
  return (
    <>
      <div className="page-container">
        <Header />
        <Filter />
        <CatalogHotels />
        <Footer />
      </div>
      <Modal />
    </>
  )
}

export default Catalog;

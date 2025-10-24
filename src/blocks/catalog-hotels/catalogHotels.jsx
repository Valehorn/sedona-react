import './catalog-hotel.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import Container from '../container/container';
import Select from '../../components/select/select';
import ViewButton from '../../components/viewButton/viewButton';
import Card from '../../components/hotelCard/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import hotel1 from '../../assets/image/catalog/hotel-1.jpg';
import hotel2 from '../../assets/image/catalog/hotel-2.jpg';
import hotel3 from '../../assets/image/catalog/hotel-3.jpg';
import hotel4 from '../../assets/image/catalog/hotel-4.jpg';

function CatalogHotels() {
  const [currentView, setCurrentView] = useState(0);
  const selectData = ['Сначала дешевые', 'Сначала дорогие'];
  const vieButtons = ['grid', 'slider', 'list'];
  const hotelData = [
    {
      name: 'Amara Resort & Spa',
      type: 'Гостиница',
      price: '4000',
      stars: 4,
      rating: '8,5',
      image: hotel1
    },
    {
      name: 'Villas at Poco Diablo',
      type: 'Гостиница',
      price: '5000',
      stars: 4,
      rating: '9,2',
      image: hotel2
    },
    {
      name: 'Desert Quail Inn',
      type: 'Гостиница',
      price: '2500',
      stars: 3,
      rating: '6,9',
      image: hotel3
    },
    {
      name: 'GreenTree Inn',
      type: 'Гостиница',
      price: '1500',
      stars: 2,
      rating: '5,0',
      image: hotel4
    },
  ];
  let currentViewType = vieButtons[currentView];

  const handleViewChange = (index) => {
    setCurrentView(index);
    currentViewType = vieButtons[currentView];
  };

  return (
    <section className="catalog-hotels">
      <Container>
        <div className="catalog-hotels__sorting">
          <h2 className="catalog-hotels__title">Найдено гостиниц: {hotelData.length}</h2>
          <Select name="catalog-hotels__sorting" id="catalog-hotels__sorting" block="catalog-hotels" data={selectData} />
          <ul className="catalog-hotels__view-list">
            {vieButtons.map((button, index) => {
              return (
                <li key={button}>
                  <ViewButton info={button} current={currentView === index ? button : null} onClick={() => handleViewChange(index)} />
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`catalog-hotels__list  ${currentViewType ? `catalog-hotels__list--${currentViewType}` : ''}`}>
          {(currentViewType === 'grid' || currentViewType === 'list') && (
            hotelData.map((card, index) => (
              <Card key={index} data={card} block="catalog-hotels" />
            ))
          )}

          {currentViewType === 'slider' && (<Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            navigation
          >
            {hotelData.map((card, index) => (
              <SwiperSlide key={index}>
                <Card data={card} block="catalog-hotels" />
              </SwiperSlide>
            ))}
          </Swiper>)}
        </div>
      </Container>
    </section>
  );
};

export default CatalogHotels;

import { useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CheckboxInput from '../../components/checkboxInput/checkboxInput';
import RadioInput from '../../components/radioInput/radioInput';
import Container from '../container/container';
import PriceInput from '../../components/priceInput/priceInput';
import InputRange from '../../components/inputRange/inputRange';
import Button from '../../components/Button/Button';
import './filter.scss';

function Filter() {
  const breadcrumbs = [
    {
      link: 'Главная',
      url: '/',
    },
    {
      link: 'Гостиницы',
      url: '#',
    }
  ];

  const fields = [
    {
      type: 'checkbox',
      title: 'Инфраструктура',
      inputs: ['Бассейн', 'Парковка', 'Wi-Fi'],
    },
    {
      type: 'radio',
      title: 'Тип Жилья',
      inputs: ['Гостиница', 'Мотель', 'Апартаменты'],
    },
    {
      type: 'number',
      title: 'Стоимость, ₽:',
      inputs: ['от', 'до'],
    },
  ];

  const [filters, setFilters] = useState({
    amenities: {
      'Бассейн': true,
      'Парковка': true,
      'Wi-Fi': false,
    },
    accommodationType: 'Гостиница',
    price: {
      min: '0',
      max: '9000'
    }
  });

  const handleFilterChange = (evt, fieldType, fieldName = null) => {
    const { value, type, checked } = evt.target;

    setFilters(prev => {
      if (type === 'checkbox') {
        return {
          ...prev,
          amenities: {
            ...prev.amenities,
            [value]: checked
          }
        };
      }

      if (type === 'radio') {
        return {
          ...prev,
          accommodationType: value
        };
      }

      if (type === 'number' && fieldName) {
        return {
          ...prev,
          price: {
            ...prev.price,
            [fieldName]: value
          }
        };
      }

      return prev;
    });
  };

  const handleRangeChange = (newRange) => {
    setFilters(prev => ({
      ...prev,
      price: {
        min: String(newRange[0]),
        max: String(newRange[1])
      }
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Отправленные фильтры:', filters);
  };

  const handleReset = () => {
    setFilters({
      amenities: {
        'Бассейн': true,
        'Парковка': true,
        'Wi-Fi': false,
      },
      accommodationType: 'Гостиница',
      price: {
        min: '0',
        max: '9000'
      }
    });
  };

  return (
    <section className="filter">
      <Container>
        <h1 className="filter__title">Гостиницы Седоны</h1>
        <Breadcrumbs items={breadcrumbs} section="filter" />
        <form className="filter__form" onSubmit={handleSubmit} onReset={handleReset} action="/">
          {fields.map((item) => {
            return (
              <fieldset key={item.title} className="filter__fields">
                <legend>{item.title}</legend>
                <ul className={`filter__input-list ${item.type === 'number' ? 'filter__input-list--price' : ''}`}>
                  {item.inputs.map((input, inputIndex) => (
                    <li key={inputIndex}>
                      {item.type === 'checkbox' && (
                        <CheckboxInput
                          item={item}
                          input={input}
                          section="filter"
                          checked={filters.amenities[input]}
                          onChange={handleFilterChange}
                        />
                      )}
                      {item.type === 'radio' && (
                        <RadioInput
                          item={item}
                          input={input}
                          section="filter"
                          checked={filters.accommodationType === input}
                          onChange={handleFilterChange}
                        />
                      )}
                      {item.type === 'number' && (
                        <PriceInput
                          price={filters.price}
                          input={input}
                          section="filter"
                          onChange={handleFilterChange}
                        />
                      )}
                    </li>
                  ))}
                  {item.type === 'number' && (
                    <li>
                      <InputRange
                        className="input-range"
                        min={0}
                        max={10000}
                        value={[Number(filters.price.min), Number(filters.price.max)]}
                        onChange={handleRangeChange}
                      />
                    </li>
                  )}
                </ul>
              </fieldset>
            );
          })}
          <div className="filter__button-container">
            <Button
              className="filter"
              classMod="secondary"
              type="submit"
              text="Применить" />
            <Button
              className="filter"
              classMod="transparent"
              type="reset"
              text="Сбросить" />
          </div>
        </form>
      </Container>
    </section>
  );
}

export default Filter;

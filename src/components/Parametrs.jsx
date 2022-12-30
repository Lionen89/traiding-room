import React from 'react';

function Parametrs() {
  const parametrTitles = [
    'Наличие комплекса мероприятий, повышающих стандарты качества изготовления',
    'Срок изготовления лота, дней',
    'Гарантийные обязательства, мес',
    'Условия оплаты',
    'Стоимость изготовления лота, руб (без НДС)',
    'Действие',
  ];
  return (
    <div className="parametrs">
      <h2 className="parametrs__title">Параметры и требования</h2>
      <ul className="parametrs__text-container">
        {parametrTitles.map((i, key) => {
          return (
            <li className="parametrs__text" key={i}>
              {i}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Parametrs;

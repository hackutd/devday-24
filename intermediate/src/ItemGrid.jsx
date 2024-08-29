ItemGrid.jsx
import React from 'react';
import ItemCard from './ItemCard';

function ItemGrid() {
  const items = [
    { image: '', title: 'item', price: 'FREE', status: 'AVAILABLE' },
    { image: '', title: 'item', price: 'FREE', status: 'AVAILABLE' },
    { image: '', title: 'item', price: 'SOLD', status: 'SOLD' },
    { image: '', title: 'item', price: 'FREE', status: 'AVAILABLE' },
    { image: '', title: 'item', price: 'FREE', status: 'AVAILABLE' },
    { image: '', title: 'item', price: 'FREE', status: 'AVAILABLE' },
  ];

  return (
    <section className="px-5 mt-3 w-full max-w-[100rem] max-md:max-w-full">
      <div className="grid gap-5 grid-cols-3 max-md:grid-cols-1">
        {items.map((item, index) => (
          <div key={index} className="w-full">
            <ItemCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ItemGrid;
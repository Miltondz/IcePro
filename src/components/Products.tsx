import React from 'react';
import productosData from '../productos.json';

// Create a type for the product structure
type Producto = {
  producto: string;
  descripcion: string;
  tag_imagen: string;
};

export default function Products() {
  // Cast the imported JSON to the correct type
  const productos: Producto[] = productosData;

  return (
    <div id="products" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Productos
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Ofrecemos diferentes tipos de hielo para satisfacer todas sus necesidades
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {productos.map((product, index) => (
            <div key={index} className="relative group">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src={product.tag_imagen}
                  alt={product.producto}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {product.producto}
              </h3>
              <p className="text-base text-gray-500 line-clamp-4">
                {product.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
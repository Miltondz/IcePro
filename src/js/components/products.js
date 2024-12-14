const products = [
  {
    name: "Hielo en Cubitos",
    description: "Refresca tus momentos con nuestros cubitos de hielo cristalino, perfectos para cualquier ocasión. Desde reuniones familiares hasta los cócteles más sofisticados en bares y restaurantes, nuestros cubitos, disponibles en diversos tamaños, garantizan el enfriamiento ideal para tus bebidas y la conservación de tus alimentos. ¡Descubre la pureza y calidad que marcan la diferencia!",
    price: "Desde $X por kg",
	image: "https://i.ibb.co/6BCdzvw/product1.jpg"
  },
  {
    name: "Hielo en Barras o Bloques",
    description: "Soluciones de enfriamiento a gran escala con nuestros imponentes bloques de hielo. Ideales para la industria pesquera, transporte refrigerado y eventos que demandan un enfriamiento prolongado, como esculturas de hielo y exhibiciones. Nuestros bloques de hielo aseguran una conservación eficaz y duradera.",
	price: "Desde $X por bloque",
    image: "https://i.ibb.co/WgBGDpy/product2.jpg"
  },
  {
    name: "Hielo Picado o Frappé",
    description: "Crea experiencias únicas con nuestro hielo picado o frappé, el aliado perfecto para coctelería de autor, refrescantes granizados y presentaciones culinarias impactantes. Su textura fina y uniforme enfría rápidamente tus creaciones, resaltando los sabores y aromas. Ideal para bartenders profesionales y amantes de la mixología.",
    price: "Desde $X por kg",
	image: "https://i.ibb.co/Q9vKzSS/product3.jpg"
  },
  {
    name: "Hielo en Escamas",
    description: "Conserva la frescura de tus names con nuestro hielo en escamas, la opción predilecta para la industria pesquera y alimentaria. Sus delicadas láminas mantienen la humedad y la temperatura ideal de pescados, mariscos, verduras y otros names frescos, prolongando su vida útil y garantizando la máxima calidad. También utilizado en laboratorios y aplicaciones médicas.",
    price: "Desde $X por kg",
	image: "https://i.ibb.co/wCHNsZp/product4.jpg"
  },
  {
    name: "Hielo Seco (Hielo Carbónico)",
    description: "Desata el poder del frío extremo con nuestro hielo seco (hielo carbónico). Perfecto para efectos especiales que deslumbran, transporte ultracongelado que protege la integridad de tus names sensibles al calor y la innovadora limpieza criogénica. *Advertencia: requiere manejo especializado*.",
    price: "Desde $X por kg",
	image: "https://i.ibb.co/P5Tf4Lq/product5.jpg"
  },
    {
    name: "Hielo en Placas",
    description: "Optimiza tus procesos industriales con nuestro hielo en placas, la solución ideal para aplicaciones que demandan un enfriamiento rápido y uniforme en grandes volúmenes. Estas placas de hielo, de gran superficie y espesor controlado, son perfectas para la industria del hormigón (reduciendo la temperatura del fraguado), procesos químicos, minería (enfriamiento de túneles y maquinaria), y otras aplicaciones industriales que requieren una gran capacidad de enfriamiento. Su forma plana facilita el almacenamiento y la manipulación a gran escala, maximizando la eficiencia de tu producción.",
    price: "Desde $X por Placa",
	image: "https://i.ibb.co/2SssM98/product6.jpg"
  }
] ;

export function initProducts() {
  const productsSection = document.getElementById('products');
  
  const productsHtml = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Nuestros Productos
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          Ofrecemos diferentes tipos de hielo para satisfacer todas sus necesidades
        </p>
      </div>

      <div class="mt-20 grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
        ${products.map(product => `
          <div class="relative group">
            <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75">
              <img
                src="${product.image}"
                alt="${product.name}"
                class="w-full h-full object-center object-cover"
              />
            </div>
            <h3 class="mt-6 text-xl font-semibold text-gray-900">
              ${product.name}
            </h3>
            <p class="text-base text-gray-500">${product.description}</p>
            <p class="mt-2 text-lg font-medium text-blue-600">${product.price}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  productsSection.innerHTML = productsHtml;
}
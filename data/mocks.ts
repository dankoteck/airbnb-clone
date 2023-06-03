// All the mocks and for testing goes here

/**
 * title
 * day for rent
 * location
 * distanceDescribe
 * price.adult // per night
 * rating
 * gallery
 * slug
 * id
 */
const data = {
  id: Math.random(),
  slug: "villa-1-bali-indonesia",
  title: "Villa 1 to the Beach hell yeah - Bali - Indonesia",
  distanceDescribe: "1.5 km to the beach",
  rentable: {
    from: "03/06/2023",
    to: "10/06/2023",
  },
  rating: 4.3,
  location: {
    lat: "123123123123",
    lng: "123123123123",
    address: "Kuta Utara, Bali, Indonesia, Villa 1 to the Beach",
  },
  price: {
    adult: 100,
  },
  // minimum 5 images
  gallery: [
    {
      href: "https://res.cloudinary.com/leecode/image/upload/v1685789395/6656704c-c3fc-417a-ac60-effcc0e01d3d.webp",
      alt: "Villa 1 - Bali - Indonesia",
    },
    {
      href: "https://res.cloudinary.com/leecode/image/upload/v1685789394/3337603f-69ac-4261-b227-6c68dbb3ec55.webp",
      alt: "Villa 1 - Bali - Indonesia",
    },
    {
      href: "https://res.cloudinary.com/leecode/image/upload/v1685789394/abed2574-95a9-4af8-acb5-540c283905cd.webp",
      alt: "Villa 1 - Bali - Indonesia",
    },
    {
      href: "https://res.cloudinary.com/leecode/image/upload/v1685789394/3873f75e-46f3-4978-894a-39e9f00a6128.webp",
      alt: "Villa 1 - Bali - Indonesia",
    },
    {
      href: "https://res.cloudinary.com/leecode/image/upload/v1685789394/59db2721-eca1-49bb-9a96-b524e690d258.webp",
      alt: "Villa 1 - Bali - Indonesia",
    },
    {
      href: "https://res.cloudinary.com/leecode/image/upload/v1685789394/08ecd3a4-aea9-498e-b010-cba476f45f1b.webp",
      alt: "Villa 1 - Bali - Indonesia",
    },
    {
      href: "https://res.cloudinary.com/leecode/image/upload/v1685789394/4102b7c9-3040-4522-877a-bd242f913490.webp",
      alt: "Villa 1 - Bali - Indonesia",
    },
    {
      href: "https://res.cloudinary.com/leecode/image/upload/v1685789393/fb90369c-1ff0-4dbf-a06c-05deda311256.webp",
      alt: "Villa 1 - Bali - Indonesia",
    },
  ],
};

export default Array.from({ length: 30 }, () => data);

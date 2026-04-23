export const PROJECT_META = [
  {
    id: 1,
    slug: "haji-umroh-store",
    title: "Haji Umroh Store",
    category: "Government Project · Backend",
    color: "bg-emerald-400",
    img: "/projects/haji-umroh-store.png",
  },
  {
    id: 2,
    slug: "rewrite-pmii",
    title: "Rewrite Web PMII",
    category: "Modernization · Golang",
    color: "bg-blue-400",
    img: "/projects/pmii.png",
  },
  {
    id: 3,
    slug: "plex-seller",
    title: "Plex Seller ERP",
    category: "ERP · Enterprise",
    color: "bg-purple-400",
    img: "/projects/plexseller.jpg",
  },
  {
    id: 4,
    slug: "alena-soccer",
    title: "Alena Soccer",
    category: "Fullstack · Laravel",
    color: "bg-lime-400",
    img: "/projects/alena.png",
  },
  {
    id: 5,
    slug: "elibrary-bawaslu",
    title: "E-Library Bawaslu",
    category: "Government · Fullstack",
    color: "bg-orange-400",
    img: "/projects/elibrary.png",
  },
  {
    id: 6,
    slug: "afi-sport",
    title: "AFI Sport E-Commerce",
    category: "Fullstack · E-Commerce",
    color: "bg-pink-400",
    img: "/projects/ecommerce.png",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});

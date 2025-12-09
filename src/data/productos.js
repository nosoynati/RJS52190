const product_data = [
  {
    id: 1,
    nombre: "Sweater cubismo",
    imagen: "/assets/prenda (1).png",
    descripcion: "Sweater geométrico",
    long_descripcion: "Sweater de lana blanco con diseños geométricos",
    precio: 1200.00,
    variants: [
      {
        color: "azul",
        label: "azul"
      }
    ],
    talle: "XS",
    temporada: "otoño-invierno",
    category: "sweaters",
    stock: 4
  },
  {
    id: 2,
    nombre: "Camisa a rayas",
    imagen: "/assets/prenda (14).png",
    descripcion: "Camisa clásica a rayas",
    long_descripcion: "Camisa clásica de poliéster y algodón a rayas unisex",
    precio: 1670.00,
    variants: [
      {
        color: "azul, rojo y negro",
        label: "azul, rojo y negro"
      },
      {
        color: "verde, azul y negro",
        label: "verde, azul y negro"
      },
      {
        color: "negro, rojo y blanco",
        label: "negro, rojo y blanco"
      },
      {
        color: "rosa y violeta",
        label: "rosa y violeta"
      }
    ],
    talle: "M",
    temporada: "primavera-verano",
    category: "camisas",
    stock: 10
  },
  {
    id: 3,
    nombre: "Sweater Rombos",
    imagen: "/assets/prenda (3).png",
    descripcion: "Sweater Rombos",
    long_descripcion: "Sweater grande, con diseño clásico de rombos, de lana y algodón",
    precio: 2500.00,
    variants: [
      {
        value: "negro/blanco",
        label: "negro/blanco"
      },
      {
        color: "marrón",
        label: "marrón"
      },
      {
        color: "beige/crema",
        label: "beige/crema"
      }
    ],
    talle: "M",
    temporada: "otoño-invierno",
    category: "sweaters",
    stock: 5
  },
  {
    id: 4,
    nombre: "Saco oranges",
    imagen: "/assets/prenda (4).png",
    descripcion: "Saco de lana con diseño",
    long_descripcion: "Saco talle S de lana, tejido a mano, con diseño de naranjas.",
    precio: 3499.99,
    variants: [
      {
        value: "blanco",
        label: "blanco"
      }, {
        value: "naranja",
        label: "naranja"
      },
      {
        value: "amarillo",
        label: "amarillo"
      }
    ],
    talle: "S",
    temporada: "otoño-invierno",
    category: "abrigos",
    stock: 4
  },
  {
    id: 5,
    nombre: "Saco corazones",
    imagen: "/assets/prenda (7).png",
    descripcion: "Saco de lana con diseño",
    long_descripcion: "Saco blanco de lana y algodón, tejido a mano, con diseño de corazones, y bolsillos. Cuello tipo camisero en rib de algodón",
    precio: 3100.00,
    variants: [
      {
        value: "blanco",
        label: "blanco"
      }, {
        value: "rosa",
        label: "rosa"
      }
    ],
    talle: "S",
    temporada: "primavera-verano",
    category: "abrigos",
    stock: 3
  },
  {
    id: 6,
    nombre: "Campera bomber",
    imagen: "/assets/prenda (5).png",
    descripcion: "Campera de jean tipo bomber",
    long_descripcion: "Campera combinada, diseño tipo bomber jacket. Cuerpo de denim rígido y mangas de buzo rústico con detalles de rib a rayas en puños y cuello",
    precio: 3199.99,
    variants: [
      {
        value: "azul clásico",
        label: "azul clásico"
      },
      {
        value: "jean desgastado",
        label: "jean desgastado"
      }
    ],
    talle: "L",
    temporada: "otoño-invierno",
    category: "abrigos",
    stock: 5
  },
  {
    id: 7,
    nombre: "Cardigan corazones",
    imagen: "/assets/prenda (6).png",
    descripcion: "Cardigan rosa con corazones",
    long_descripcion: "Cárdigann en tejido sintético, variante crudo con detalles de corazones en rosado.",
    precio: 2799.09,
    variants: [
      {
        value: "celeste pastel",
        label: "celeste pastel"
      }, {
        value: "rosa pastel",
        label: "rosa pastel"
      },
      {
        value: "blanco",
        label: "blanco"
      }
    ],
    talle: "S",
    temporada: "otoño-invierno",
    category: "abrigos",
    stock: 6
  },
  {
    id: 8,
    nombre: "Sweater retro",
    imagen: "/assets/prenda (10).png",
    descripcion: "Sweater retro con corazones",
    long_descripcion: "Sweater retro con corazones, en lana natural. Tejido pesao y abrigado. Talle amplio",
    precio: 2300.00,
    variants: [
      {
        value: "azul",
        label: "azul"
      }, {
        value: "blanco",
        label: "blacno"
      }
    ],
    talle: "XL",
    temporada: "todas",
    category: "sweaters",
    stock: 4
  },
  {
    id: 9,
    nombre: "Campera Jean",
    imagen: "/assets/prenda (15).png",
    descripcion: "Campera de jean",
    long_descripcion: "Campera de jean abrigada, con corderito sintético en su interior",
    precio: 1999.99,
    variants: [
      {
        value: "azul",
        label: "azul"
      }
    ],
    talle: "L",
    temporada: "otoño-invierno",
    category: "abrigos",
    stock: 4
  },
  {
    id: 10,
    nombre: "Aros",
    imagen: "/assets/prenda (17).png",
    descripcion: "Aros con baño en plata",
    long_descripcion: "Aros con baño en plata 925, con detalles en esmaltado",
    precio: 1099.99,
    variants: [
      {
        value: "pavo real",
        label: "pavo real"
      },
      {
        value: "paloma",
        label: "paloma"
      }
    ],
    talle: "",
    temporada: "todas",
    category: "accesorios",
    stock: 2
  },
  {
    id: 11,
    nombre: "Zapatos dama",
    imagen: "/assets/pprenda (6).png",
    descripcion: "Zapatos bajos de dama",
    long_descripcion: "Zapatos taco bajo de dama, con detalle de moño",
    precio: 2000.00,
    variants: [
      {
        value: "celeste gamuza",
        label: "celeste gamuza"
      },
      {
        value: "marrón cuero",
        label: "marrón cuero"
      }
    ],
    talle: "40",
    temporada: "otoño-invierno",
    category: "calzado",
    stock: 3
  },
  {
    id: 12,
    nombre: "Camisa wild",
    imagen: "/assets/prenda (9).png",
    descripcion: "Camisa estampada",
    long_descripcion: "Camisa estampada unisex, marca Gucci original",
    precio: 4269.99,
    variants: [
      {
        value: "verde",
        label: "verde"
      },
    ],
    talle: "U",
    temporada: "primavera-verano",
    category: "camisas",
    stock: 5
  },
  {id: 13,
  nombre: "Zapatos mocasín",
  imagen: "/assets/pprenda (3).png",
  descripcion: "Zapatos mocasín",
  long_descripcion: "Zapatos tipo mocasines de dama con taco medio",
  precio: 1999.99,
  variants: [
    {
      value: "celeste gamuza",
      label: "celeste gamuza"
    },
    {
      value: "marrón cuero",
      label: "marrón cuero"
    }
  ],
  talle: "40",
  temporada: "otoño-invierno",
  category: "calzado",
  stock: 2
},
  
]
export default product_data;
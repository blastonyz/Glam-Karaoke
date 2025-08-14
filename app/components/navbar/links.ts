import type { MenuCategory } from "@/app/types"

export const links: MenuCategory[] = [
     {
        item: "Ofertas 0:01 AM",
        products: [
            {
                name: "Pizzas variedad a consultar",
                price:15000
            },
              {
                name: "Sandwich de Milanesa",
                price:13000
            },
              {
                name: "Lomito",
                price:13000
            },
              {
                name: "Hamburguesa",
                price:10000
            },
              {
                name: "Porción de Papas",
                price:5000
            },
              {
                name: "Tragos",
                price:5000
            }
        ],
        images:['https://res.cloudinary.com/dmq4gtk4w/image/upload/v1755188552/mila_prljyc.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1755188791/pizza_sp873x.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1755188552/tragos_eoedzt.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719557/papas_jcyun8.jpg']
    },
    {
        item: "Carnes",
        products: [
            {
                name: "Milanesa de Ternera",
                price: 14500
            },
            {
                name: "Milanesa Napolitana",
                price: 16500
            },
            {
                name: "Milanesa a Caballo",
                price: 17500
            },
            {
                name: "Milanesa a la Suiza",
                price: 17500
            },
            {
                name: "Tabla de Milanesas p/4 pers. con papas",
                price: 52000
            },
            {
                name: "Matambre Tiernizado",
                price: 21000
            },
            {
                name: "Matambre a la Napolitana",
                price: 23000
            },
            {
                name: "Bife de Chorizo",
                price: 24000
            }
        ],
        images:['https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719557/mila-napo2_ojm0wb.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719557/mila-napo_szqn8e.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719556/matambre_rc075o.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719553/bife-chor_nz7vbm.jpg']
    },
    {
        item: "Parrilla",
        products: [
            {
                name: "Tira de Asado",
                price: 23000
            },
            {
                name: "Vacio de Tenrera",
                price: 24000
            },
            {
                name: "Parrilla p/2  (costilla, falda, pollo, chorizo, morcilla,chinchulin, riñon, corazon)",
                price: 38000
            },
            {
                name: "Porción de Chorizo",
                price: 12000
            },
            {
                name: "Porción de Morcilla",
                price: 12000
            },
            {
                name: "Porción de Chinchulin",
                price: 12000
            },
            {
                name: "Cabrito los Cardones c/papas, choclo y salsa a las finas hierbas",
                price: 28500
            }
        ],
        images:['https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719553/cabrito_qohazf.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719558/parrillada_trtf81.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719558/tira_y5xjqq.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719554/chinchu_qpbjx4.jpg']
    },
    {
        item: "Guarniciones",
        products: [
            {
                name: "Papas fritas, españolas o rústicas",
                price: 6500
            },
            {
                name: "Papas a la Crema",
                price: 7500
            },
            {
                name: "Papas al Horno",
                price: 7000
            },
            {
                name: "Papas con Cheddar",
                price: 7700
            },
            {
                name: "Puré",
                price: 5700
            },
            {
                name: "Arroz Primavera",
                price: 5500
            },
            {
                name: "Ensalada Mixta",
                price: 6000
            },
            {
                name: "Ensalada Completa",
                price: 7000
            },
        ],
        images:['https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719557/papas_jcyun8.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719557/papas-crema_so0dgx.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719557/papas-cheddar_reth3y.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719557/mixta_nld6yl.jpg']
    },
    {
        item: "Postres",
        products: [
            {
                name: "Flan con Crema o Dulce de Leche",
                price: 7000
            },
            {
                name: "Budín de Pan con Crema o Dulce de Leche",
                price: 7000
            },
            {
                name: "Dulce de Batata con Queso",
                price: 6000
            },
            {
                name: "Quesillo con Cayote, Nuez y Miel de Caña",
                price: 7500
            },
            {
                name: "Dulce de Cayote con Nueces",
                price: 6500
            },
            {
                name: "Torta Turrón Salteño con Miel de Caña",
                price: 8500
            },
            {
                name: "Bombón Escocés",
                price: 6500
            },
            {
                name: "Copa Helada",
                price: 7500
            },
            {
                name: "copa Helada los Cardones (helado, cayote, nueces)",
                price: 8000
            },
        ],
        images:['https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719556/escoces_ljyyfq.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719559/batata_wch83z.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719556/copa-helada_vbmwk9.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719553/flan_v7vmah.jpg']
    },
    {
        item: "Platos Regionales",
        products: [
            {
                name: "Empanadas (Carne, Queso, Pollo, Queso de Cabra)",
                price: 2000
            },
            {
                name: "Humitas en Chala",
                price: 8000
            },
            {
                name: "Tamal, Tamal de Quinoa",
                price: 8000
            },
            {
                name: "Locro",
                price: 18000
            },
            {
                name: "Cazuela de Cabrito",
                price: 23000
            }

        ],
        images:['https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719556/empanadas_ohdyxo.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1755188552/locro_yxn7of.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1755188552/cazuela_svvdes.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719558/tamales_wwyjn2.jpg']
    },
    {
        item: "Pastas",
        products: [
            {
                name: "Ñoquis con Salsa",
                price: 18000
            },
            {
                name: "Ravioles con Salsa",
                price: 18000
            },
            {
                name: "Tallarines con Salsa",
                price: 18000
            },
            {
                name: "Agnolottis con Salsa",
                price: 18000
            },
            {
                name: "Sorrentinos con Salsa ",
                price: 18000
            },
        ],
        images:['https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719557/noquis_w3yrka.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719558/sorrentinos_tkqqva.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1755188552/ravioles_kvem7p.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719558/tallarines_pbrq1d.jpg'],
    },
    {
        item: "Salsas",
        products: [
            {
                name: "Filetto, Blanca, Bolognesa, 4 Quesos o Parisienne",
                price: 0
            }
        ],
        images:[]
    },
    {
        item: "Especialidades",
        products: [
            {
                name: "Rabas a la Provenzal c/papas Bastón, criolla, apio, ají y Crema de Limón",
                price: 28000
            },
            {
                name: "Brochette dePollo c/verduras asadas tomate, cebolla, morron y Papas Bastón",
                price: 23500
            },
            {
                name: "Brochette de Carne de Vaca c/verduras asadas tomate, cebolla, morron y Papas Bastón",
                price: 24500
            },
            {
                name: "Wok de Pollo Mixto",
                price: 0
            },
            {
                name: "Wok de Ternera con Arróz",
                price: 0
            },
            {
                name: "Bife de Lomo al Chmapignon c/papas noissete y salsa demi-glace",
                price: 25000
            },
            {
                name: "Bife de Lomo a la Pimienta c/papas noissete y salsa demi-glace",
                price: 25000
            },
            {
                name: "Bife de Lomo a la Frontera c/papas noissete y salsa demi-glace",
                price: 25000
            },
            {
                name: "Bife de Lomo al verdeo con papas españolas y huevo frito",
                price: 25000
            },
            {
                name: "Bife de Lomo al verdeo c/papas noissete y salsa demi-glace y Vino Blanco",
                price: 25000
            },
            {
                name: "Bife de Lomo a la Mostaza con papas españolas (Mostaza y Crema)",
                price: 25000
            },
            {
                name: "Lomo los Cardones con papas Rústicas",
                price: 25000
            },
            {
                name: "Pollo grillado a la Mostaza c/papas (Mostaza y Crema)",
                price: 23000
            },
            {
                name: "Pollo grillado al Champignon c/papas noisette (Salsa demi-glace y Champignon)",
                price: 23000
            },
            {
                name: "Pollo grillado al Verdeo con papas noisette (salsa demi-glace y vino Blanco)",
                price: 23000
            },
            {
                name: "Pollo grillado a la Provenzal con papas firtas (ajo, perejil y vino Blanco",
                price: 23000
            }
        ],
        images:['https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719558/pollo_igjt29.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719556/lomo_fthiiu.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719553/brochette_wbotrx.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719558/wok_s83qvt.jpg']
    },
    {
        item: "Tragos",
        products: [
            {
                name: "Fernet con Coca",
                price: 8000
            },
            {
                name: "Medida de Fernet",
                price: 6500
            },
            {
                name: "Daiquiri",
                price: 7000
            },
            {
                name: "Campari",
                price: 7000
            },
            {
                name: "Aperol",
                price: 7500
            },

            {
                name: "Gin Tonic",
                price: 7000
            },
            {
                name: "Gancia con Sprite",
                price: 7000
            },
            {
                name: "Cinzano",
                price: 7000
            }
        ],
        images:['https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719557/daiquiri_b9bkvj.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719553/gin_wy2vzo.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719553/fernet_xfo7pl.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719555/cinzano_aiuigg.jpg']
    },
    {
        item: "Cervezas",
        products: [
            {
                name: "Salta",
                price: 10000
            },
            {
                name: "Salta Negra",
                price: 10000
            },
            {
                name: "Heineken",
                price: 14500
            },
            {
                name: "Imperial",
                price: 13500
            },
            {
                name: "Miller",
                price: 14000
            },
            {
                name: "Salta Lata",
                price: 8000
            },
            {
                name: "Miller Lata",
                price: 9500
            },
            {
                name: "Heineken Lata",
                price: 10000
            },
            {
                name: "Corona Lata",
                price: 10000
            }
        ],
        images:['https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719555/heineken_kjdirj.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719556/imperial_vxmxf7.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719556/corona_tbu98q.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719558/salta_ecuw8n.jpg']
    },
    {
        item: "Vinos",
        products: [
            {
                name: "Tapao del Cese Malbec/Torrontés",
                price: 0
            },
            {
                name: "Quara",
                price: 20000
            },
            {
                name: "Puna",
                price: 20000
            },
            {
                name: "Elementos",
                price: 17500
            },
            {
                name: "Quebrada de las Flechas Malbec/Torrontés",
                price: 0
            },
            {
                name: "Finca Humanao",
                price: 22000
            },
            {
                name: "Piatelli Malbec",
                price: 34000
            },
            {
                name: "Cafayate Malbec/ Torrontés / dulce Tardío",
                price: 18500
            },
            {
                name: "Vino de la Casa 1 lt",
                price: 16000
            },
            {
                name: "Dilema Blanco Dulce",
                price: 17000
            },
            {
                name: "Vino los Cardones Malbec/Torrontés",
                price: 28000
            },
            {
                name: "Soju",
                price: 18000
            },

            {
                name: "Amalaya Malbec",
                price: 27000
            }

        ],
        images:['https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719558/quara_ry0kvi.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719558/piatelli_wjum8j.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719556/humanao_gzszio.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719553/cafayate_jkkzpq.jpg']
    },
    {
        item: "Bebidas",
        products: [
            {
                name: "Coca Cola / Fanta / Sprite / zero 375cc",
                price:3400
            },
              {
                name: "Aguas saborizadas 375cc",
                price:3800
            },
              {
                name: "Agua con Gas / sin Gas",
                price:3200
            },
              {
                name: "Coca Cola / Fanta / Sprite 1 lt",
                price:7800
            },
              {
                name: "Coca Cola / zero 1.5l ",
                price:8100
            },
              {
                name: "Limonada (menta, jengibre)",
                price:6500
            },
              {
                name: "Limonada de Frutilla o Frutos Rojos",
                price:7000
            }
        ],
        images:['https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719555/coca_d0e81m.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1755189241/aguas_mr4qyo.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1755189256/licuado-fruti_g5kz4p.jpg','https://res.cloudinary.com/dmq4gtk4w/image/upload/v1753719556/limonada_boe9hu.jpg']
    }
   
]
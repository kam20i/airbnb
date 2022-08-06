const categories = [
    {
        id: 1,
        title: 'Lakefront',
        image: './images/categories/Lakefront.png'
    },
    {
        id: 2,
        title: 'Beach',
        image: './images/categories/Beach.png'
    },
    {
        id: 3,
        title: 'Cabins',
        image: './images/categories/Cabins.png'
    },
    {
        id: 4,
        title: 'Islands',
        image: './images/categories/Islands.png'
    },
    {
        id: 5,
        title: 'Camping',
        image: './images/categories/Camping.png'
    },
    {
        id: 6,
        title: 'Tiny homes',
        image: './images/categories/Tiny homes.png'
    },
    {
        id: 7,
        title: 'OMG!',
        image: './images/categories/OMG!.png'
    },
    {
        id: 8,
        title: 'A-frames',
        image: './images/categories/A-frames.png'
    },
    {
        id: 9,
        title: 'Design',
        image: './images/categories/Design.png'
    },
    {
        id: 10,
        title: 'Surfing',
        image: './images/categories/Surfing.png'
    },
    {
        id: 11,
        title: 'Amazing pools',
        image: './images/categories/Amazing pools.png'
    },
    {
        id: 12,
        title: 'Treehouses',
        image: './images/categories/Treehouses.png'
    },
    {
        id: 13,
        title: 'National parks',
        image: './images/categories/National parks.png'
    },
    {
        id: 14,
        title: 'Bed & breakfasts',
        image: './images/categories/Bed & breakfasts.png'
    },
    {
        id: 15,
        title: 'Caves',
        image: './images/categories/Caves.png'
    },
    {
        id: 16,
        title: 'Countryside',
        image: './images/categories/Countryside.png'
    },
    {
        id: 17,
        title: 'Barns',
        image: './images/categories/Barns.png'
    },
    {
        id: 18,
        title: 'Tropical',
        image: './images/categories/Tropical.png'
    },
    {
        id: 19,
        title: 'Shared homes',
        image: './images/categories/Shared homes.png'
    },
    {
        id: 20,
        title: 'Earth homes',
        image: './images/categories/Earth homes.png'
    },
    {
        id: 21,
        title: 'Iconic cities',
        image: './images/categories/Iconic cities.png'
    },
    {
        id: 22,
        title: "Chef's kitchens",
        image: "./images/categories/Chef's kitchens.png"
    },
    {
        id: 23,
        title: 'Luxe',
        image: './images/categories/Luxe.png'
    },
    {
        id: 24,
        title: 'Farms',
        image: './images/categories/Farms.png'
    },
    {
        id: 25,
        title: 'Amazing views',
        image: './images/categories/Amazing views.png'
    },
    {
        id: 26,
        title: 'Castles',
        image: './images/categories/Castles.png'
    },
    {
        id: 27,
        title: 'Golfing',
        image: './images/categories/Golfing.png'
    },
    {
        id: 28,
        title: 'Historical homes',
        image: './images/categories/Historical homes.png'
    },
    {
        id: 29,
        title: 'Yurts',
        image: './images/categories/Yurts.png'
    },
    {
        id: 30,
        title: 'Campers',
        image: './images/categories/Campers.png'
    },
    {
        id: 31,
        title: 'Cycladic homes',
        image: './images/categories/Cycladic homes.png'
    },
    {
        id: 32,
        title: 'Mansions',
        image: './images/categories/Mansions.png'
    },
    {
        id: 33,
        title: 'Vineyards',
        image: './images/categories/Vineyards.png'
    },
    {
        id: 34,
        title: "Shepherd's huts",
        image: "./images/categories/Shepherd's huts.png"
    },
    {
        id: 35,
        title: 'Beachfront',
        image: './images/categories/Beachfront.png'
    },
    {
        id: 36,
        title: 'Skiing',
        image: './images/categories/Skiing.png'
    },
    {
        id: 37,
        title: 'Casas particulares',
        image: './images/categories/Casas particulares.png'
    },
    {
        id: 38,
        title: 'Domes',
        image: './images/categories/Domes.png'
    },
    {
        id: 39,
        title: 'Kezhans',
        image: './images/categories/Kezhans.png'
    },
    {
        id: 40,
        title: 'Off-the-grid',
        image: './images/categories/Off-the-grid.png'
    },
    {
        id: 41,
        title: 'Minsus',
        image: './images/categories/Minsus.png'
    },
    {
        id: 42,
        title: 'Boats',
        image: './images/categories/Boats.png'
    },
    {
        id: 43,
        title: 'Ryokans',
        image: './images/categories/Ryokans.png'
    },
    {
        id: 44,
        title: 'Windmills',
        image: './images/categories/Windmills.png'
    },
    {
        id: 45,
        title: 'Houseboats',
        image: './images/categories/Houseboats.png'
    },
    {
        id: 46,
        title: 'Containers',
        image: './images/categories/Containers.png'
    },
    {
        id: 47,
        title: 'Creative spaces',
        image: './images/categories/Creative spaces.png'
    },
    {
        id: 48,
        title: 'Towers',
        image: './images/categories/Towers.png'
    },
    {
        id: 49,
        title: 'Desert',
        image: './images/categories/Desert.png'
    },
    {
        id: 50,
        title: 'Grand pianos',
        image: './images/categories/Grand pianos.png'
    },
    {
        id: 51,
        title: 'Raids',
        image: './images/categories/Raids.png'
    },
    {
        id: 52,
        title: 'Trulli',
        image: './images/categories/Trulli.png'
    },
    {
        id: 53,
        title: 'Dammusos',
        image: './images/categories/Dammusos.png'
    },
    {
        id: 54,
        title: 'Ski-in/out',
        image: './images/categories/Ski-in-out.png'
    },
    {
        id: 55,
        title: 'Lake',
        image: './images/categories/Lake.png'
    },
    {
        id: 56,
        title: 'Arctic',
        image: './images/categories/Arctic.png'
    },
    
]
export default categories
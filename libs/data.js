import dish1 from '@/public/assets/dishes/1.png'
import dish2 from '@/public/assets/dishes/2.png'
import dish3 from '@/public/assets/dishes/3.png'
import dish4 from '@/public/assets/dishes/4.png'
import dish5 from '@/public/assets/dishes/5.png'
import dish6 from '@/public/assets/dishes/6.png'
import dish7 from '@/public/assets/dishes/7.png'
import dish8 from '@/public/assets/dishes/8.png'
import dish9 from '@/public/assets/dishes/9.png'
import cold1 from '@/public/assets/dishes/cold1.png'
import cold2 from '@/public/assets/dishes/cold2.png'
import cold3 from '@/public/assets/dishes/cold3.png'
import cold4 from '@/public/assets/dishes/cold4.png'
import cold5 from '@/public/assets/dishes/cold5.png'
import soup1 from '@/public/assets/dishes/soup1.png'
import soup2 from '@/public/assets/dishes/soup2.png'
import soup3 from '@/public/assets/dishes/soup3.png'
import grill1 from '@/public/assets/dishes/grill1.png'
import grill2 from '@/public/assets/dishes/grill2.png'
import grill3 from '@/public/assets/dishes/grill3.png'
import grill4 from '@/public/assets/dishes/grill4.png'

export const orderTypes = [
    { label: "Dine In", value: "Dine In" },
    { label: "To Go", value: "To Go" },
    { label: "Delivery", value: "Delivery" },
]

export const columns = [
    { name: "Customer", uid: "customer" },
    { name: "Menu", uid: "menu" },
    { name: "Total Payment", uid: "payment" },
    { name: "Status", uid: "status" },
];

export const users = [
    {
        id: 1,
        customer: "Tony Reichert",
        role: "CEO",
        team: "Management",
        // status: "active",
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com",
        menu: 'Speacy seasoned seafood noodles',
        payment: '125',
        status: 'completed',
    },
    {
        id: 2,
        customer: "Zoey Lang",
        role: "Technical Lead",
        team: "Development",
        //  status: "paused",
        age: "25",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        email: "zoey.lang@example.com",
        menu: 'Salted Pasta with mushroom sauce',
        payment: '145',
        status: 'preparing',
    },
    {
        id: 3,
        customer: "Jane Fisher",
        role: "Senior Developer",
        team: "Development",
        //   status: "active",
        age: "22",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        email: "jane.fisher@example.com",
        menu: 'Beef dumpling in hot and sour soup',
        payment: '105',
        status: 'pending',
    },
    {
        id: 4,
        customer: "William Howard",
        role: "Community Manager",
        team: "Marketing",
        //status: "vacation",
        age: "28",
        avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        email: "william.howard@example.com",
        menu: 'Hot spicy fried rice with omelet',
        payment: '45',
        status: 'completed',
    },
    {
        id: 5,
        customer: "Kristen Copper",
        role: "Sales Manager",
        team: "Sales",
        // status: "active",
        age: "24",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com",
        menu: 'Hot spicy fried rice with omelet',
        payment: '245',
        status: 'completed',
    },
];

export const data = [
    {
        "id": 1,
        "name": "Spicy seasoned seafood noodles",
        'img': dish1,
        "price": 2.29,
        "quantity": 20,
        'qor': 1,
        "category": "hot",
    },
    {
        "id": 2,
        "name": "Chicken parmesan with spaghetti",
        'img': dish2,
        "price": 3.49,
        "quantity": 5,
        'qor': 1,
        "category": "hot",
    },
    {
        "id": 3,
        "name": "Beef and broccoli stir fry",
        'img': dish3,
        "price": 6.79,
        "quantity": 8,
        'qor': 1,
        "category": "hot",
    },
    {
        "id": 4,
        "name": "Chicken Caesar salad",
        'img': dish4,
        "price": 2.99,
        "quantity": 10,
        'qor': 1,
        "category": "hot",
    },
    {
        "id": 5,
        "name": "Pork chops with mashed potatoes",
        'img': dish5,
        "price": 7.99,
        "quantity": 15,
        'qor': 1,
        "category": "hot",
    },
    {
        "id": 6,
        "name": "Turkey club sandwiches",
        'img': dish6,
        "price": 5.99,
        "quantity": 10,
        'qor': 1,
        "category": "hot",
    },
    {
        "id": 7,
        "name": "Creamy garlic breadsticks",
        'img': dish7,
        "price": 1.99,
        "quantity": 15,
        'qor': 1,
        "category": "hot",
    },
    {
        "id": 8,
        "name": "Fruit salad",
        'img': dish8,
        "price": 2.99,
        "quantity": 10,
        'qor': 1,
        "category": "cold",
    },
    {
        "id": 9,
        "name": "Lemon bars",
        'img': dish9,
        "price": 3.99,
        "quantity": 15,
        'qor': 1,
        "category": "hot",
    },
    {
        "id": 10,
        "name": "Chicken Caesar salad",
        'img': cold1,
        "price": 4.99,
        "quantity": 10,
        'qor': 1,
        "category": "cold",
    },
    {
        "id": 11,
        "name": "Roasted beets and carrots",
        'img': soup1,
        "price": 2.99,
        "quantity": 15,
        'qor': 1,
        "category": "soup",
    },
    {
        "id": 12,
        "name": "Macaroni and cheese casserole",
        'img': grill1,
        "price": 4.99,
        "quantity": 10,
        'qor': 1,
        "category": "grill",
    },
    {
        "id": 13,
        "name": "Baked ziti with meat sauce",
        'img': grill2,
        "price": 6.99,
        "quantity": 15,
        'qor': 1,
        "category": "grill",
    },
    {
        "id": 14,
        "name": "Sundae sunday dessert bar",
        'img': soup2,
        "price": 7.99,
        "quantity": 10,
        'qor': 1,
        "category": "soup",
    },
    {
        "id": 15,
        "name": "Creamy tomato soup",
        'img': soup3,
        "price": 3.99,
        "quantity": 15,
        'qor': 1,
        "category": "soup",
    },
    {
        "id": 16,
        "name": "Turkey pot pie",
        'img': cold2,
        "price": 4.99,
        "quantity": 10,
        'qor': 1,
        "category": "cold",
    },
    {
        "id": 17,
        "name": "Chicken parmesan",
        'img': grill3,
        "price": 8.99,
        "quantity": 15,
        'qor': 1,
        "category": "grill",
    },
    {
        "id": 18,
        "name": "Beef stroganoff",
        'img': grill4,
        "price": 7.99,
        "quantity": 10,
        'qor': 1,
        "category": "grill",
    },
    {
        "id": 19,
        "name": "Roasted vegetables",
        'img': cold3,
        "price": 2.99,
        "quantity": 15,
        'qor': 1,
        "category": "cold",
    },
    {
        "id": 20,
        "name": "Caesar salad",
        'img': cold4,
        "price": 3.99,
        "quantity": 10,
        'qor': 1,
        "category": "cold",
    },
    {
        "id": 21,
        "name": "Pasta carbonara",
        'img': cold5,
        "price": 5.99,
        "quantity": 15,
        'qor': 1,
        "category": "hot",
    }
]
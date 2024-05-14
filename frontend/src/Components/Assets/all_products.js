import p1_img from './men/jeans1.png'
import p2_img from './men/jeans2.png'
import p3_img from './men/jeans3.png'
import p4_img from './men/jeans4.png'
import p5_img from './men/joggers1.png'
import p6_img from './men/joggers2.png'
import p7_img from './men/joggers3.png'
import p8_img from './men/joggers4.png'
import p9_img from './men/shirt1.png'
import p10_img from './men/shirt2.png'
import p11_img from './men/shirt3.png'
import p12_img from './men/shirt4.png'
import p13_img from './men/shoe1.png'
import p14_img from './men/shoe2.png'
import p15_img from './men/shoe3.png'
import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'
// import p16_img from './men/shoe4.png'


let data_product = [
        {
          id: 1,
          name: "men's Floral Print Dress",
          category: "men",
          image:p1_img,
          new_price: 49.99,
          old_price: 69.99
        },
        {
          id: 2,
          name: "Men's Slim Fit Denim Jeans",
          category: "men",
          image:p2_img,
          old_price: 59.99
        },
        {
          id: 3,
          name: "men's Classic Trench Coat",
          category: "men",
          image:p3_img,
          new_price: 79.99,
          old_price: 99.99
        },
        {
          id: 4,
          name: "Men's Casual Polo Shirt",
          category: "men",
          image:p4_img,
          new_price: 24.99,
          old_price: 34.99
        },
        {
          id: 5,
          name: "men's High Waisted Skinny Jeans",
          category: "men",
          image:p5_img,
          new_price: 29.99,
          old_price: 39.99
        },
        {
          id: 6,
          name: "Men's Formal Blazer Jacket",
          category: "men",
          image:p6_img,
          new_price: 89.99,
          old_price: 119.99
        },
        {
          id: 7,
          name: "men's Striped Sweater",
          category: "men",
          image:p7_img,
          new_price: 34.99,
          old_price: 49.99
        },
        {
          id: 8,
          name: "Men's Cargo Shorts",
          category: "men",
          image:p8_img,
          new_price: 19.99,
          old_price: 29.99
        },
        {
          id: 9,
          name: "men's Leather Ankle Boots",
          category: "men",
          image: p9_img,
          new_price: 59.99,
          old_price: 79.99
        },
        {
          id: 10,
          name: "Men's Hooded Sweatshirt",
          category: "men",
          image: p10_img,
          new_price: 44.99,
          old_price: 54.99
        },
        {
          id: 11,
          name: "men's Midi Pleated Skirt",
          category: "men",
          image:p11_img,
          new_price: 39.99,
          old_price: 49.99
        },
        {
          id: 12,
          name: "Men's Classic Oxford Shirt",
          category: "men",
          image:p12_img,
          new_price: 29.99,
          old_price: 39.99
        },
        {
          id: 13,
          name: "men's Oversized Knit Sweater",
          category: "men",
          image:p13_img,
          new_price: 49.99,
          old_price: 59.99
        },
        {
          id: 14,
          name: "Men's Chino Trousers",
          category: "men",
          image:p14_img,
          new_price: 34.99,
          old_price: 44.99
        },
        {
          id: 15,
          name: "men's Ruffled Blouse",
          category: "men",
          image:p15_img,
          new_price: 24.99,
          old_price: 34.99
        },
        {
          id: 16,
          name: "Men's Quilted Vest",
          category: "men",
          image:p16_img,
          new_price: 59.99,
          old_price: 69.99
        },
        // {
        //   id: 17,
        //   name: "men's Embroidered Denim Jacket",
        //   category: "men",
        //   image:p17_img,
        //   new_price: 54.99,
        //   old_price: 64.99
        // },
        // {
        //   id: 18,
        //   name: "Men's Slim Fit Turtleneck",
        //   category: "men",
        //   image:p18_img,
        //   new_price: 44.99,
        //   old_price: 54.99
        // },
        // {
        //   id: 19,
        //   name: "men's Printed Maxi Dress",
        //   category: "men",
        //   image:p19_img,
        //   new_price: 69.99,
        //   old_price: 79.99
        // },
        // {
        //   id: 20,
        //   name: "Men's Leather Chelsea Boots",
        //   category: "men",
        //   image:p20_img,
        //   new_price: 89.99,
        //   old_price: 109.99
        // }
        // {
        // id: 21,
        // name: "men's Belted Trench Coat",
        // category: "men",
        //   image:p21_img,
        // new_price: 89.99,
        // old_price: 109.99
        // },
        // {
        // id: 22,
        // name: "Men's Denim Jacket",
        // category: "men",
        // image:p22_img,
        // new_price: 49.99,
        // old_price: 59.99
        // },
        // {
        // id: 23,
        // name: "men's Pleated Maxi Skirt",
        // category: "men",
        // image:p23_img,
        // new_price: 59.99,
        // old_price: 69.99
        // },
        // {
        // id: 24,
        // name: "Men's Linen Button-Up Shirt",
        // category: "men",
        // image:p24_img,
        // new_price: 39.99,
        // old_price: 49.99
        // },
        // {
        // id: 25,
        // name: "men's Cropped Hoodie",
        // category: "men",
        // image:p25_img,
        // new_price: 29.99,
        // old_price: 39.99
        // },
        // {
        // id: 26,
        // name: "Men's Cargo Pants",
        // category: "men",
        //   image:p26_img,
        // new_price: 34.99,
        // old_price: 44.99
        // },
        // {
        // id: 27,
        // name: "men's Faux Leather Jacket",
        // category: "men",
        //   image:p27_img,
        // new_price: 69.99,
        // old_price: 79.99
        // },
        // {
        // id: 28,
        // name: "Men's V-Neck Sweater",
        // category: "men",
        //   image:p28_img,
        // new_price: 24.99,
        // old_price: 34.99
        // },
        // {
        // id: 29,
        // name: "men's Off-Shoulder Blouse",
        // category: "men",
        //   image:p29_img,
        // new_price: 19.99,
        // old_price: 29.99
        // },
        // {
        // id: 30,
        // name: "Men's Plaid Flannel Shirt",
        // category: "men",
        //   image:p30_img,
        // new_price: 29.99,
        // old_price: 39.99
        // },
        // {
        // id: 31,
        // name: "men's High Rise Wide Leg Pants",
        // category: "men",
        //   image:p31_img,
        // new_price: 49.99,
        // old_price: 59.99
        // },
        // {
        // id: 32,
        // name: "Men's Puffer Jacket",
        // category: "men",
        //   image:p32_img,
        // new_price: 79.99,
        // old_price: 89.99
        // },
        // {
        // id: 33,
        // name: "men's Cable Knit Sweater",
        // category: "men",
        //   image:p33_img,
        // new_price: 44.99,
        // old_price: 54.99
        // },
        // {
        // id: 34,
        // name: "Men's Athletic Joggers",
        // category: "men",
        //   image:p34_img,
        // new_price: 39.99,
        // old_price: 49.99
        // },
        // {
        // id: 35,
        // name: "men's Floral Print Romper",
        // category: "men",
        //   image:p35_img,
        // new_price: 34.99,
        // old_price: 44.99
        // },
        // {
        // id: 36,
        // name: "Men's Crew Neck T-Shirt",
        // category: "men",
        //   image:p36_img,
        // new_price: 14.99,
        // old_price: 19.99
        // }
    ];
  
  export default data_product;
  
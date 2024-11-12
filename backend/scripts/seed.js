const { Product } = require('../models');
const sequelize = require('../config/database');

const seedProducts = [
  {
    title: "MacBook Pro 14吋",
    price: 52900,
    description: "Apple M2 晶片配備 8 核心 CPU 與 10 核心 GPU",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229",
    category: "筆電",
    stock: 10
  },
  {
    title: "iPhone 15 Pro",
    price: 34900,
    description: "超強A17 Pro晶片，4800萬像素主相機",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708",
    category: "手機",
    stock: 15
  },
  {
    title: "iPad Air",
    price: 19900,
    description: "M1 晶片帶來前所未有的效能",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=940&hei=1112&fmt=png-alpha&.v=1645065732688",
    category: "平板",
    stock: 8
  }
];

async function seedDatabase() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected.');

    // 警告提示
    console.log('⚠️  Warning: This will clear all existing data in the database.');

    // 同步資料庫結構
    await sequelize.sync({ force: true }); // 注意：這會清空資料庫
    
    // 插入測試數據
    await Product.bulkCreate(seedProducts);
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
}

seedDatabase(); 
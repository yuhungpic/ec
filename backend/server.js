require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// 錯誤處理
process.on('uncaughtException', (error) => {
  console.error('未捕獲的異常:', error);
});

process.on('unhandledRejection', (error) => {
  console.error('未處理的 Promise 拒絕:', error);
});

// 中間件
app.use(cors());
app.use(express.json());

// 測試路由
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working' });
});

// API 路由
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// 錯誤處理中間件
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ 
    message: '伺服器錯誤',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = 3001;

// 資料庫連接與服務器啟動
const startServer = async () => {
  try {
    // 測試資料庫連接
    await sequelize.authenticate();
    console.log('✅ Database connected successfully.');
    
    // 同步資料庫模型
    await sequelize.sync();
    console.log('✅ Database synced successfully.');
    
    // 啟動服務器
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Server startup error:', error);
    process.exit(1);
  }
};

startServer(); 
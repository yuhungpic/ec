const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

// 測試路由
router.get('/test', (req, res) => {
  res.json({ message: 'Auth routes working' });
});

// 註冊路由
router.post('/register', async (req, res) => {
  try {
    console.log('收到註冊請求:', req.body);

    const { username, email, password } = req.body;

    // 驗證必填欄位
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: '所有欄位都是必填的'
      });
    }

    // 檢查用戶是否已存在
    const existingUser = await User.findOne({ 
      where: { email } 
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: '此信箱已被註冊'
      });
    }

    // 加密密碼
    const hashedPassword = await bcrypt.hash(password, 10);

    // 創建新用戶
    const user = await User.create({
      username,
      email,
      password: hashedPassword
    });

    console.log('用戶創建成功:', user.id);

    // 創建 JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // 不返回密碼
    const { password: _, ...userWithoutPassword } = user.toJSON();

    // 返回成功響應
    return res.status(201).json({
      success: true,
      message: '註冊成功',
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    console.error('註冊錯誤:', error);
    return res.status(500).json({
      success: false,
      message: '註冊失敗',
      error: error.message
    });
  }
});

// 登入路由
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 查找用戶
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: '信箱或密碼錯誤'
      });
    }

    // 驗證密碼
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: '信箱或密碼錯誤'
      });
    }

    // 創建 token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // 不返回密碼
    const { password: _, ...userWithoutPassword } = user.toJSON();

    return res.status(200).json({
      success: true,
      message: '登入成功',
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    console.error('登入錯誤:', error);
    return res.status(500).json({
      success: false,
      message: '登入失敗',
      error: error.message
    });
  }
});

module.exports = router; 
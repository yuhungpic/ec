const express = require('express');
const router = express.Router();

// POST /api/orders - 創建訂單
router.post('/', async (req, res) => {
  try {
    const { items, totalAmount } = req.body;
    // TODO: 將訂單保存到資料庫
    res.status(201).json({ 
      message: '訂單已創建',
      orderId: Date.now() // 臨時使用時間戳作為訂單ID
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'GET ORDERS WORK!',
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'POST ORDER WORK!',
  });
});

router.get('/:orderId', (req, res, next) => {
  let orderId = req.params.orderId;
  res.status(200).json({
    message: `GET PARTICULAR ORDER WORK! ${orderId}`,
  });
});

router.delete('/:orderId', (req, res, next) => {
  let orderId = req.params.orderId;
  res.status(200).json({
    message: `DELETE ORDER WORK! ${orderId}`,
  });
});

module.exports = router;

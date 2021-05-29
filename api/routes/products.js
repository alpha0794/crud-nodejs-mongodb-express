const express = require('express');
const router = express.Router();
var dataBase = require('../connections/mongodb');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'GET PRODUCTS WORK!',
  });
});

router.post('/', (req, res, next) => {
  const db = dataBase.get('crud-nodejs-mongodb-express');
  if (req.body) {
    var jsonObj = JSON.parse(JSON.stringify(req.body, null, 3));
  } else {
    var jsonObj = req;
  }
  var reqData = jsonObj.updateData;
  var collectionName = jsonObj.collectionName;
  var collection = db.collection(collectionName);
  if (jsonObj) {
    collection.insertOne(reqData, function (err, response) {
      if (err) {
        res.status(400).json({
          status: '400',
          message: 'Error creating product!',
          error: err,
        });
      } else {
        res.status(200).json({
          status: '200',
          message: 'Success creating product!',
          data: response.ops,
        });
      }
    });
  } else {
    res.status(400).json({
      status: '400',
      message: 'Please add body!',
    });
  }
});

router.get('/:productId', (req, res, next) => {
  let productId = req.params.productId;
  res.status(200).json({
    message: `GET PARTICULAR PRODUCT WORK! ${productId}`,
  });
});

router.patch('/:productId', (req, res, next) => {
  let productId = req.params.productId;
  res.status(200).json({
    message: `UPDATE PRODUCT WORK! ${productId}`,
  });
});

router.delete('/:productId', (req, res, next) => {
  let productId = req.params.productId;
  res.status(200).json({
    message: `DELETE PRODUCT WORK! ${productId}`,
  });
});

module.exports = router;

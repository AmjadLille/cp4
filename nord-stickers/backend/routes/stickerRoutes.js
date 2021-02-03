import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Sticker from '../models/stickerModel.js';

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const stickers = await Sticker.find({});

    res.json(stickers);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const sticker = await Sticker.findById(req.params.id);
    if (sticker) {
      res.json(sticker);
    } else {
      res.status(404);
      throw new Error('Product Not Found');
    }
  })
);

export default router;

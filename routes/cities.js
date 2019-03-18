import express from 'express';
import City from '../models/cities';

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const cities = await City.find();
      res.json(cities[Math.floor(Math.random() * cities.length)]);
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const newCity = await City.create(req.body);

      res.status(201).json(newCity);
    } catch (error) {
      next(error);
    }
  });

router
  .delete('/:id', async (req, res, next) => {
    try {
      const user = await City.findByIdAndRemove(req.params.id);
      if (user === null) {
        res.status(404).send({ error: `Can't find city with id: ${req.params.id}` });
      }
      res.status(200).json();
    } catch (error) {
      next(error);
    }
  });

router.use((error, req, res, next) => {
  res.status(500);
  res.json({
    success: false,
    message: error.message,
  });
  next(error);
});

export default router;

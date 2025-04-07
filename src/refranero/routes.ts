import express, { Request, Response, NextFunction } from 'express';
import { refranero } from './data';

const router = express.Router();

// Get all the refranes
router.get('/refranes', (req: Request, res: Response) => {
  res.json(refranero);
});

// Get random refran
router.get('/refranes/random', (req: Request, res: Response) => {
  // Just in case refranero is empty
  if (refranero.length === 0)
    res.status(404).json({ message: 'No refranes found' });
  // Get random refran
  const randomId = Math.floor(Math.random() * refranero.length);
  res.json(refranero[randomId]);
});

// Get refran by ID
router.get('/refranes/:id', (req: Request, res: Response) => {
  // Find refran where IDs match
  const refran = refranero.find((r) => r.id === parseInt(req.params.id));
  // If refran isn't found, throe 404
  if (!refran) res.status(404).json({ message: 'Refrán not found' });
  // Otherwise, return it
  res.json(refran);
});

export default router;

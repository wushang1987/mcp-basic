import { Router, Express } from 'express';
import IndexController from '../controllers/index.js';

const router = Router();
const indexController = new IndexController();

router.get('/', indexController.home);
router.get('/about', indexController.about);

export default function setRoutes(app: Express) {
  app.use('/', router); // Attach the router to the app
}
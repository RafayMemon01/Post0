import express from 'express';
const router = express.Router();


import authRouter from './routes/auth.mjs';
import commentRouter from './route/comment.mjs'
import feedRouter from './route/feed.mjs'
import postRouter from './route/post.mjs'

router.use(authRouter)
router.use( commentRouter)
router.use( postRouter)
router.use( feedRouter)

export default router;

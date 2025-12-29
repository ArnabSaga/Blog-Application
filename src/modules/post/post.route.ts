import express, { Router } from "express";

import { PostController } from './post.controller';

const router = express.Router();

router.post("/", PostController.createPost);

export const PostRouter: Router = router;

import { Request, Response } from "express";

import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({
      error: "Post Creation Failed",
      details: error,
    });
  }
};

const getPosts = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getPosts();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({
      error: "Failed to fetch posts",
      details: error,
    });
  }
};

export const PostController = {
  createPost,
  getPosts,
};

import { prisma } from "../../lib/prisma";
import { Post } from "../../../generated/prisma/client";

const createPost = async (data: Omit<Post, "id" | "cretedAt" | "updateAt">) => {
  const result = await prisma.post.create({ data });
  return result;
};

const getPosts = async () => {
  const result = await prisma.post.findMany({
    include: {
      comments: true,
    },
  });
  return result;
};

export const PostService = {
  createPost,
  getPosts,
};

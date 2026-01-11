import { prisma } from "../../lib/prisma";
import { Post } from "../../../generated/prisma/client";

const createPost = async (
  data: Omit<Post, "id" | "cretedAt" | "updateAt" | "authorId">,
  userId: string
) => {
  const result = await prisma.post.create({
    data: {
      ...data,
      authorId: userId,
    },
  });
  return result;
};

const getAllPosts = async (payload: { search: string | undefined}) => {
  const allPost = await prisma.post.findMany({
    where: {
      title: {
        contains: payload.search as string,
        mode: "insensitive"
      }
    }
  });
  return allPost;
};

export const PostService = {
  createPost,
  getAllPosts,
};

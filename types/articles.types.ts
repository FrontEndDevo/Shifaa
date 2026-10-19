export type PostFilter = "latest" | "category" | "popular";

export type BlogCategoryId =
  | "travel"
  | "culture"
  | "science"
  | "wellness"
  | "home"
  | "technology"
  | "food"
  | "design"
  | "business"
  | "nature"
  | "fitness"
  | "photography"
  | "environment";

export type BlogAuthor = {
  name: string;
  avatar?: string;
  bio: string;
};

export type BlogArticleData = {
  id: number;
  slug: string;
  category: BlogCategoryId;
  readMinutes: number;
  image: string;
  author: { avatar?: string };
  publishedAt: string;
};

export type BlogArticle = Omit<BlogArticleData, "category" | "author"> & {
  category: string;
  title: string;
  description: string;
  readTime: string;
  author: BlogAuthor;
  tags: string[];
  content: string[];
};

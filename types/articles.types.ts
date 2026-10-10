export type PostFilter = "Latest" | "Category" | "Popular";

type BlogCategory =
  | "Travel"
  | "Culture"
  | "Science"
  | "Wellness"
  | "Home"
  | "Technology"
  | "Food"
  | "Design"
  | "Business"
  | "Nature"
  | "Fitness"
  | "Photography"
  | "Environment";

export type BlogAuthor = {
  name: string;
  avatar?: string;
  bio: string;
};

export type BlogArticle = {
  id: number;
  slug: string;
  category: BlogCategory;
  title: string;
  description: string;
  readTime: string;
  image: string;
  author: BlogAuthor;
  publishedAt: string;
  tags: string[];
  content: string[];
};

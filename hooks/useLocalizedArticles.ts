"use client";

// React Hooks:
import { useMemo } from "react";

// Next Intl:
import { useTranslations } from "next-intl";

// Constants:
import { BLOG_ARTICLES } from "@/constants/Articles";

// Types:
import { BlogArticle } from "@/types/articles.types";

export const useLocalizedArticles = (): BlogArticle[] => {
  const t = useTranslations("Articles");

  const tCategory = useTranslations("BlogCategories");

  const tBlog = useTranslations("Blog");

  return useMemo(
    () =>
      BLOG_ARTICLES.map((article) => {
        const { slug } = article;

        return {
          ...article,
          category: tCategory(article.category),
          title: t(`${slug}.title`),
          description: t(`${slug}.description`),
          readTime: tBlog("readTime", { minutes: article.readMinutes }),
          author: {
            avatar: article.author.avatar,
            name: t(`${slug}.author.name`),
            bio: t(`${slug}.author.bio`),
          },
          tags: t.raw(`${slug}.tags`) as string[],
          content: t.raw(`${slug}.content`) as string[],
        };
      }),
    [t, tCategory, tBlog],
  );
};

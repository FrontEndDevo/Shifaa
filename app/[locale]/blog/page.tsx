"use client";

// React Hooks:
import { useMemo, useState } from "react";

// Next Intl:
import { useLocale, useTranslations } from "next-intl";

// Shadcn UI:
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Custom Hooks:
import { useLocalizedArticles } from "@/hooks/useLocalizedArticles";

// Utilities:
import { blogPostsFilter } from "@/lib/utils";

// Types:
import type { PostFilter } from "@/types/articles.types";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import BlogPost from "@/components/blog/BlogPost";
import Footer from "@/components/layout/footer/Footer";

const BLOG_FILTERS: PostFilter[] = ["latest", "category", "popular"];

const Blog = () => {
  const t = useTranslations("Blog");
  const locale = useLocale();
  const articles = useLocalizedArticles();

  const [sortBy, setSortBy] = useState<PostFilter>("latest");

  const filteredPosts = useMemo(
    () => blogPostsFilter({ posts: articles, filter: sortBy, locale }),
    [articles, sortBy, locale],
  );

  const filterItems = BLOG_FILTERS.map((filter) => ({
    value: filter,
    label: t(`filters.${filter}`),
  }));

  return (
    <>
      <Navbar />

      <section className="container max-w-(--breakpoint-xl) px-6 py-16 xl:px-0">
        <div className="flex items-end justify-between">
          <h2 className="text-[1.5rem] font-semibold tracking-tight rtl:tracking-normal">
            {t(`headings.${sortBy}`)}
          </h2>
          <Select
            value={sortBy}
            items={filterItems}
            onValueChange={(value) => {
              if (value) setSortBy(value as PostFilter);
            }}
          >
            <SelectTrigger className="w-[180px]" aria-label={t("sortBy")}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-line bg-card text-main">
              {filterItems.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;

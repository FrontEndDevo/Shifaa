"use client";

// React Hooks:
import { useState } from "react";

// Shadcn UI:
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Constants:
import { BLOG_ARTICLES } from "@/constants/Articles";

// Uitilites:
import { blogPostsFilter } from "@/lib/utils";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import BlogPost from "@/components/blog/BlogPost";
import Footer from "@/components/layout/footer/Footer";

const blogFilters = ["Latest", "Category", "Popular"];

const Blog = () => {
  const [sortBy, setSortBy] = useState("Latest");

  const filteredPosts = blogPostsFilter({
    posts: BLOG_ARTICLES,
    filter: sortBy,
  });

  return (
    <>
      <Navbar />

      <section className="container max-w-(--breakpoint-xl) px-6 py-16 xl:px-0">
        <div className="flex items-end justify-between">
          <h2 className="font-semibold text-[1.5rem] tracking-tight">
            {sortBy} posts
          </h2>
          <Select
            defaultValue={blogFilters[0]}
            onValueChange={(value) => {
              if (value) setSortBy(value);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {blogFilters.map((filter) => (
                <SelectItem
                  key={filter}
                  className="bg-white text-black"
                  value={filter}
                >
                  {filter}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts &&
            filteredPosts.map((post) => <BlogPost key={post.id} post={post} />)}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;

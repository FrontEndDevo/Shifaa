"use client";

// Next Components:
import Image from "next/image";
import { useParams, notFound } from "next/navigation";

// Next Intl:
import { useTranslations } from "next-intl";

// Custom Hooks:
import { useLocalizedArticles } from "@/hooks/useLocalizedArticles";

// Shadcn UI:
import { Separator } from "@/components/ui/separator";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import Heading from "@/components/blog/article/Heading";
import HeaderAuthor from "@/components/blog/article/HeaderAuthor";
import Content from "@/components/blog/article/Content";
import Tags from "@/components/blog/article/Tags";
import ArticleAside from "@/components/blog/article/ArticleAside";
import FooterAuthor from "@/components/blog/article/FooterAuthor";
import ShareArticle from "@/components/blog/article/ShareArticle";
import BottomNavigation from "@/components/blog/article/BottomNavigation";
import Footer from "@/components/layout/footer/Footer";

const BlogArticlePage = () => {
  const t = useTranslations("Article");

  const { articleId } = useParams();

  const articles = useLocalizedArticles();

  const article = articles.find((art) => art.slug === articleId);

  if (!article) notFound();

  const {
    author,
    category,
    content,
    description,
    image,
    publishedAt,
    readTime,
    tags,
    title,
  } = article;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {/* Article heading */}
          <header className="mx-auto max-w-4xl text-center">
            <Heading
              category={category}
              title={title}
              description={description}
            />

            {/* Author and metadata */}
            <HeaderAuthor
              author={author}
              publishedAt={publishedAt}
              readTime={readTime}
            />
          </header>

          {/* Hero image */}
          <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl bg-card sm:aspect-[16/8] sm:rounded-3xl">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>

          {/* Main content and sidebar */}
          <div className="mx-auto mt-6 flex flex-col-reverse lg:grid max-w-6xl gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
            <div className="min-w-0 lg:col-span-10">
              {/* Mobile-friendly article actions */}
              <div className="mb-8 flex items-center justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.18em] rtl:tracking-normal text-faint">
                  {t("insideThePost")}
                </span>
              </div>

              {/* Article body */}
              <div className="space-y-5">
                <Content content={content} />
              </div>

              <Separator className="my-10" />

              {/* Tags */}
              <Tags tags={tags} />

              <Separator className="my-10" />

              {/* Author bio */}
              <FooterAuthor
                avatar={author.avatar}
                bio={author.bio}
                name={author.name}
              />

              {/* Share footer */}
              <ShareArticle title={title} description={description} />
            </div>

            {/* Desktop sidebar */}
            <ArticleAside
              category={category}
              publishedAt={publishedAt}
              readTime={readTime}
            />
          </div>
        </article>

        {/* Bottom navigation */}
        <BottomNavigation />
      </main>

      <Footer />
    </>
  );
};

export default BlogArticlePage;

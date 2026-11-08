import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import CopyButton from "@/components/CopyButton";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Post Not Found // Ayoub Elmohamedi",
    };
  }
  return {
    title: `${post.title} // Ayoub Elmohamedi`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="max-w-container mx-auto px-5 sm:px-8 py-10 sm:py-16 space-y-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs font-mono text-fg-dim flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">
          root
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-accent transition-colors">
          blog
        </Link>
        <span>/</span>
        <span className="text-fg">{post.slug}</span>
      </nav>

      {/* Header */}
      <header className="space-y-4 border-b border-border pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span>sys::post // {post.date}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
          {post.title}
        </h1>
        <p className="text-lg text-fg-muted max-w-prose">{post.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-accent/80 bg-bg-surface px-2.5 py-1 rounded border border-border"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content Rendering */}
      <div className="max-w-prose space-y-6 text-sm leading-relaxed text-fg-muted">
        <div className="prose prose-invert max-w-none space-y-4 font-mono">
          <pre className="p-4 bg-bg-surface border border-border rounded text-xs whitespace-pre-wrap overflow-x-auto text-fg">
            {post.content}
          </pre>
        </div>

        <div className="pt-6 border-t border-border flex items-center justify-between">
          <Link
            href="/blog"
            className="text-xs font-mono text-accent hover:underline flex items-center gap-1"
          >
            <span>&larr; Back to articles</span>
          </Link>
          <CopyButton text={post.content} />
        </div>
      </div>
    </article>
  );
}

import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function parseFrontmatter(fileContent: string): { data: Record<string, any>; content: string } {
  const match = /^\s*---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(fileContent);
  if (!match) {
    return { data: {}, content: fileContent };
  }

  const rawMeta = match[1];
  const content = match[2];
  const data: Record<string, any> = {};

  rawMeta.split(/\r?\n/).forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let val = line.slice(colonIndex + 1).trim();

      if (val.startsWith("[") && val.endsWith("]")) {
        data[key] = val
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim().replace(/^['"]|['"]$/g, ""));
      } else if (val === "true") {
        data[key] = true;
      } else if (val === "false") {
        data[key] = false;
      } else {
        data[key] = val.replace(/^['"]|['"]$/g, "");
      }
    }
  });

  return { data, content };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts: BlogPost[] = [];

  for (const filename of files) {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = parseFrontmatter(fileContent);

    // Only include if published flag is explicitly true
    if (data.published === true) {
      posts.push({
        slug,
        title: data.title || slug,
        date: data.date || "Unknown date",
        description: data.description || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        published: true,
        content,
      });
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

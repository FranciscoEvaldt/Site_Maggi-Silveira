import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

export const revalidate = 60; // ISR

type Params = {
  params: {
    slug: string;
  };
};

type Post = {
  title: string;
  body: PortableTextBlock[];
};

async function getPost(slug: string): Promise<Post | null> {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body
    }`,
    { slug }
  );
}

// 🔥 define quais páginas existem no build
export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`
  );

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

const components = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-muted-foreground leading-relaxed mb-4">
        {children}
      </p>
    ),
  },
};

export default async function PostPage({ params }: Params) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Artigo não encontrado</div>;
  }

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

      <div className="prose max-w-none">
        <PortableText value={post.body} components={components} />
      </div>
    </section>
  );
}
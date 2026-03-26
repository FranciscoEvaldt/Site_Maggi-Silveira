import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

type Params = {
  params: {
    slug: string;
  };
};

type Post = {
  title: string;
  body: PortableTextBlock[];
};

async function getPost(slug: string): Promise<Post> {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body
    }`,
    { slug }
  );
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

  if (!post) return <div>Artigo não encontrado</div>;

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

      <div className="prose max-w-none">
        <PortableText value={post.body} components={components} />
      </div>
    </section>
  );
}
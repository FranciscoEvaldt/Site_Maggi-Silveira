import { client } from "@/lib/sanity";

type Post = {
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
};

async function getPosts(): Promise<Post[]> {
  return await client.fetch(`*[_type == "post"]{
    title,
    slug,
    excerpt
  }`);
}

export default async function ArtigosPage() {
  const posts = await getPosts();

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Artigos Jurídicos
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug.current}
            className="p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {post.title}
            </h2>

            <p className="text-muted-foreground mb-4">
              {post.excerpt}
            </p>

            <a
              href={`/artigos/${post.slug.current}`}
              className="text-accent font-medium hover:underline"
            >
              Ler mais →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
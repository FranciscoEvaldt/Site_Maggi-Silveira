import Link from "next/link";
import { client } from "@/lib/sanity";

// ✅ Tipo
type Post = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
};

// ✅ Buscar posts
async function getPosts(): Promise<Post[]> {
  return await client.fetch(
    `*[_type == "post"] | order(_createdAt desc){
      _id,
      title,
      slug
    }`
  );
}

// ✅ Componente
export async function Articles() {
  const posts = await getPosts();

  if (!posts.length) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Artigos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/artigos/${post.slug.current}`}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {post.title}
              </h3>

              <p className="text-sm text-gray-500">
                Clique para ler o artigo completo
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
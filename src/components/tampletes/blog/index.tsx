import getPostMetadata from "../../../helpers/getPostMetadata";

const Blog = () => {
  const postMetadata = getPostMetadata();

  return (
    <div className="container">
      <div className="divide-neutral-500 divide-y mt-5">
        <p className="text-white font-bold mb-2 sm:mb-4 sm:text-7xl text-3xl">Lastest articles</p>
        {postMetadata.map((post, i) => (
          <a
            key={i}
            href={post.slug}
            className="flex justify-between cursor-pointer flex-col group hover:text-white items-start py-2 sm:flex-row sm:items-center sm:py-4 sm:text-2xl text-md text-neutral-500 transition-colors">
            {post.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;

const BlogCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-[4/3] bg-blog-brown/10" />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-6 w-20 rounded-full bg-blog-brown/10" />
          <div className="h-4 w-16 rounded bg-blog-brown/10" />
        </div>

        <div className="h-6 w-full rounded bg-blog-brown/10 mb-2" />
        <div className="h-6 w-3/4 rounded bg-blog-brown/10 mb-4" />

        <div className="h-4 w-full rounded bg-blog-brown/10 mb-2" />
        <div className="h-4 w-5/6 rounded bg-blog-brown/10 mb-4" />

        <div className="flex items-center justify-between">
          <div className="h-4 w-20 rounded bg-blog-brown/10" />
          <div className="h-4 w-24 rounded bg-blog-brown/10" />
        </div>
      </div>
    </div>
  );
};

const BlogGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {Array.from({ length: count }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>

      {/* Pagination skeleton */}
      <div className="flex items-center justify-center gap-4 mt-12 animate-pulse">
        <div className="h-10 w-28 rounded-md bg-blog-brown/10" />
        <div className="flex items-center gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-10 w-10 rounded-full bg-blog-brown/10" />
          ))}
        </div>
        <div className="h-10 w-20 rounded-md bg-blog-brown/10" />
      </div>
    </section>
  );
};

export default BlogGridSkeleton;
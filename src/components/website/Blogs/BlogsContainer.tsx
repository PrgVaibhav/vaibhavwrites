import { BlogsCard } from "./BlogsCard";

export const BlogsContainer = () => {
  return (
    <section className="w-full md:w-10/12 m-auto mt-4 p-4">
      <div className="heading">
        <h1 className="text-2xl md:text-3xl">Recent Blogs.</h1>
      </div>

      <div className="flex items-stretch gap-5 mt-5 flex-wrap">
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
      </div>
    </section>
  );
};

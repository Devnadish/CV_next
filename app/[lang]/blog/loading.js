import BlogSkelton from "@/components/shared/skelton/BlogSkelton"


export default function Loading() {
    // Or a custom loading skeleton component
    return (
      <>
        <div className="flex p-4 justify-evenly items-center flex-wrap    gap-4">
          <BlogSkelton />
          <BlogSkelton />
          <BlogSkelton />
          <BlogSkelton />
          <BlogSkelton />
          <BlogSkelton />
        </div>
      </>
    );
  }
import HomeSkelton from "@/components/shared/skelton/HomeSkelton"


export default function Loading() {
    // Or a custom loading skeleton component
    return (
      <>
        <div className="flex p-4 justify-evenly items-center flex-wrap    gap-4">
          <HomeSkelton />
          <HomeSkelton />
          <HomeSkelton />
          <HomeSkelton />
          <HomeSkelton />
          <HomeSkelton />
        </div>
      </>
    );
  }
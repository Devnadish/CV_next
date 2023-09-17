import WorkeSkelton from "@/components/shared/skelton/WorkeSkelton";


export default function Loading() {
    // Or a custom loading skeleton component
    return (
      <>
        <div className="flex flex-wrap items-center gap-4 p-4 justify-evenly">
          <WorkeSkelton />
          <WorkeSkelton />
          <WorkeSkelton />
          <WorkeSkelton />
          <WorkeSkelton />
          <WorkeSkelton />
          <WorkeSkelton />
          <WorkeSkelton />
          <WorkeSkelton />
          <WorkeSkelton />
          <WorkeSkelton />
        </div>
      </>
    );
  }
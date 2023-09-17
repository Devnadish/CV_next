import PriceSkelton from "@/components/shared/skelton/PriceSkelton"



export default function Loading() {
    // Or a custom loading skeleton component
    return (
      <>
        <div className="flex flex-wrap items-center gap-4 p-4 justify-evenly">
          <PriceSkelton />
          <PriceSkelton />
          <PriceSkelton />

        </div>
      </>
    );
  }
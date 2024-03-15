import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-col gap-5">
        <Skeleton className="h-4 w-[150px]" />
        <div className="flex flex-col gap-3 ">
          <Skeleton className="h-2 w-[350px]" />
          <Skeleton className="h-2 w-[300px]" />
        </div>

        <div>
          <Skeleton className="h-44 mt-5 w-full" />
          <div className=" flex justify-end mt-10">
            <Skeleton className="h-8 mt-5 w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;

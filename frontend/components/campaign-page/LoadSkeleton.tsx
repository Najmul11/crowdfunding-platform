import { Skeleton } from "@/components/ui/skeleton";

const LoadSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-col gap-5 w-full ">
        <div className="flex flex-col gap-2 justify-center h-72 items-center">
          <Skeleton className="h-3 w-[150px]" />
          <Skeleton className="h-3 w-[300px]" />
        </div>

        <div className="flex  gap-5">
          <div className="h-44 w-1/2">
            <div className="flex flex-col gap-10 ">
              <div className="flex items-center gap-4 ">
                <Skeleton className="w-[80%] h-6" />
                <Skeleton className="w-24 h-6" />
              </div>

              <div className="flex items-center gap-5 ">
                <Skeleton className="w-24 h-10" />
                <Skeleton className="w-10 h-10" />
                <Skeleton className="w-10 h-10" />
                <Skeleton className="w-24 h-10" />
              </div>

              <Skeleton className="w-full h-10 mt-10" />
            </div>
          </div>

          <div className="h-44 w-1/2">
            <div className="flex flex-col gap-5 ">
              <Skeleton className="w-full h-10" />

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4 w-full ">
                  <Skeleton className="w-[70%] h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadSkeleton;

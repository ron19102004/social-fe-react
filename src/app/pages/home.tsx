import { CircularProgress, Skeleton } from "@chakra-ui/react";
import { Suspense, lazy } from "react";

const AddPostComponent = lazy(() => import("../components/home/add-post.c"));
const PostComponent = lazy(() => import("../components/home/post.c"));

const HomePage: React.FC = () => {
  return (
    <section className="md:mx-5 space-y-2 max-h-screen overflow-auto">
      <Suspense fallback={<Skeleton height="40px" />}>
        <AddPostComponent />
      </Suspense>
      <ul className="space-y-2">
        <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center">
              <CircularProgress isIndeterminate color="green.300" />
            </div>
          }
        >
          <PostComponent />
        </Suspense>
        <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center">
              <CircularProgress isIndeterminate color="green.300" />
            </div>
          }
        >
          <PostComponent />
        </Suspense>
      </ul>
    </section>
  );
};
export default HomePage;

import { Skeleton, Stack } from "@chakra-ui/react";
import { Suspense, lazy } from "react";

interface IProps {
  children: React.ReactNode;
}
const SideBarLeft = lazy(() => import("../components/home/sidebar-left.c"));
const SideBarRight = lazy(() => import("../components/home/sidebar-right.c"));

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex max-h-screen overflow-auto md:px-5">
      <section className="bg-color5 h-screen basis-1/4 rounded hidden lg:block">
        <Suspense
          fallback={
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          }
        >
          <SideBarLeft />
        </Suspense>
      </section>
      <section className="flex-1"> {children}</section>
      <section className="bg-color5 h-screen hidden md:block md:basis-2/6 lg:basis-1/4 rounded">
        <Suspense
          fallback={
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          }
        >
          <SideBarRight />
        </Suspense>
      </section>
    </div>
  );
};
export default MainLayout;

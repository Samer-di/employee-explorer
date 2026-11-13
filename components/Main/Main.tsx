import Profile from "./Profile";
import RecentPost from "./RecentPost";
import AllPost from "./AllPost";
import { Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <main className="w-full h-auto relative top-25  bg-[#dde8ff] flex flex-col md:flex-row md:flex-wrap">
      <Suspense
        fallback={
          <div className="w-full h-125 md:w-[33.3%] flex items-center justify-center">
            <div className="w-full max-w-[320px] min-h-107.5 rounded-[20px] bg-[#F9FBFF] p-3.5 shadow-[0_10px_30px_rgba(65,105,180,0.16)]">
              <div className="flex h-12.25 items-center gap-4 rounded-[15px] bg-linear-to-r from-[#F0F5FF] to-[#E5EDFF] px-3">
                <div className="flex h-10.25 w-10.25 shrink-0 items-center justify-center rounded-xl bg-[#C9DCFF] text-[#0755EF]">
                  <FontAwesomeIcon icon={faUser} className="text-2xl" />
                </div>
                <h2 className="text-[17px] font-extrabold text-[#101B50]">
                  Employee Profile
                </h2>
              </div>
              <div className="w-full h-25 flex items-center justify-center">
                <p className="font-bold">
                  <FontAwesomeIcon icon={faHourglass} />
                  &nbsp;&nbsp;Loading Employee Profile ...
                </p>
              </div>
            </div>
          </div>
        }
      >
        <Profile />
      </Suspense>
      <Suspense
        fallback={
          <div className="w-full h-125 md:w-[33.3%] flex items-center justify-center">
            <div className="min-h-107.5 w-full max-w-[320px] rounded-[20px] bg-[#F9FBFF] p-3.5 shadow-[0_10px_30px_rgba(65,105,180,0.16)]">
              <div className="flex min-h-13 items-center gap-3 rounded-[15px] bg-linear-to-r from-[#F0F5FF] to-[#E5EDFF] px-2 py-2">
                <div className="flex h-10.25 w-10.25 shrink-0 items-center justify-center rounded-xl bg-[#C9DCFF] text-[#0755EF]">
                  <FontAwesomeIcon icon={faClock} className="text-2xl" />
                </div>

                <div className="min-w-0">
                  <h2 className="text-[16px] font-extrabold leading-tight text-[#101B50]">
                    Recent Posts Preview
                  </h2>

                  <p className="mt-1 text-[10px] leading-tight text-[#344875]">
                    A quick look at this employee&apos;s latest posts.
                  </p>
                </div>
              </div>
              <div className="mt-3.5 space-y-2.5 flex items-center justify-center">
                <p className="font-bold">
                  <FontAwesomeIcon icon={faHourglass} />
                  &nbsp;&nbsp; Loading Recent Posts...
                </p>
              </div>
            </div>
          </div>
        }
      >
        <RecentPost />
      </Suspense>
      <AllPost />
    </main>
  );
};

export default Main;

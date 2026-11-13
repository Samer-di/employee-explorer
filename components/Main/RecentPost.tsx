import ApiError from "@/lib/ApiError";
import { unstable_rethrow } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

type Post = {
  id: number;
  title: string;
  body: string;
};

const RecentPost = async () => {
  let posts: Post[];
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1",
    );

    if (!response.ok) {
      throw new ApiError("Failed to fetch Recent Posts!", response.status);
    }

    posts = await response.json();
  } catch (error) {
    unstable_rethrow(error);

    let errorMessage: string;

    if (error instanceof ApiError) {
      errorMessage = `Recent posts service error (HTTP ${error.status}). Please try again later.`;
    } else {
      errorMessage =
        "Unable to load recent posts. Please check your connection and try again.";
    }
    return (
      <div className="flex w-full items-center justify-center md:w-[33.3%]">
        <div className="min-h-107.5 w-full max-w-[320px] rounded-[20px] bg-[#F9FBFF] p-6 shadow-[0_10px_30px_rgba(65,105,180,0.16)]">
          <h2 className="text-lg font-bold text-[#101B50]">
            Recent Posts Preview
          </h2>

          <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
        </div>
      </div>
    );
  }

  return (
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

        <div className="mt-3.5 space-y-2.5">
          {posts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="flex min-h-15.25 items-center gap-2.5 rounded-[15px] border border-[#DDE8FF] bg-[#F7FAFF] px-2.5 py-2.25"
            >
              <div className="flex h-9.75 w-9.75 shrink-0 items-center justify-center rounded-full bg-[#DCE9FF] text-[#075DEB]">
                <FontAwesomeIcon icon={faFileLines} className="text-xl" />
              </div>

              <p className="min-w-0 flex-1 text-[13px] leading-4.5 text-[#101B50]">
                {post.title}
              </p>

              <div className="shrink-0 rounded-lg bg-[#DCE8FF] px-2 py-1 text-[12px] font-extrabold text-[#075DEB]">
                #{post.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;

"use client";
import ApiError from "@/lib/ApiError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLayerGroup,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

const AllPost = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "empty" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const handleLoadPosts = async () => {
    if (status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=1",
      );

      if (!response.ok) {
        throw new ApiError("Failed to fetch posts", response.status);
      }

      const data: Post[] = await response.json();

      setPosts(data);

      if (data.length === 0) {
        setStatus("empty");
      } else {
        setStatus("success");
      }
    } catch (error) {
      if (error instanceof ApiError) {
        setErrorMessage(
          `Posts service error (HTTP ${error.status}). Please try again.`,
        );
      } else {
        setErrorMessage(
          "Unable to load posts. Please check your connection and try again.",
        );
      }

      setStatus("error");
    }
  };

  return (
    <>
      <div className="flex h-auto w-full items-center justify-center md:w-[33.3%]">
        <div className="flex min-h-107.5 w-full max-w-[320px] flex-col rounded-[20px] bg-[#F9FBFF] p-4.5 shadow-[0_10px_30px_rgba(65,105,180,0.16)]">
          <div className="flex h-12.25 items-center gap-3 rounded-[15px] bg-linear-to-r from-[#F0F5FF] to-[#E5EDFF] px-2">
            <div className="flex h-10.25 w-10.25 shrink-0 items-center justify-center rounded-xl bg-[#C9DCFF] text-[#0755EF]">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
            </div>
            <h2 className="text-[17px] font-extrabold text-[#101B50]">
              Explore All Posts
            </h2>
          </div>

          <p className="mt-4.5 px-1.25 text-[12px] font-medium leading-4.75 text-[#344875]">
            Load and browse all posts from the server on demand in the browser.
          </p>

          <button
            type="button"
            onClick={handleLoadPosts}
            disabled={status === "loading"}
            className="mt-2 flex h-10.75 w-full cursor-pointer items-center justify-center gap-3 rounded-[10px] bg-linear-to-r from-[#386BFF] to-[#1441DD] text-[14px] font-bold text-white shadow-[0_5px_15px_rgba(37,99,235,0.15)] transition-all duration-300 hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <FontAwesomeIcon icon={faUpRightFromSquare} className="text-xl" />
            {status === "loading" ? "Loading..." : "Explore All Posts"}
          </button>

          {status === "idle" && (
            <p className="mt-1  text-sm text-[#344875] text-center">
              Click the button to load all posts.
            </p>
          )}

          {status === "loading" && (
            <p className="mt-3 text-sm text-blue-600" role="status">
              Loading posts...
            </p>
          )}

          {status === "empty" && (
            <p className="mt-3 text-sm text-[#344875]">No posts found</p>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-red-600" role="alert">
              {errorMessage}
            </p>
          )}

          <div className="relative mx-auto mt-4.75 h-30 w-37.5">
            <div className="absolute left-13.5 top-1.25 h-24.75 w-19 rotate-[8deg] rounded-[7px] bg-linear-to-br from-[#B7CEFF] to-[#7EA7FF] shadow-md"></div>
            <div className="absolute left-10 top-4.25 h-24.75 w-19 rotate-6 rounded-[7px] bg-linear-to-br from-[#D3E2FF] to-[#A8C4FF] shadow-md"></div>
            <div className="absolute left-6 top-7.25 h-25.5 w-19.75 rotate-[5deg] rounded-lg border border-[#BDD3FF] bg-linear-to-br from-white to-[#E8F0FF] p-3.25 shadow-[0_8px_18px_rgba(37,99,235,0.22)]">
              <div className="mt-1.5 h-1.5 w-8 rounded-full bg-[#4782FF]"></div>
              <div className="mt-2.25 h-1.5 w-13 rounded-full bg-[#A7C4FF]"></div>
              <div className="mt-1.75 h-1.5 w-13 rounded-full bg-[#A7C4FF]"></div>
              <div className="mt-1.75 h-1.5 w-10 rounded-full bg-[#A7C4FF]"></div>
            </div>
            <div className="absolute right-1.75 top-0 h-3.5 w-1 rotate-12 rounded-full bg-[#5685FF]"></div>
            <div className="absolute -right-px top-3 h-3.25 w-1 rotate-46 rounded-full bg-[#5685FF]"></div>
            <div className="absolute -right-1.75 top-7 h-3 w-1 rotate-75 rounded-full bg-[#5685FF]"></div>
          </div>

          {/* Total Posts */}
          <div className="mt-auto flex min-h-13.25 items-center gap-3 rounded-[13px] bg-linear-to-r from-[#E8F0FF] to-[#DCE8FF] px-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D0E1FF] text-[#0755EF]">
              <FontAwesomeIcon icon={faLayerGroup} className="text-xl" />
            </div>

            <p className="flex-1 text-[13px] font-medium text-[#344875]">
              Total Posts
            </p>

            <span className="text-[25px] font-extrabold text-[#1441DD]">
              {status === "success"
                ? posts.length
                : status === "empty"
                  ? 0
                  : "—"}
            </span>
          </div>
        </div>
      </div>

      {status === "success" && (
        <div className="w-full px-4 py-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-extrabold text-[#101B50]">
                All Employee Posts
              </h2>

              <span className="rounded-xl bg-[#DCE8FF] px-4 py-2 text-sm font-bold text-[#075DEB]">
                {posts.length} Posts
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl border border-[#DDE8FF] bg-[#F9FBFF] p-5 shadow-[0_5px_20px_rgba(65,105,180,0.10)]"
                >
                  <span className="mb-3 inline-block rounded-lg bg-[#DCE8FF] px-3 py-1 text-xs font-bold text-[#075DEB]">
                    Post #{post.id}
                  </span>

                  <h3 className="text-lg font-bold text-[#101B50]">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#344875]">
                    {post.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllPost;

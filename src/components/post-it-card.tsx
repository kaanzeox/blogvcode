"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/posts";
import { POST_IT_STYLES } from "@/lib/posts";

interface PostItCardProps {
  post: BlogPost;
}

/**
 * A realistic sticky-note card placed on top of a calendar cell.
 *
 * Hover: the note peels up from the bottom-right like it's being
 * picked off the surface — scale + perspective tilt + deeper shadow.
 */
export function PostItCard({ post }: PostItCardProps) {
  const style = POST_IT_STYLES[post.color];

  return (
    <Link
      href={`/post/${post.slug}`}
      className="group absolute inset-0 z-10 flex items-start justify-center pt-3 sm:pt-4 px-2 sm:px-3"
      style={{ perspective: "600px" }}
    >
      <div
        className={`
          relative
          w-[120px] h-[105px]
          sm:w-[140px] sm:h-[115px]
          md:w-[150px] md:h-[125px]
          rotate-[-2deg]
          cursor-pointer
          transition-transform duration-300 ease-out
          group-hover:rotate-0
          group-hover:-translate-y-2
          group-hover:scale-105
        `}
        style={{
          transformOrigin: "top left",
        }}
      >
        {/* The note itself */}
        <div
          className={`
            absolute inset-0
            ${style.bg} ${style.text}
            shadow-[0_1px_3px_rgba(0,0,0,0.10),0_3px_8px_rgba(0,0,0,0.06)]
            group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.12)]
            transition-all duration-300 ease-out
          `}
        >
          {/* Adhesive strip along the top */}
          <div className="h-[5px] w-full bg-black/[0.03]" />

          {/* Content area */}
          <div className="px-2.5 pt-1.5 pb-2 sm:px-3 sm:pt-2 sm:pb-2.5">
            <h3 className="font-semibold text-[11px] sm:text-xs md:text-sm leading-tight line-clamp-2">
              {post.title}
            </h3>
            <p className="text-[10px] sm:text-[11px] mt-0.5 leading-snug opacity-55 line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          {/* Subtle bottom highlight on hover — mimics light catching the lifted edge */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Dog-ear fold at bottom-right */}
        <div
          className="absolute bottom-0 right-0 w-4 h-4 overflow-hidden pointer-events-none transition-all duration-300 group-hover:w-5 group-hover:h-5"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(225deg, transparent 50%, rgba(0,0,0,0.08) 50%)",
            }}
          />
        </div>
      </div>
    </Link>
  );
}

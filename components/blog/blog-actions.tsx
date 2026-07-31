"use client";

import { useState, useEffect } from "react";

type BlogActionsProps = {
  slug: string;
  title: string;
};

export function BlogActions({ slug, title }: BlogActionsProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    // Load like state from localStorage
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
    setLiked(!!likedPosts[slug]);
    
    // Load like count from localStorage
    const likeCounts = JSON.parse(localStorage.getItem("likeCounts") || "{}");
    setLikeCount(likeCounts[slug] || 0);
  }, [slug]);

  const handleLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
    const likeCounts = JSON.parse(localStorage.getItem("likeCounts") || "{}");
    
    if (liked) {
      delete likedPosts[slug];
      likeCounts[slug] = Math.max(0, (likeCounts[slug] || 0) - 1);
      setLiked(false);
      setLikeCount(likeCounts[slug]);
    } else {
      likedPosts[slug] = true;
      likeCounts[slug] = (likeCounts[slug] || 0) + 1;
      setLiked(true);
      setLikeCount(likeCounts[slug]);
    }
    
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    localStorage.setItem("likeCounts", JSON.stringify(likeCounts));
  };

  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = encodeURIComponent(title);
    
    let shareUrl = "";
    
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${text}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=400");
    }
  };

  return (
    <div className="flex items-center gap-4 border-y border-gray-200 py-6 dark:border-gray-800">
      {/* Like Button */}
      <button
        type="button"
        onClick={handleLike}
        className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
          liked
            ? "border-red-500 bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400"
            : "border-gray-200 text-gray-600 hover:border-red-300 hover:bg-red-50 hover:text-red-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-red-800 dark:hover:bg-red-950/20 dark:hover:text-red-400"
        }`}
        aria-label={liked ? "Unlike this post" : "Like this post"}
      >
        <svg
          className="h-5 w-5"
          fill={liked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span>{liked ? "Liked" : "Like"}</span>
        {likeCount > 0 && <span className="text-xs">({likeCount})</span>}
      </button>

      {/* Share Buttons */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Share:</span>
        
        <button
          type="button"
          onClick={() => handleShare("twitter")}
          className="rounded-lg border border-gray-200 p-2 text-gray-600 transition-colors hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white dark:border-gray-700 dark:text-gray-400"
          aria-label="Share on Twitter"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => handleShare("linkedin")}
          className="rounded-lg border border-gray-200 p-2 text-gray-600 transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white dark:border-gray-700 dark:text-gray-400"
          aria-label="Share on LinkedIn"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => handleShare("facebook")}
          className="rounded-lg border border-gray-200 p-2 text-gray-600 transition-colors hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white dark:border-gray-700 dark:text-gray-400"
          aria-label="Share on Facebook"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => handleShare("copy")}
          className="relative rounded-lg border border-gray-200 p-2 text-gray-600 transition-colors hover:border-accent hover:bg-accent hover:text-white dark:border-gray-700 dark:text-gray-400"
          aria-label="Copy link"
        >
          {showCopied ? (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

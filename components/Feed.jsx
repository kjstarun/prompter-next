// "use client";

import { PromptCard } from "@components/PromptCard";
// import { useEffect, useState } from "react";

const Feed = () => {
  // const [searchText, setSearchText] = useState("");
  // const [posts, setPosts] = useState([]);
  // const [filteredPosts, setFilteredPosts] = useState([]);

  // useEffect(() => {
  let posts = [];
  const fetchPosts = async () => {
    const res = await import("../app/api/prompt/route.js");
    const result = await (await res.GET()).json();
    // const response = await fetch("/api/prompt");
    // const data = await response.json();
    console.log("data", result.message);
    // setPosts(data.message);
    posts = result.message;
    return <PromptCardList data={posts} />;
  };
  // }, []);

  console.log("hello", posts);
  // useEffect(() => {
  //   const filtered = posts.filter(
  //     (post) =>
  //       post.creator.username.includes(searchText) ||
  //       post.tag.includes(searchText) ||
  //       post.prompt.includes(searchText)
  //   );
  //   setFilteredPosts([...filtered]);
  // }, [searchText]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          // value={searchText}
          // onChange={(e) => setSearchText(e.target.value)}
          required
          className="search_input input"
        />
      </form>
      {fetchPosts()}
      {/* {searchText ? (
        <PromptCardList data={filteredPosts} />
        ) : (
        <PromptCardList data={posts} />
      )} */}
    </section>
  );
};

export default Feed;

"use client";

import { PromptCard } from "@components/PromptCard";
import {useEffect, useState} from "react";
import { useRouter } from "next/router";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const PromptCardList = () => {
    return (
      <div className="mt-16 prompt_layout">
        {filteredPosts.length === 0
          ? posts &&
            posts.map((item, index) => <PromptCard post={item} key={index} />)
          : filteredPosts.map((item, index) => (
              <PromptCard post={item} key={index} />
            ))}
      </div>
    );
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.creator.username.includes(searchText) ||
        post.tag.includes(searchText) ||
        post.prompt.includes(searchText)
    );
    setFilteredPosts([...filtered]);
  }, [searchText]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
          className="search_input input"
        />
      </form>

      {searchText ? (
        <PromptCardList data={filteredPosts} />
      ) : (
        <PromptCardList data={posts} />
      )}
    </section>
  );
};

export default Feed;

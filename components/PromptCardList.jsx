"use client";

const PromptCardList = () => {
  console.log("hello from propmtcardlist", posts);
  return (
    <div className="mt-16 prompt_layout">
      {posts &&
        posts.map((item, index) => <PromptCard post={item} key={index} />)}
      {/* {filteredPosts.length === 0
          ? posts && posts.map((item, index) => <PromptCard post={item} key={index} />)
          : filteredPosts.map((item, index) => (
            <PromptCard post={item} key={index} />
          ))} */}
    </div>
  );
};

export default PromptCardList;

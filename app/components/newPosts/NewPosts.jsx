import React from "react";
import PentagonIcon from "@mui/icons-material/Pentagon";
import NewPostComponent from "./NewPostComponent";

const NewPosts = () => {
  const newPostsData = [
    {
      id: 1,
      image: "/blog-v3-img1.jpg",
      author: "user 1",
      title: "Technology",
      text: "Creating a Purpose-Driven Tech Culture at Chase",
      commentsCount: 10,
    },
    {
      id: 2,
      image: "/blog-v3-img2.jpg",
      author: "user 2",
      title: "Consulting",
      text: "At vero eos et accusamus et iusto odio dignissimos",
      commentsCount: 10,
    },
    {
      id: 3,
      image: "/blog-v3-img3.jpg",
      author: "user 3",
      title: "Design",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      commentsCount: 10,
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/blog-v3-pattern.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="pb-36 p-10 "
      >
        <div className="flex flex-col items-center">
          <div className="p-4 uppercase flex justify-center items-center ">
            <div className="px-4">
              <PentagonIcon className="text-[#ffb237]" />
            </div>
            <div className=" font-bold text-lg">Our News Post</div>
          </div>
          <div className=" font-extrabold text-6xl text-center p-4 ">
            Latest News & Articles
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-evenly md:items-center gap-8 justify-center items-center pt-10">
            {newPostsData.map((newPost) => (
              <div key={newPost.id} >
                <NewPostComponent props={newPost} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPosts;

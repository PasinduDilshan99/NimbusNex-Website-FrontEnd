import React from "react";
import FooterPopularPostComponent from "./FooterPopularPostComponent";

const FooterPopularPost = () => {
  const popularPosts = [
    {
      id: 1,
      image: "/footer-v1-img1.jpg",
      date: "10 Jun 2010",
      text: "Benefits of Cloud-powered disaster recovery network",
    },
    {
      id: 2,
      image: "/footer-v1-img2.jpg",
      date: "10 Jun 2010",
      text: "UX/UI design benefits for businesses in 2023",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold pb-6">Popular post</div>
      <div>
        {popularPosts.map((popularPost) => (
          <div key={popularPost.id} className="flex flex-col p-3">
            <FooterPopularPostComponent props={popularPost} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterPopularPost;

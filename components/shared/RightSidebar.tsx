import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuestions = [
  { _id: 1, title: "How do I use express as custom server in nextJS" },
  { _id: 2, title: "Is it only me or the font is bolder than necessary" },
  { _id: 3, title: "Redux Toolkit Not Updating State as Expected" },
  { _id: 4, title: "Can I get the course for free?" },
  { _id: 5, title: "How do I use express as custom server in nextJS" },
];

const popularTags = [
  { _id: 1, name: "javaScript", totalQuestions: 4 },
  { _id: 2, name: "WhoJs", totalQuestions: 1 },
  { _id: 3, name: "Next", totalQuestions: 9 },
  { _id: 4, name: "React", totalQuestions: 10 },
  { _id: 5, name: "Express", totalQuestions: 2 },
];
const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((ques) => (
            <Link
              href={`/questions/${ques._id}`}
              key={ques._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{ques.title}</p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestion={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;

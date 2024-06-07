import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "Redux Toolkit Not Updating State as Expected",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "css" },
      { _id: "3", name: "web" },
    ],
    author: {
      _id: "1",
      name: "Mehdi",
      picture: "https://example.com/mehdi.jpg",
    },
    upVotes: 10,
    views: 100,
    answers: Array(10).fill({}),
    createdAt: new Date("2024-05-01T10:00:00Z"),
  },
  {
    _id: "2",
    title: "Async/Await Function Not Handling Errors Properly",
    tags: [
      { _id: "1", name: "Async/Await" },
      { _id: "2", name: "JavaScript" },
    ],
    author: {
      _id: "2",
      name: "adrian",
      picture: "https://example.com/mehdi.jpg",
    },
    upVotes: 30000000,
    views: 150000,
    answers: Array(10).fill({}),
    createdAt: new Date("2024-06-03T10:00:00Z"),
  },
  {
    _id: "3",
    title: "Next.js Redirect from / to another page",
    tags: [
      { _id: "1", name: "Next/route" },
      { _id: "2", name: "NextJs" },
    ],
    author: {
      _id: "3",
      name: "Ali",
      picture: "https://example.com/mehdi.jpg",
    },
    upVotes: 2000000,
    views: 15000,
    answers: [{}, {}],
    createdAt: new Date("2024-01-01T10:00:00Z"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link className="flex justify-end max-sm:w-full" href={"/ask-question"}>
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeHolder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((ques) => (
            <QuestionCard
              key={ques._id}
              _id={ques._id}
              title={ques.title}
              tags={ques.tags}
              author={ques.author}
              upVotes={ques.upVotes}
              views={ques.views}
              answers={ques.answers}
              createdAt={ques.createdAt}
            />
          ))
        ) : (
          <NoResult
            Title="There is no questions to show"
            desc="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            link="ask-question"
            linkTitle="Ask Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;

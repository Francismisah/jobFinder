import Image from "next/image";
import FadeInOnScroll from "./FadeInOnScroll";

const Blog = () => {
  return (
    <div className="bg-white  lg:relative pt-20 pb-48 px-10 ">
      <FadeInOnScroll>
        <div className="container mx-auto text-left my-8  flex-col ">
          <div className="bg-blue-700 text-white px-2 py-2 flexCenter text-center rounded-full w-1/4">
            <p className="medium-16"> Blog</p>
          </div>
          <h1 className="capitalize bold-20 w-1/2  font-paragraph mt-4   lg:bold-52 ">
            Latest Industry News & Tips
          </h1>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        
          {" "}
          <div className=" flexCenter flex-col lg:flex-row gap-8 lg:gap-3">
            <Card
              imageUrl="/k2.jpg"
              author="lawal"
              commentsCount={2}
              title="Top Trends In Business Consulting"
            />
            <Card
              imageUrl="/k1.jpg"
              author="Francis"
              commentsCount={4}
              title="How To Ensure Business Continuity"
            />
            <Card
              imageUrl="/k3.jpg"
              author="Misah"
              commentsCount={6}
              title="Boost Your Financial Strategy In Business"
            />
          </div>
      </FadeInOnScroll>
    </div>
  );
};

interface CardProps {
  imageUrl: string;
  author: string;
  commentsCount: number;
  title: string;
  linkHref?: string;
}

const Card = ({
  imageUrl,
  author,
  commentsCount,
  title,
  linkHref = "#",
}: CardProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden  bg-none">
      {/* Blog Post Image */}
      <div className="relative shadow-md h-48 lg:h-64 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content Card */}
      <div className="relative bg-white -mt-12 mx-4 p-6 rounded-lg shadow-lg">
        {/* Author and Comments */}
        <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
          <div className="flex items-center">
            {/* Author Icon */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1 border-[1px] p-1 border-gray-20 rounded-full  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            {/* Comments Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>
              Comments (
              {commentsCount < 10 ? `0${commentsCount}` : commentsCount})
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

        {/* Read More Link */}
        <a
          href={linkHref}
          className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Blog;

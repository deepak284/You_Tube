import React from "react";

const commentsData = [
  {
    name: "Deepak Sharma",
    text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
    replies: [],
  },
  {
    name: "Deepak Sharma",
    text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
    replies: [
      {
        name: "Deepak Sharma",
        text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
        replies: [],
      },
      {
        name: "Deepak Sharma",
        text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
        replies: [],
      },
      {
        name: "Deepak Sharma",
        text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
        replies: [],
      },
    ],
  },
  {
    name: "Deepak Sharma",
    text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
    replies: [
      {
        name: "Deepak Sharma",
        text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
        replies: [
          {
            name: "Deepak Sharma",
            text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
            replies: [
              {
                name: "Deepak Sharma",
                text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
                replies: [
                  {
                    name: "Deepak Sharma",
                    text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
                    replies: [
                      {
                        name: "Deepak Sharma",
                        text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
                        replies: [
                          {
                            name: "Deepak Sharma",
                            text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Deepak Sharma",
    text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
    replies: [],
  },
  {
    name: "Deepak Sharma",
    text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
    replies: [
      {
        name: "Deepak Sharma",
        text: "lorem lipsum lorem lipsum lorem lipsum lorem lipsum",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-4">
      <img
        className="w-12 h-12 "
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3 ">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
    <Comment  data={comment} />
    <div className="pl-5 ml-5 border-l-black border">
     <CommentsList comments={comment.replies}/> 
     </div> 
    </div>

  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-5">
      <div className="font-bold text-2xl">Comments:</div>

      <CommentsList comments={commentsData}  />
    </div>
  );
};

export default CommentsContainer;

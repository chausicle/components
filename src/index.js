import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./components/Comment";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  const commentDetails = [
    {
      avatar: faker.image.avatar(),
      name: "Sam",
      comment: "Nice blog post!",
      timeAgo: "Today at 10:43PM",
    },
    {
      avatar: faker.image.avatar(),
      name: "Tom",
      comment: "Looks good",
      timeAgo: "Today at 7:55PM",
    },
    {
      avatar: faker.image.avatar(),
      name: "Dan",
      comment: "Whoa!😮",
      timeAgo: "Yesterday at 3:22PM",
    },
  ];

  const handleCommentList = (comments) => {
    return comments.map((detail, i) => (
      <ApprovalCard key={i}>
        <Comment data={detail} />
      </ApprovalCard>
    ));
  };

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4 style={{ color: "#db2929" }}>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      {handleCommentList(commentDetails)}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

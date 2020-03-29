import React from "react";
import PropTypes from "prop-types";

const Post = ({ title, path, date, description }) => {
  var d = new Date(date).toDateString();
  d = d.substring(4);
  return (
    <>
      <a
        href={path}
        style={{ fontSize: "1.4em", margin: 0, padding: 0, fontWeight: 600 }}
      >
        {title}
      </a>
      <p style={{ marginLeft: "2%", fontWeight: 600 }}>{d}</p>
      <p style={{ padding: 0, margin: "0 0 10%" }}>{description}</p>
    </>
  );
};
export default Post;

Post.protoTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string
};

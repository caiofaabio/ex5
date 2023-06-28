import { useState, useEffect } from "react";

export default function useFormHook() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createAt: new Date(),
    };
    setComments((currentState) => [newComment, ...currentState]);
    setAuthor("");
    setContent("");

    const updatedComments = [newComment, ...comments];
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const loadCommentsFromLocalStorage = () => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  };

  useEffect(() => {
    loadCommentsFromLocalStorage();
  }, []);

  return {
    handleSubmit,
    comments,
    author,
    setAuthor,
    content,
    setContent,
    loadCommentsFromLocalStorage,
  };
}

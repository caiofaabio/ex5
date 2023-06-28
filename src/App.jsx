import { useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import useFormHook from "./hooks/useFormHook";

function App() {
  const {
    handleSubmit,
    comments,
    author,
    setAuthor,
    content,
    setContent,
    loadCommentsFromLocalStorage,
  } = useFormHook();

  useEffect(() => {
    loadCommentsFromLocalStorage();
  }, []);

  return (
    <div id="app">
      <h2>Seção de comentários</h2>
      <Form
        handleSubmit={handleSubmit}
        author={author}
        content={content}
        setAuthor={setAuthor}
        setContent={setContent}
      />
      <hr />
      <section id="comments">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.author}</h3>
              <span>{comment.createAt.toLocaleString()}</span>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>Seja o primeiro a comentar :)</p>
        )}
      </section>
    </div>
  );
}

export default App;

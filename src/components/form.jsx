import PropType from "prop-types";

export default function Form({
  handleSubmit,
  author,
  setAuthor,
  content,
  setContent,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="author">Email:</label>
      <input
        type="email"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Digíte o email..."
        required
      />
      <label htmlFor="content">Comentário:</label>
      <textarea
        type="content"
        cols="30"
        rows="6"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Digíte seu comentário..."
        required
      />
      <button type="submit">Enviar comentário</button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropType.func,
  author: PropType.string,
  setAuthor: PropType.func,
  content: PropType.string,
  setContent: PropType.func,
};

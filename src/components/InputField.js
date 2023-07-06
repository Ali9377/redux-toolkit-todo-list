export const InputField = ({text, handleInput, handleSubmit}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        value={text}
        onChange={(e) => handleInput(e.target.value)}
        type="text"
        placeholder="Добавьте дело..."
      />
      <button onClick={handleSubmit}>Добавить</button>
    </form>
  );
};

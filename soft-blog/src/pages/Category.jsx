export default function Category() {
  return (
    <div style={card}>
      <h2>分類</h2>
      <ul>
        <li>旅遊</li>
        <li>美食</li>
        <li>科技 / AI</li>
      </ul>
    </div>
  );
}

const card = {
  background: "#fff",
  borderRadius: 20,
  padding: 24
};

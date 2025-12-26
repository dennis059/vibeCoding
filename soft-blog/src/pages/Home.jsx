export default function Home() {
  return (
    <div style={card}>
      <h1>🌿 我的部落格</h1>
      <p>柔和配色 × 圓角閱讀</p>
    </div>
  );
}

const card = {
  background: "#fff",
  borderRadius: 20,
  padding: 24,
  boxShadow: "0 8px 24px rgba(0,0,0,.05)"
};

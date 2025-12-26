export default function Post() {
  return (
    <div style={card}>
      <h1>文章標題</h1>
      <p style={{ lineHeight: 1.8 }}>
        這是文章頁，閱讀起來不刺眼。
      </p>
    </div>
  );
}

const card = {
  background: "#fff",
  borderRadius: 20,
  padding: 24
};

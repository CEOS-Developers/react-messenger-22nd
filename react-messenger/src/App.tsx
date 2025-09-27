import Layout from "./views/Layout";

const App = () => {
  return (
    <Layout>
      {/* 여기부터 실제 페이지 콘텐츠 */}
      <section className="p-4 space-y-3">
        <h1 className="text-lg font-semibold">홈 화면</h1>
        <p className="text-sm text-neutral-600">
          스크롤 테스트용 더미 콘텐츠입니다. 아래로 내려도 Navbar는 고정!
        </p>

        {/* 스크롤 확인용 더미 박스들 */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="h-16 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center"
          >
            item {i + 1}
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default App;

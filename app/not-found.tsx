export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">ページが見つかりませんでした。</p>
      <a
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full hover:from-white hover:to-white hover:text-blue-600 border hover:border-blue-500 transition-all"
      >
        ホームに戻る
      </a>
    </div>
  );
}

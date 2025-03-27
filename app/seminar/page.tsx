export default function SeminarPage() {
  return (
    <div className="bg-gray-50 mt-28">
      <div className="flex container mx-auto px-4 py-8">
        <div className="flex items-center mb-8 relative">
          <h1 className="text-4xl font-bold text-gray-800 tracking-wide opacity-10">
            NEWS
          </h1>
          <h2 className="absolute ml-4 text-xl font-semibold text-gray-700">
            新着情報
          </h2>
        </div>
        <div className="relative z-10">
          <div className="absolute -right-[9999px] left-0 top-0 bottom-0 bg-gray-100 -z-10"></div>
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-blue-600 text-sm font-medium mr-4">
                  プレスリリース
                </span>
                <span className="text-gray-500 text-sm">2025.03.25</span>
              </div>
              <div className="flex items-center">
                <img
                  src="/assets/about-img-1.webp"
                  alt="NextStairs Logo"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    株式会社NextStairs、J2モンテディオ山形のスポーツマーケティング(メディア露出価値...)
                  </h3>
                  <p className="text-gray-600 text-sm">
                    NextStairsはJ2モンテディオ山形のスポンサーシップ効果測定・評価（メディア露出価値...
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-blue-600 text-sm font-medium mr-4">
                  プレスリリース
                </span>
                <span className="text-gray-500 text-sm">2025.03.21</span>
              </div>
              <div className="flex items-center">
                <img
                  src="/api/placeholder/100/100"
                  alt="Team Photo"
                  className="w-24 h-24 mr-4 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    株式会社NextStairs、「九州スポーツ心理学会第38回大会」にてポスター掲示・発表
                  </h3>
                  <p className="text-gray-600 text-sm">
                    九州産業大学にて学会発表したことをお知らせ致します。株式会社NextStairs（ネクス...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

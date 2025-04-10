
import Link from 'next/link';
import { Calendar, Video, Users, BookOpen, Quote } from 'lucide-react';
import Footer from '../components/Footer';
import { getBanners } from '../lib/getBanners';

export default function Home({ banners }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-blue-50 px-6 py-16 text-gray-800 font-sans">

        {/* CMS Banner 區塊 */}
        <section className="space-y-6">
          {banners && banners.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {banners.map((b, i) => (
                <div key={i} className="rounded overflow-hidden shadow bg-white">
                  <img src={b.image?.asset?.url} alt={b.title} className="w-full object-cover h-48" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{b.title}</h3>
                    <p className="text-sm text-gray-700">{b.description}</p>
                    {b.url && (
                      <a href={b.url} target="_blank" className="text-blue-600 underline block mt-1">更多</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      <div className="max-w-6xl mx-auto space-y-16">

        {/* 歡迎區塊 */}
        <section className="text-center space-y-4">
          <h1 className="text-2xl md:text-5xl font-bold text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis">歡迎來到南科福氣教會</h1>
          <p className="text-lg md:text-xl text-blue-800">我們是一個在台南科學園區的基督教會，渴望成為祝福的出口。</p>
          <p className="italic text-gray-600">「你要專心仰賴耶和華，不可倚靠自己的聰明」 - 箴言 3:5</p>
        </section>

        {/* 快速導航區塊 */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Link href="/about" className="p-6 rounded-xl shadow bg-white hover:bg-blue-100">
            <Users className="mx-auto h-8 w-8 text-blue-700" />
            <h3 className="mt-2 font-semibold">關於我們</h3>
          </Link>
          <Link href="/media" className="p-6 rounded-xl shadow bg-white hover:bg-blue-100">
            <Video className="mx-auto h-8 w-8 text-blue-700" />
            <h3 className="mt-2 font-semibold">影音資源</h3>
          </Link>
          <Link href="/events" className="p-6 rounded-xl shadow bg-white hover:bg-blue-100">
            <Calendar className="mx-auto h-8 w-8 text-blue-700" />
            <h3 className="mt-2 font-semibold">教會活動</h3>
          </Link>
          <Link href="/offering" className="p-6 rounded-xl shadow bg-white hover:bg-blue-100">
            <BookOpen className="mx-auto h-8 w-8 text-blue-700" />
            <h3 className="mt-2 font-semibold">奉獻方式</h3>
          </Link>
        </section>

        {/* 每週經文 */}
        <section className="bg-white p-6 rounded-xl shadow text-center">
          <Quote className="mx-auto text-blue-600 h-6 w-6" />
          <p className="text-xl text-gray-700 italic mt-2">
            「祂的慈愛存到永遠，祂的信實直到萬代。」 - 詩篇 100:5
          </p>
        </section>

        {/* 最新活動區塊（示意） */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">近期活動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow space-y-2">
              <h3 className="font-semibold text-blue-800">主日崇拜</h3>
              <p className="text-sm text-gray-600">每週日早上 10:00 | 教會大堂</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow space-y-2">
              <h3 className="font-semibold text-blue-800">小組聚會</h3>
              <p className="text-sm text-gray-600">每週五晚上 7:30 | 小組家庭</p>
            </div>
          </div>
        </section>

        {/* 見證分享區（可擴展成 carousel 或卡片牆） */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">見證分享</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700">「感謝神在我困難中供應一切，讓我看見祂的信實！」</p>
              <p className="mt-2 text-sm text-gray-500">— 小組姊妹</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700">「透過服事，我更加認識神的愛，也更願意委身。」</p>
              <p className="mt-2 text-sm text-gray-500">— 敬拜團弟兄</p>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  const banners = await getBanners();
  return { props: { banners } };
}

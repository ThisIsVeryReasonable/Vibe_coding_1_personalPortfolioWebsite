// Hero 区块：首页首屏，包含头像、大标题和个人简介
function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center"
    >
      {/* 头像：渐变边框 + 圆形容器，替换 src 为真实头像即可 */}
      <div className="rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-1">
        <img
          src="/avatar.png"
          alt="头像"
          loading="lazy"
          onError={(e) => {
            // 头像加载失败时隐藏破图，保留渐变边框作为占位
            e.currentTarget.style.visibility = 'hidden'
          }}
          className="h-32 w-32 rounded-full bg-neutral-800 object-cover sm:h-40 sm:w-40"
        />
      </div>

      {/* 大标题：渐变文字 */}
      <h1 className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
        你好，我是 WWJ
      </h1>

      {/* 个人简介 */}
      <p className="max-w-xl text-lg leading-relaxed text-gray-400 sm:text-xl">
        全栈开发者，专注于 Go、Java 与 Vue + TypeScript。
        热爱构建简洁高效的产品，享受把想法变成现实的过程。
      </p>

      {/* 行动按钮 */}
      <div className="mt-2 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-medium text-white transition-transform hover:scale-105"
        >
          查看作品
        </a>
        <a
          href="#contact"
          className="rounded-full border border-neutral-700 px-6 py-3 font-medium text-gray-200 transition-colors hover:border-purple-400 hover:text-white"
        >
          联系我
        </a>
      </div>
    </section>
  )
}

export default Hero

// 导航栏：固定在顶部，半透明深色背景 + 毛玻璃效果
const navLinks = [
  { href: '#hero', label: '首页' },
  { href: '#about', label: '关于' },
  { href: '#projects', label: '项目' },
  { href: '#contact', label: '联系' },
]

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-800/60 bg-[#0a0a0a]/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo / 名字：渐变文字 */}
        <a
          href="#hero"
          className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-lg font-bold tracking-tight text-transparent"
        >
          WWJ
        </a>

        {/* 导航链接 */}
        <ul className="flex gap-6 text-sm text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

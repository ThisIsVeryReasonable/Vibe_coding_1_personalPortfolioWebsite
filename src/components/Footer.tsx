// 页脚：社交链接 + 版权信息
const socialLinks = [
  { href: 'https://github.com/', label: 'GitHub' },
  { href: 'mailto:hello@example.com', label: '邮箱' },
  { href: 'https://x.com/', label: 'X' },
]

function Footer() {
  return (
    <footer className="border-t border-neutral-800/60 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        {/* 社交链接 */}
        <ul className="flex gap-6 text-sm text-gray-400">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 版权信息 */}
        <p className="text-xs text-gray-500">
          © 2026 WWJ. 使用 React + Tailwind CSS 构建。
        </p>
      </div>
    </footer>
  )
}

export default Footer

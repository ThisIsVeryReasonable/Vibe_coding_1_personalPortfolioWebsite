import { skills } from '../data/skills'
import FadeIn from './FadeIn'

// About 区块：个人详细介绍 + 技能列表
function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* 区块标题 */}
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              关于我
            </span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* 详细介绍 */}
          <FadeIn className="space-y-4 text-left text-gray-400">
            <p className="leading-relaxed">
              我是一名拥有
              <span className="font-semibold text-white"> 8 年经验 </span>
              的高级 Java 开发工程师，长期深耕企业级后端系统的设计与落地。
            </p>
            <p className="leading-relaxed">
              擅长基于 Spring Cloud
              构建高可用微服务架构，主导过多个日均千万级请求系统的设计、性能调优与稳定性保障，
              对分布式事务、高并发、缓存一致性等核心问题有丰富的实战经验。
            </p>
            <p className="leading-relaxed">
              注重代码质量与工程规范，推崇 DDD 与简洁设计，
              热衷于在复杂业务中寻找优雅而可维护的技术方案。
            </p>
          </FadeIn>

          {/* 技能列表 */}
          <FadeIn delay={0.15} className="space-y-6 text-left">
            {skills.map((category) => (
              <div key={category.name}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-300">
                  {category.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-neutral-800 bg-neutral-900/40 px-3 py-1.5 text-sm text-gray-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default About

import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

// 应用入口组件 —— 后续继续补充 About / Projects / Contact 区块
function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Space_Mono, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

/*
  专有字体替代方案（源规范 Known Gaps：Cohere 私有字体文件未打包）
  - Display「CohereText」→ Space Grotesk（规范列出的首选回落，几何+近等宽气质）
  - Body/UI → Space Grotesk（Live Preview 实际字体，而非文字规范的 Inter 回退）
  - Mono「CohereMono」→ Space Mono（等宽标签用，与 Space Grotesk 同族更协调）
  中文无对应专有字体：直接加载 Noto Sans SC 作为实体中文字体（不依赖用户系统是否装了
  PingFang SC / 微软雅黑），并置于每个字体栈 Latin 字体之后 —— Latin 走 Cohere 回落字体，
  CJK 落到 Noto Sans SC；系统 CJK 字体作为再兜底。preload:false 避免拖慢首屏。
*/
const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display-src',
  display: 'swap',
})
const monoFont = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono-src',
  display: 'swap',
})
// 中文实体字体：不依赖用户系统装了 PingFang/雅黑，直接加载 Noto Sans SC，
// 放在每个字体栈的 Latin 字体之后 —— Latin 走 Cohere 回落字体，CJK 落到这里。
const cjkFont = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-cjk-src',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: 'cohere 风格 · 设计系统',
  description:
    '基于 cohere 视觉语言的可复用设计系统展示：编辑化留白、深色产品带、圆角媒体卡与克制的排版层级。',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${displayFont.variable} ${monoFont.variable} ${cjkFont.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

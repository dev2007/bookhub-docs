import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BookHub——中文文档库',
  keywords: 'guide,document,wiki,docs,elasticsearch,mysql,tesla,typescript,维基,百科,文档,中文文档,翻译,stem,stempump,stem,science,technology,engineering,mathematics,科学,技术,工程,数学,pac4j,cpa',
  description: '开源中文文档,elasticsearch,mysql,pac4j,typescript,tesla,cpa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

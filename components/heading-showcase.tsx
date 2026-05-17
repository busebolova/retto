"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// Style 1: Clean Underline
const Style1 = ({ text }: { text: string }) => (
  <div className="mb-16">
    <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Stil 1: Temiz Alt Çizgi</h3>
    <h2 className="text-5xl font-medium tracking-tight text-white relative inline-block">
      {text}
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-500/30 transform"></span>
    </h2>
  </div>
)

// Style 2: Gradient Text
const Style2 = ({ text }: { text: string }) => (
  <div className="mb-16">
    <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Stil 2: Gradient Metin</h3>
    <h2 className="text-5xl font-semibold tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
      {text}
    </h2>
  </div>
)

// Style 3: Elegant with Line
const Style3 = ({ text }: { text: string }) => (
  <div className="mb-16">
    <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Stil 3: Zarif Çizgi ile</h3>
    <div className="flex items-center">
      <div className="w-12 h-[1px] bg-gray-500 mr-4"></div>
      <h2 className="text-5xl font-light tracking-wide text-white">{text}</h2>
    </div>
  </div>
)

// Style 4: Bold with Background
const Style4 = ({ text }: { text: string }) => (
  <div className="mb-16">
    <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Stil 4: Kalın Arka Plan</h3>
    <h2 className="text-5xl font-bold tracking-tight">
      <span className="bg-gray-800 px-4 py-2 text-white">{text}</span>
    </h2>
  </div>
)

// Style 5: Split Style
const Style5 = ({ text }: { text: string }) => {
  const words = text.split(" ")
  const firstWord = words[0]
  const restWords = words.slice(1).join(" ")

  return (
    <div className="mb-16">
      <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Stil 5: Bölünmüş Stil</h3>
      <h2 className="text-5xl tracking-tight">
        <span className="font-bold text-white">{firstWord}</span>{" "}
        <span className="font-light text-gray-400">{restWords}</span>
      </h2>
    </div>
  )
}

// Style 6: Animated Reveal
const Style6 = ({ text }: { text: string }) => {
  const words = text.split(" ")

  return (
    <div className="mb-16">
      <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Stil 6: Animasyonlu Görünüm</h3>
      <h2 className="text-5xl font-medium tracking-tight text-white flex flex-wrap">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="mr-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </div>
  )
}

// Style 7: Boxed Highlight
const Style7 = ({ text }: { text: string }) => {
  const words = text.split(" ")
  const highlightWord = words[1] || words[0]
  const beforeWord = words[0] === highlightWord ? "" : words[0]
  const afterWords = words.slice(beforeWord ? 2 : 1).join(" ")

  return (
    <div className="mb-16">
      <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Stil 7: Kutu Vurgu</h3>
      <h2 className="text-5xl font-medium tracking-tight text-white">
        {beforeWord && <span className="mr-2">{beforeWord}</span>}
        <span className="bg-gray-700/50 px-3 py-1">{highlightWord}</span>
        {afterWords && <span className="ml-2">{afterWords}</span>}
      </h2>
    </div>
  )
}

// Style 8: Minimal with Dot
const Style8 = ({ text }: { text: string }) => (
  <div className="mb-16">
    <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Stil 8: Minimal Nokta</h3>
    <h2 className="text-5xl font-medium tracking-tight text-white">
      {text}
      <span className="text-gray-400 ml-1">.</span>
    </h2>
  </div>
)

// Style 9: Outlined Text
const Style9 = ({ text }: { text: string }) => (
  <div className="mb-16">
    <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Stil 9: Kontur Metin</h3>
    <h2 className="text-5xl font-bold tracking-tight text-transparent" style={{ WebkitTextStroke: "1px white" }}>
      {text}
    </h2>
  </div>
)

// Style 10: Bracket Highlight
const Style10 = ({ text }: { text: string }) => (
  <div className="mb-16">
    <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Stil 10: Parantez Vurgu</h3>
    <h2 className="text-5xl font-medium tracking-tight text-white">
      <span className="text-gray-500">[</span> {text} <span className="text-gray-500">]</span>
    </h2>
  </div>
)

export default function HeadingShowcase() {
  const [demoText, setDemoText] = useState("Başlık Örneği")

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <label htmlFor="demo-text" className="block text-sm font-medium text-gray-400 mb-2">
          Başlık Metni:
        </label>
        <input
          type="text"
          id="demo-text"
          value={demoText}
          onChange={(e) => setDemoText(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white"
        />
      </div>

      <Style1 text={demoText} />
      <Style2 text={demoText} />
      <Style3 text={demoText} />
      <Style4 text={demoText} />
      <Style5 text={demoText} />
      <Style6 text={demoText} />
      <Style7 text={demoText} />
      <Style8 text={demoText} />
      <Style9 text={demoText} />
      <Style10 text={demoText} />
    </div>
  )
}

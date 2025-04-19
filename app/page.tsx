
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const categories = ["화창함", "예쁨", "말랑말랑", "듀가나디", "이슬비"];

export default function VanchalSite() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleAddMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <main className="min-h-screen bg-pink-100 text-gray-800 font-sans">
      <motion.header
        className="text-center p-8 bg-pink-200 shadow-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-pink-700">반찰의 반찰한 공간</h1>
        <p className="text-sm mt-2 text-pink-600">예쁘고 말랑한 나만의 공간 🌸</p>
      </motion.header>

      <Tabs defaultValue="화창함" className="p-6">
        <TabsList className="grid grid-cols-5 gap-2 bg-pink-50 p-2 rounded-xl shadow">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="data-[state=active]:bg-pink-300 rounded-xl px-2 py-1 text-pink-700"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent
            key={cat}
            value={cat}
            className="bg-white mt-4 rounded-2xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-pink-600 mb-2">{cat}</h2>
            <p className="text-sm mb-4">이곳은 "{cat}" 카테고리 게시물 공간이에요 💕</p>
            <div className="bg-pink-50 p-4 rounded-lg text-sm">🌷 예시 글/사진/스티커가 여기에 들어갈 수 있어요!</div>
          </TabsContent>
        ))}
      </Tabs>

      <section className="bg-pink-50 p-6 rounded-2xl shadow-inner mx-6 mt-10">
        <h3 className="text-xl font-bold text-pink-600 mb-2">💌 반찰에게 메시지 남기기</h3>
        <Textarea
          placeholder="하고 싶은 말을 적어줘요 :)"
          className="mb-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleAddMessage} className="bg-pink-300 text-white hover:bg-pink-400">남기기</Button>
        <ul className="mt-4 space-y-2">
          {messages.map((msg, i) => (
            <li key={i} className="bg-white p-2 rounded-xl shadow text-sm">📝 {msg}</li>
          ))}
        </ul>
      </section>

      <motion.footer
        className="text-center py-6 text-sm text-pink-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        © 2025 반찰. 모든 권리 보유.
      </motion.footer>
    </main>
  );
}

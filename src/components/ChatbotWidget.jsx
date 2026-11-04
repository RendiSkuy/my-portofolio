import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from "react-icons/fa";

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Halo! 👋 Saya Asisten AI Rendi. Ada yang ingin kamu ketahui tentang Rendi atau cara menghubunginya?",
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    // Auto-scroll ke pesan terbaru
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    // Logika "AI" sederhana (Keyword Matching)
    const generateBotResponse = (userInput) => {
        const input = userInput.toLowerCase();

        // Kata Kunci: Kontak / Email / Hubungi
        if (
            input.includes("kontak") ||
            input.includes("hubungi") ||
            input.includes("email") ||
            input.includes("pesan") ||
            input.includes("bagaimana cara")
        ) {
            return "Tentu! Kamu bisa langsung menghubungi Rendi melalui email ini: **rendiripaldi225@gmail.com** 📧. Silakan copy email tersebut dan kirimkan pesanmu!";
        }

        // Kata Kunci: Siapa / Profil / Latar Belakang
        if (
            input.includes("siapa") ||
            input.includes("profil") ||
            input.includes("tentang") ||
            input.includes("rendi")
        ) {
            return "Rendi Ripaldi adalah fresh graduate D3 Teknik Informatika (IPK 3,6/4,00) dari Universitas Logistik dan Bisnis Internasional. Ia berfokus pada pengembangan backend, aplikasi mobile, database, dan otomasi alur kerja, dengan pengalaman magang serta proyek akademik individu maupun kelompok. 🚀";
        }

        // Kata Kunci: Proyek / Portfolio / Buat apa
        if (
            input.includes("proyek") ||
            input.includes("portfolio") ||
            input.includes("portofolio") ||
            input.includes("bikin apa") ||
            input.includes("project")
        ) {
            return "Portfolio Rendi memuat empat proyek di CV: sistem web bank sampah berbasis poin, REST API gudang Gudang Pro, aplikasi keuangan My Daily Kos dengan OCR kwitansi, dan aplikasi skrining risiko tidur T.U.R.U. Pengalaman magangnya di portal B2B Amanda Mart. Detail lengkap ada di halaman Projects.";
        }

        // Kata Kunci: Sapaan
        if (input === "hai" || input === "halo" || input === "hi" || input.includes("pagi") || input.includes("siang") || input.includes("malam")) {
            return "Halo juga! Ada yang bisa saya bantu terkait informasi tentang Rendi?";
        }

        // Default Fallback
        return "Maaf, saya robot yang masih belajar 🤖. Saya tidak sepenuhnya mengerti. Boleh coba tanya tentang 'siapa Rendi', 'proyek Rendi', atau 'cara menghubungi Rendi'?";
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // 1. Tambahkan pesan user ke kotak chat
        const newMessages = [...messages, { sender: "user", text: inputValue }];
        setMessages(newMessages);
        setInputValue("");

        // 2. Beri jeda sedikit seolah-olah bot sedang "mengetik"
        setTimeout(() => {
            const botReply = generateBotResponse(inputValue);
            setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
        }, 600); // delay 600ms
    };

    // Render teks agar memformat bold (jika ada **teks**)
    const formatText = (text) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={index} className="text-blue-600 dark:text-blue-400">{part.slice(2, -2)}</strong>;
            }
            return <span key={index}>{part}</span>;
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-sans">
            {/* Tombol Floating */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                    } transition-all duration-300 w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,99,235,0.4)] absolute bottom-0 right-0 group`}
            >
                <FaRobot className="text-3xl group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />

                {/* Tooltip kecil saat hover */}
                <span className="absolute -top-12 right-0 bg-gray-900 text-white text-xs py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
                    Tanya Asisten AI 🤖
                </span>
            </button>

            {/* Kotak Chat Window */}
            <div
                className={`${isOpen
                        ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
                        : "translate-y-20 opacity-0 scale-95 pointer-events-none"
                    } transition-all duration-300 origin-bottom-right absolute bottom-0 right-0 w-[90vw] sm:w-[350px] md:w-[400px] h-[500px] max-h-[80vh] bg-white dark:bg-gray-900 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] border border-gray-100 dark:border-gray-800 flex flex-col overflow-hidden`}
            >
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 flex items-center justify-between shrink-0 shadow-sm relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                            <FaRobot className="text-xl" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm md:text-base leading-tight">AI Assistant</h3>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span className="text-xs text-blue-100 opacity-90">Online & Siap Membantu</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Area Balasan Chat */}
                <div className="flex-1 overflow-y-auto p-5 bg-gray-50/50 dark:bg-gray-900/50 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex items-end gap-2 max-w-[85%] ${msg.sender === "user" ? "self-end flex-row-reverse" : "self-start"
                                }`}
                        >
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === "user"
                                        ? "bg-gray-800 dark:bg-gray-700 text-gray-200"
                                        : "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                                    }`}
                            >
                                {msg.sender === "user" ? <FaUser className="text-xs" /> : <FaRobot className="text-sm" />}
                            </div>

                            <div
                                className={`px-4 py-2.5 rounded-2xl text-[13px] md:text-sm shadow-sm ${msg.sender === "user"
                                        ? "bg-gray-900 text-white rounded-br-sm"
                                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700 rounded-bl-sm"
                                    }`}
                            >
                                {msg.sender === "user" ? msg.text : formatText(msg.text)}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Kotak Input Bawah */}
                <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 shrink-0">
                    <form
                        onSubmit={handleSendMessage}
                        className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 p-1.5 rounded-full border border-gray-200 dark:border-gray-700 focus-within:border-blue-500 dark:focus-within:border-blue-500 transition-colors"
                    >
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Tanya info lengkap Rendi..."
                            className="flex-1 bg-transparent border-none outline-none px-4 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors shrink-0"
                        >
                            <FaPaperPlane className="text-sm ml-[-2px]" />
                        </button>
                    </form>
                    <div className="text-center mt-2">
                        <span className="text-[10px] text-gray-400 dark:text-gray-500">
                            ⚡ Simulated AI Assistant v1.0
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatbotWidget;

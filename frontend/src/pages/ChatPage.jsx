import React, { useState } from "react";
import { Image, Loader } from "lucide-react";

const LinkedInChat = () => {
  const users = [
    { id: 1, name: "Alice Johnson", position: "Product Manager", avatar: "/avatar1.jpg" },
    { id: 2, name: "Bob Smith", position: "UX Designer", avatar: "/avatar2.jpg" },
    { id: 3, name: "Carlos Lee", position: "Backend Developer", avatar: "/avatar3.jpg" },
  ];

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState([
    { id: 1, sender: "other", content: "Hi! Great to connect." },
    { id: 2, sender: "me", content: "Hey! Likewise." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: "me", content: input }]);
    setInput("");
  };

  return (
    <div className="flex h-[480px] bg-gray-100">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-gray-300 overflow-y-auto">
        <h2 className="text-lg font-semibold p-4 border-b bg-gray-50">Messages</h2>
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => {
              setSelectedUser(user);
              setMessages([
                { id: 1, sender: "other", content: `Hello, I'm ${user.name}` },
                { id: 2, sender: "me", content: "Nice to meet you!" },
              ]);
            }}
            className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100 ${selectedUser.id === user.id ? "bg-blue-50" : ""
              }`}
          >
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium text-sm">{user.name}</p>
              <p className="text-xs text-gray-500">{user.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Screen */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b bg-white shadow-sm">
          <img src={selectedUser.avatar} alt={selectedUser.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold text-sm">{selectedUser.name}</p>
            <p className="text-xs text-gray-500">{selectedUser.position}</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`w-fit max-w-[40%] px-4 py-2 text-sm rounded-2xl my-2 ${msg.sender === "me"
                ? "bg-blue-600 text-white ml-auto rounded-br-none"
                : "bg-gray-200 text-gray-800 mr-auto rounded-bl-none"
                }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="relative flex items-center p-4 border-t bg-white">
          <label className=' flex items-center text-info hover:text-info-dark transition-colors duration-200 cursor-pointer'>
            <Image size={20} className='mr-2' />
            <input type='file' accept='image/*' className='hidden' />
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="ml-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkedInChat;

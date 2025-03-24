"use client";
import { useChat } from "@ai-sdk/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  const imgSrc =
    "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="px-32 py-12">
      Image to analyze: <img src={imgSrc} alt="Image to analyze" width={300} />
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.content}</li>
        ))}
      </ul>
      <form
        onSubmit={(e) =>
          handleSubmit(e, {
            experimental_attachments: [
              {
                name: "Me",
                url: imgSrc,
                contentType: "image/jpeg",
              },
            ],
          })
        }
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Some input"
          className="border border-gray-300 rounded-md p-2 mt-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

"use client";
import { useChat } from "@ai-sdk/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div>
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
                url: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png",
                contentType: "image/png",
              },
            ],
          })
        }
      >
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

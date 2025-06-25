import { useEffect, useState } from "react";

type TitleProps = {
  text: string
}

export const Title = ({ text }: TitleProps) => {
    const [showDefault, setShowDefault] = useState(false);

    useEffect(() => {
    const timer = setTimeout(() => {
        setShowDefault(true);
    }, 5000);

    return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showDefault) {
            console.log('API Title successfully', text);
        }
    }, [showDefault])

    const styleText = {
        fontFamily: '"Ubuntu", sans-serif',
        color: '#ffffff',
        fontWeight: '500',
        fontSize: '22px',
    }

  return (
    <div className="mb-[10px]">
      {showDefault ? <span style={{...styleText}}>{text}</span> : <span style={{...styleText}}>DevTrip Frontend</span>}
    </div>
  );
};

export const Forme = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/mvgrqpro", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="w-126 p-6 bg-[#1a1a1a] rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            required
            className="p-3 rounded-md text-white focus:outline-none border border-gray-600"
          />
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            required
            className="p-3 rounded-md text-white focus:outline-none border border-gray-600"
            rows={5}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-all"
          >
            {status === "loading" ? "Отправка..." : "Отправить"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-400 mt-4">Сообщение успешно отправлено!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-4">Ошибка при отправке. Попробуйте позже.</p>
        )}
      </div>
    </>
  )
}

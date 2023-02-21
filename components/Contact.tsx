import React, { useState, useRef, useEffect } from "react";
import { FcBusinessContact } from "react-icons/fc";
import { motion } from "framer-motion";
import { useWindowContext } from "@/context";
import AnimatedText from "./AnimatedText";
import axios from "axios";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [Subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const top = contactRef.current?.getBoundingClientRect().height;
  const { contactScrollValue, setContactScrollVaue } = useWindowContext();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setContactScrollVaue(top as number);
      console.log(contactScrollValue);
    }
  }, [contactScrollValue]);
  const messageInfo = {
    email,
    name,
    Subject,
    message,
  };

  const sendEmail = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/hello", {
        messageInfo,
      });
      setLoading(false);
      alert("email sended");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="md:h-screen snap-y  py-4 px-4 bg-[#1d1d1d]  grid place-content-center  "
      ref={contactRef}
    >
      <div className=" text-white flex items-center space-x-2  justify-center font-bold py-8">
        <AnimatedText text="Get " fontSize="3xl" delay={0.2} />
        <AnimatedText text=" in " fontSize="3xl" delay={0.3} />
        <AnimatedText text=" touch" fontSize="3xl" delay={0.4} />
      </div>
      <section className="max-w-4xl grid grid-cols-12 gap-4">
        <div className=" col-span-12 md:col-span-6 text-white  flex flex-col items-start justify-start space-y-4 ">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold ">Contact me </h2>
            <p className=" ">
              Want to get in touch with me ? Either fill the form with your
              inquiry or contact me throught this emails below
            </p>
          </div>
          <ul className="space-y-4 text-[12px] md:text-sm ">
            <li className="grid grid-cols-12">
              <span className="text-sky-500 md:text-xl font-bold col-span-4 ">
                Full Name :
              </span>
              <span className="col-span-6 md:text-lg ">Mohammed Mouhine</span>
            </li>
            <li className="grid grid-cols-12">
              <span className="text-sky-500 md:text-xl font-bold col-span-4">
                Email1 :
              </span>
              <span className="col-span-6 text-[12px] md:text-lg">
                mouhinemohamed@gmail.com
              </span>
            </li>
            <li className="grid grid-cols-12">
              <span className="text-sky-500 md:text-xl font-bold col-span-4">
                Email2 :
              </span>
              <span className="col-span-6  text-[12px] md:text-lg">
                mouhine2001@outlook.com
              </span>
            </li>
          </ul>
        </div>
        <div className=" col-span-12 md:col-span-6 text-white ">
          <section className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-2 py-2 rounded outline-none border bg-[#2b2b2b] "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-2 py-2 rounded outline-none border bg-[#2b2b2b] "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <section className="flex flex-col items-center space-y-4 py-2">
            <input
              type="text "
              placeholder="Subject"
              className="w-full px-2 py-2 rounded outline-none border bg-[#2b2b2b] "
              value={Subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              cols={30}
              rows={10}
              placeholder="Message"
              className="w-full px-2 py-2 rounded outline-none border bg-[#2b2b2b] "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </section>
          <div className="flex items-center justify-center">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              className="border rounded px-4 py-2 bg-sky-500 "
              onClick={sendEmail}
            >
              {loading ? "Loding ..." : "Send Message"}
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

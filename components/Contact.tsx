import React, { useState, useRef, useEffect } from "react";
import { FcBusinessContact } from "react-icons/fc";
import { motion } from "framer-motion";
import { useWindowContext } from "@/context";
import AnimatedText from "./AnimatedText";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
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
    if (!email || !name || !Subject || !message) {
      toast.warning("Please Fill all the fields ");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/api/hello", {
        messageInfo,
      });
      setLoading(false);
      toast.success("Email was sent successfuly");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="md:h-screen snap-y  py-4 px-4 bg-[#1d1d1d] max-w-5xl mx-auto  grid place-content-center  "
      ref={contactRef}
    >
      <ToastContainer />
      <div className=" text-white text-[30px] md:text-[40px] flex items-center space-x-2   font-bold py-8">
        <AnimatedText text="Get " fontSize="3xl" delay={0.2} />
        <AnimatedText text=" in " fontSize="3xl" delay={0.3} />
        <AnimatedText text=" touch" fontSize="3xl" delay={0.4} />
      </div>
      <section className=" grid grid-cols-12 gap-4">
        <div className=" col-span-12 md:col-span-6 text-white  flex flex-col items-start justify-start space-y-4 ">
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:w-[80%] w-full  "
            >
              Want to get in touch with me ? Either fill the form with your
              inquiry or contact me throught this emails below
            </motion.p>
          </div>
          <ul className="space-y-4 text-[14px] md:text-sm ">
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="text-sky-500 md:text-xl font-bold  ">
                Full Name :
              </span>
              <span className="col-span-6 md:text-lg ml-4 ">
                Mohammed Mouhine
              </span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="text-sky-500 md:text-xl font-bold ">
                Email :
              </span>
              <span className=" pl-5 text-[14px] md:text-lg">
                mouhine2001@outlook.com
              </span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="text-sky-500 md:text-xl font-bold  ">
                Github :
              </span>
              <Link
                href={"https://github.com/Mouhine"}
                className=" ml-4 underline "
                target="_blank"
              >
                Github Account Link
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="text-sky-500 md:text-xl font-bold  ">
                LinkedIn :
              </span>
              <Link
                href={"https://www.linkedin.com/in/mohamed-mouhine-956a15221/"}
                className="ml-4 underline "
                target="_blank"
              >
                LinkedIn Account Link
              </Link>
            </motion.li>
          </ul>
        </div>
        <div className=" col-span-12 md:col-span-6 text-white ">
          <section className="flex items-center space-x-4">
            <motion.input
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              type="text"
              placeholder="Name"
              className="w-full px-2 py-2 rounded outline-none border bg-[#2b2b2b] "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <motion.input
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              type="email"
              placeholder="Email"
              className="w-full px-2 py-2 rounded outline-none border bg-[#2b2b2b] "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <section className="flex flex-col items-center space-y-4 py-2">
            <motion.input
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              type="text "
              placeholder="Subject"
              className="w-full px-2 py-2 rounded outline-none border bg-[#2b2b2b] "
              value={Subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <motion.textarea
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              cols={30}
              rows={10}
              placeholder="Message"
              className="w-full px-2 py-2 rounded outline-none border bg-[#2b2b2b] "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></motion.textarea>
          </section>
          <div className="flex items-center justify-center">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
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

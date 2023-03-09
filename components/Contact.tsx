//@ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [Subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);

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
    <div className="md:h-screen snap-y  py-4 px-4  max-w-5xl mx-auto  grid place-content-center  ">
      <ToastContainer />

      <section className=" grid grid-cols-12 gap-4">
        <div className=" col-span-12 md:col-span-6 text-secondary  flex flex-col items-start justify-start space-y-4 ">
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>get in touch</p>
            <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
          </motion.div>
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
              className="p-3 rounded bg-tertiary shadow-md"
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
              className="p-3 rounded bg-tertiary shadow-md "
            >
              <span className="text-sky-500 md:text-xl font-bold ">
                Email :
              </span>
              <span className=" pl-2 text-[14px] md:text-lg">
                mouhine2001@outlook.com
              </span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-3 rounded bg-tertiary shadow-md"
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
              className="p-3 rounded bg-tertiary shadow-md"
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
        <div className=" col-span-12 md:col-span-6 text-secondary space-y-4 bg-black-100 p-8 rounded shadow shadow-secondary">
          <motion.input
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded outline-none  bg-tertiary "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <motion.input
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded outline-none  bg-tertiary "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <motion.input
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            type="text "
            placeholder="Subject"
            className="w-full px-4 py-3 rounded outline-none  bg-tertiary "
            value={Subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <motion.textarea
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            cols={30}
            rows={9}
            placeholder="Message"
            className="w-full px-4 py-3 rounded outline-none  bg-tertiary "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></motion.textarea>

          <div className="flex items-center justify-end">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className=" rounded px-4 py-2 bg-tertiary shadow-md "
              onClick={sendEmail}
            >
              {loading ? "Loding ..." : "Send "}
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

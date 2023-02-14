import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mouhinemohmade@gmail.com",
    pass: "dtwcnmcnjhfnmyai",
  },
});

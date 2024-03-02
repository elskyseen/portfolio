import React from "react"
import LinkIcon from "../components/LinkIcon"
import emailIcon from "../assets/icon/gmail_icon.svg"
import githubIcon from "../assets/icon/github_icon.svg"
import linkedinIcon from "../assets/icon/linkedin_icon.svg"
import instagramIcon from "../assets/icon/instagram_icon.svg"
import telegramIcon from "../assets/icon/telegram_icon.svg"
import whatsappIcon from "../assets/icon/whatsapp_icon.svg"

const medias = [
  {
    path: "/",
    icon: emailIcon,
  },
  {
    path: "/",
    icon: githubIcon,
  },
  {
    path: "/",
    icon: linkedinIcon,
  },
  {
    path: "/",
    icon: instagramIcon,
  },
  {
    path: "/",
    icon: whatsappIcon,
  },
  {
    path: "/",
    icon: telegramIcon,
  },
]

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-primary px-4 lg:px-40 pt-20 pb-32 lg:pb-c120">
      <h1 className="text-xl lg:text-6xl text-center text-secondary mb-9">
        <span className="font-bold">Cari tau lebih banyak tentang saya</span>
        <br />
        melalui sosial media
      </h1>
      <div className="flex justify-center gap-4">
        {medias.map((media, i) => {
          return (
            <LinkIcon
              key={i}
              path={media.path}
              icon={media.icon}
              target="_blank"
              customWidth="w-12 lg:w-c60"
              customHeight="h-12 lg:h-c60"
              widthIcon="w-6 lg:w-c35"
              heightIcon="h-6 lg:h-c35"
            />
          )
        })}
      </div>
    </section>
  )
}

export default Contact

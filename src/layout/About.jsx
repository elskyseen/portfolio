import React from "react"
import darkPhoto from "../assets/image/dark-photo.jpg"
import normalPhoto from "../assets/image/normal-photo.jpg"

const About = () => {
  return (
    <section id="about-me" className="bg-primary px-40 pt-20 pb-c120">
      <h1 className="font-bold text-4xl text-secondary capitalize text-center mb-c72  ">
        tentang saya
      </h1>
      <div className="grid grid-cols-12">
        <div className="col-span-6 p-4 rounded-8 border-2 border-secondary text-secondary">
          Saya Leo Marselio, lulusan dari SMKN 1 DLANGGU dan diumumkan lulus
          pada tahun 2023 tepatnya pada tanggal 8 mei 2023, saya memiliki minat
          untuk menjadi Frontend Developer sejak memasuki pendidikan SMK, dengan
          keterbatasan belajar karena covid di tahun 2019, saya memulai belajar
          sendiri dari rumah dengan resource seadanya <br />
          <br />
          Meskipun dengan keadaan seperti itu tidak membuat saya berputus asa
          untuk belajar tentang seputar coding, meskipun banyak kesulitan dan
          rintangan yang harus saya hadapi setiap harinya, namun tak hanya
          Frontend Developer, saat ini saya sedang mencoba berfokus untuk
          mempelajari tentang Backend Developer dan teknik-teknik seputar design
          atau yang sering disebut juga UI/UX. <br />
          <br /> Untuk pengalaman sendiri saya telah menjalani beberapa proses
          dengan mengikuti program magang dari sekolah dan juga program
          Intensive Pairing dari Refactory, semua tentang pengalaman saya akan
          lebih detail pada tab Resume
        </div>
        <div className="col-span-6 flex justify-center relative">
          <img
            src={normalPhoto}
            alt="my-photo"
            className="w-c336 rounded-8 border-2 border-secondary h-full normal-photo transition-all ease-in-out duration-500 absolute"
          />
          <img
            src={darkPhoto}
            alt="my-photo"
            className="w-c336 rounded-8 border-2 border-secondary h-full dark-photo transition-all ease-in-out duration-500 absolute"
          />
        </div>
      </div>
    </section>
  )
}

export default About

import React from "react"
import CardResume from "../components/CardResume"

const resumes = [
  {
    title: "magang lab akselerasi",
    describe:
      "Saya mengikuti program dari sekolah untuk mencari pengalaman dengan magang disebuah penyedia bootcamp yaitu Lab Akselerasi pada waktu memasuki kelas 4 pada SMKN 1 DLANGGU dan berjalan selama 6 bulan dari 4 juni 2022 - 4 desember 2022.",
    headActivity:
      "Hal-hal yang saya pelajari selama magang pada Lab Akselerasi :",
    listActivitys: [
      "Belajar dasar dasar dari HTML,CSS, Javascript dan PHP dari dasar",
      "Belajar membuat website dasar dengan HTML, CSS dan Javascript",
      "Belajar menggunakan framework dari PHP yaitu Laravel",
      "Memahami konsep CRUD menggunakan Laravel",
      "Menerapkan konsep CRUD pada project sederhana menggunakan laravel dengan mengikuti arahan dari pembimbing melalui video setiap harinya",
      "Mempelajari JQuery dan mengkombinasikan dengan laravel",
      "Membuat project Sistem Manajemen Sekolah untuk project akhir",
    ],
  },
  {
    title: "program intensive pairing",
    describe:
      "Saya mengikuti program Intensive Pairing batch 24 dengan melalui beberapa proses yang diselenggarakan oleh Refactory selama 3 bulan mulai dari 16 November 2023 - 16 Februari 2024",
    headActivity: "Hal-hal yang saya dapatkan pada program IP :",
    listActivitys: [
      "Ikut serta dalam mengembangkan product pada Refactory dengan melakukan migrasi dari aplikasi yang ada menggunakan supabase",
      "Membuat fitur baru pada salah satu project yang sedang berjalan",
      "Membuat unit test pada beberapa project yang sedang berjalan dari beberapa bahasa pemrograman yaitu .Net, PHP( phpunit ) dan Javascript( vitest )",
    ],
  },
]

const Resume = () => {
  return (
    <section id="about-me" className="bg-primary px-40 pt-20 pb-c120">
      <h1 className="font-bold text-4xl text-secondary capitalize text-center mb-c72  ">
        resume
      </h1>
      <div className="grid grid-cols-12 gap-4">
        {resumes.map((resume, i) => {
          return <CardResume key={i} {...resume} />
        })}
      </div>
    </section>
  )
}

export default Resume

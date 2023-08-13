import Benefits from "@/components/Benefits"
import FormWhattsap from "@/components/FormWhattsap"
import SectionContent from "@/components/SectionContent"
import { ThemeToogle } from "@/components/ThemeToogle"
import { Metadata } from "next"
import Head from "next/head"

import Image from "next/image"

export const metadata: Metadata = {
	title: "ChatFirst - Chat Dulu, Save Kemudian",
	description:
		"ChatFirst memudahkan Anda untuk berkomunikasi via WhatsApp tanpa perlu menyimpan nomor kontak. Chat dulu, save kemudian.",
	keywords: "Chat, WhatsApp, Save Later, Contact, Messaging, Instant Messaging",
}
export default function Home() {
	return (
		<>
			<div className='bg-gradient-to-r from-blue-600 via-green-500 to-green-900 text-white py-20 px-6 text-center relative'>
				<img
					src='https://i.ibb.co/GxdTHVG/5138237.jpg'
					alt='Gambar jumbotron'
					className='absolute top-0 bottom-0 left-0 w-1/2 h-full object-cover opacity-50'
				/>

				<div className='relative z-10 max-w-4xl mx-auto'>
					<h1 className='text-4xl font-bold mb-5 leading-[3rem]'>
						Selamat Datang di{" "}
						<strong className='text-primary bg-white px-2 rounded-sm mt-2'>
							ChatFirst!
						</strong>
					</h1>
					<p className='text-lg'>
						<strong className='text-primary bg-white px-2 rounded-sm mr-2'>
							Chat dulu, save kemudian!
						</strong>
						Nikmati kemudahan berkomunikasi lewat WhatsApp tanpa perlu repot
						menyimpan nomor di kontak HP Anda.{" "}
						<em className='border-b border-primary'>
							Praktis, cepat, dan efisien!
						</em>
					</p>
				</div>
			</div>

			<main className='lg:max-w-lg px-4 mx-auto my-10'>
				<SectionContent />
			</main>
		</>
	)
}

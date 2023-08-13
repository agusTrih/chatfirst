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
		<div className='max-w-screen-lg mx-auto  px-4 mt-10'>
			<div className='text-black bg-white py-20 px-2 lg:px-6 text-center relative border-black border-2 rounded-2xl shadow-sm shadow-green-600'>
				<div className='relative z-10 max-w-4xl mx-auto'>
					<h1 className='text-4xl font-bold mb-5 leading-[3rem]'>
						Selamat Datang di{" "}
						<strong className='text-primary  border-b-2  border-green-500 px-2  mt-2'>
							ChatFirst!
						</strong>
					</h1>
					<p className='text-lg'>
						<strong className='text-black bg-green-300 px-2 rounded-sm mr-2'>
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
				<h2 className='text-2xl font-bold mb-2 text-center'>
					Mulai Percakapan Anda Sekarang
				</h2>
				<p className='mb-4 text-gray-500 text-center'>
					Isi form di bawah ini dengan nomor whatsApp tujuan Anda
				</p>

				<SectionContent />
			</main>
		</div>
	)
}

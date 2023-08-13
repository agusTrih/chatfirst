import Benefits from "@/components/Benefits"
import FormWhattsap from "@/components/FormWhattsap"
import SectionContent from "@/components/SectionContent"
import { ThemeToogle } from "@/components/ThemeToogle"

import Image from "next/image"

export default function Home() {
	return (
		<>
			<div className='bg-gradient-to-r from-blue-600 via-teal-400 to-green-500 text-white py-20 px-6 text-center relative'>
				<img
					src='https://i.ibb.co/GxdTHVG/5138237.jpg'
					alt='Gambar jumbotron'
					className='absolute top-0 bottom-0 left-0 w-1/2 h-full object-cover opacity-50'
				/>

				<div className='relative z-10'>
					<h1 className='text-4xl font-bold mb-5'>
						Selamat Datang di ChatFirst!
					</h1>
					<p className='text-lg'>
						Chat dulu, save kemudian! Nikmati kemudahan berkomunikasi lewat
						WhatsApp tanpa perlu repot menyimpan nomor di kontak HP Anda.
						Praktis, cepat, dan efisien!
					</p>
				</div>
			</div>
			{/* <ThemeToogle /> */}
			{/* section */}
			{/* <Benefits /> */}
			{/* cta */}
			{/* <div className='text-center py-16'>
				<button className='bg-blue-600 text-white py-3 px-10 rounded hover:bg-blue-700 mb-5'>
					Buka Editor
				</button>
				<p>Mulai chat sekarang.</p>
			</div> */}
			<main className='lg:max-w-lg px-4 mx-auto my-5'>
				<SectionContent />
			</main>
		</>
	)
}

import { FiMessageCircle, FiPhoneCall, FiShield } from "react-icons/fi"
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card"

interface BenefitProps {
	title: string
	description: string
	icon: JSX.Element
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => (
	<div className='col-span-12 lg:col-span-4 '>
		<Card>
			<CardHeader>{title}</CardHeader>
			<CardContent>
				<div className='text-blue-600 h-16 w-16 mb-5'>{icon}</div>
				<CardDescription>{description}</CardDescription>
			</CardContent>{" "}
		</Card>
	</div>
	// <div className='mx-4 md:mx-8 bg-white rounded-lg shadow-lg py-6 px-4'>

	// </div>
)

const Benefits: React.FC = () => {
	const benefits: BenefitProps[] = [
		{
			icon: <FiMessageCircle color='#2563EB' size={64} />,
			title: "Chat WhatsApp Tanpa Menyimpan Nomor",
			description: "Anda dapat mulai chat tanpa perlu menyimpan nomor kontak.",
		},
		{
			icon: <FiPhoneCall color='#2563EB' size={64} />,
			title: "Praktis dan Mudah",
			description: "Hanya perlu beberapa klik untuk mulai chat.",
		},
		{
			icon: <FiShield color='#2563EB' size={64} />,
			title: "Privasi Terjaga",
			description:
				"Cukup berikan nomor yang akan dihubungi, tanpa perlu menyimpan nomor tersebut.",
		},
	]

	return (
		<div className='py-12 px-6 bg-gray-50'>
			<h2 className='text-3xl font-bold mb-8 text-center'>
				Manfaat Menggunakan Layanan Kami
			</h2>
			<div className='grid grid-cols-12 gap-4'>
				{benefits.map((benefit, idx) => (
					<BenefitCard key={idx} {...benefit} />
				))}
			</div>
		</div>
	)
}

export default Benefits

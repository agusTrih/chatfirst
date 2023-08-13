"use client"
import { FC } from "react"
import "react-phone-number-input/style.css"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import PhoneInput from "react-phone-number-input"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Textarea } from "./ui/textarea"
import { Separator } from "@radix-ui/react-dropdown-menu"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog"
import PreviewWhattsap from "./PreviewWhattsap"

const formSchema = z.object({
	messageWhattsap: z.string(),
	phone: z.string().nonempty("Phone Number Wajib di isi"),
})
interface FormWhattsapProps {}

const FormWhattsap: FC<FormWhattsapProps> = () => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			messageWhattsap: "",
			phone: "",
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		const whatsAppNumber = values.phone.replace("+", "") // remove the plus sign
		const message = encodeURI(values.messageWhattsap)
		const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${message}`

		// Open a new window with the WhatsApp url
		window.open(whatsAppUrl, "_blank")
	}
	function handlePreview() {
		const watchAllFields = form.watch()
		// // Encoding values as base64
		// const base64Values = window.btoa(JSON.stringify(values))
		// // Menyimpan data yang sudah di-encode ke localStorage
		// window.localStorage.setItem("previewData", base64Values)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 p-4 rounded-md bg-white shadow-lg '
			>
				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<PhoneInput
									className='border border-gray-200 p-2 rounded-sm outline-none '
									placeholder='Enter phone number'
									international
									countryCallingCodeEditable={false}
									defaultCountry='ID'
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Remember to check your country code
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='messageWhattsap'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									placeholder='Masukkan pesan yang ingin kamu kirimkan ke WhatsApp di sini...'
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Example: “Hi, may I know whose number this is?”
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Dialog>
					<DialogTrigger asChild>
						<Button
							type='button'
							variant='outline'
							className='w-full'
							onClick={handlePreview}
						>
							Preview
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Preview Message</DialogTitle>
						</DialogHeader>

						<PreviewWhattsap values={form.getValues()} />
					</DialogContent>
				</Dialog>

				<div className='text-center text-gray-500'> -or- </div>
				<Button type='submit' className='w-full'>
					Kirim Pesan
				</Button>
			</form>
		</Form>
	)
}

export default FormWhattsap

import { FC } from "react"
import { AiOutlineSend } from "react-icons/ai"
import { FiSend } from "react-icons/fi"

interface PreviewWhattsapProps {
	values: {
		messageWhattsap: string
		phone: string
	}
}

const PreviewWhattsap: FC<PreviewWhattsapProps> = ({ values }) => {
	return (
		<div className='py-5 px-2 rounded-lg bg-white shadow-md h-[500px]'>
			<div className='bg-[#ECE5DD] h-full'>
				{/* screen */}

				<div className='flex flex-col h-full'>
					<div className='p-3 bg-green-500 text-white flex items-center justify-between'>
						<h4 className='font-bold'>{values?.phone || "XXX-XXXX-XXXX"}</h4>
						<div>
							<img
								className='h-5'
								src='https://icons.iconarchive.com/icons/dtafalonso/android-l/512/Phone-icon.png'
								alt='Phone icon'
							/>
						</div>
					</div>

					<div className='mt-auto'>
						<div className='flex items-end justify-end p-3'>
							<p className='text-sm bg-[#DCF8C6] text-black px-3 py-2 rounded-lg mx-2'>
								{values?.messageWhattsap || "..."}
							</p>
						</div>

						<div>
							<div className='flex items-center p-3 bg-gray-100'>
								<div
									//  value={input}
									//  onChange={(e) => setInput(e.target.value)}

									className='flex-grow rounded-full bg-white p-2 px-3 mr-3'
								>
									Type A message
								</div>
								<div>
									<AiOutlineSend />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PreviewWhattsap

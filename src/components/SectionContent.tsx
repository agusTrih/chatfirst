import { FC } from "react"
import FormWhattsap from "./FormWhattsap"
import PreviewWhattsap from "./PreviewWhattsap"

interface SectionContentProps {}

const SectionContent: FC<SectionContentProps> = () => {
	return (
		<div className='grid grid-cols-12'>
			<div className='col-span-12'>
				<FormWhattsap />
			</div>
		</div>
	)
}

export default SectionContent

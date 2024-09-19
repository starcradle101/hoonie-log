import { FC } from 'react';

interface FormButtonsProps {
	onCancel: () => void;
}

export const FormButtons: FC<FormButtonsProps> = ({ onCancel }) => (
	<div className='my-4 flex justify-end gap-2'>
		<button type='submit' className='rounded bg-blue-500 px-3 py-1 text-white'>
			저장
		</button>
		<button
			type='button'
			className='rounded border border-slate-400 bg-white px-3 py-1'
			onClick={onCancel}
		>
			취소
		</button>
	</div>
);

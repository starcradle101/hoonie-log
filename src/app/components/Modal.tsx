'use client';

import { useRef } from 'react';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onExit?: () => void;
	title: string;
	children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children, onExit }: ModalProps) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	isOpen ? dialogRef.current?.showModal() : dialogRef.current?.close();

	return (
		<dialog ref={dialogRef} className='rounded-md border p-4 shadow-lg md:p-8'>
			<h1 className='mb-2 text-base font-medium md:text-lg'>{title}</h1>
			{children}
			<div className='mt-8 flex justify-end gap-2'>
				<button
					type='button'
					className=' rounded border px-3 py-1 text-sm font-medium'
					onClick={onClose}
				>
					취소
				</button>
				<button
					type='button'
					className=' rounded border border-red-400 bg-red-500 px-3 py-1 text-sm font-medium text-white'
					onClick={onExit}
				>
					나가기
				</button>
			</div>
		</dialog>
	);
};

export default Modal;

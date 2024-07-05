'use client';

import { useRef } from 'react';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title: string;
	children: React.ReactNode;
	confirmButtonText: string;
};

const Modal = ({
	isOpen,
	onClose,
	onConfirm,
	title,
	children,
	confirmButtonText,
}: ModalProps) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	isOpen ? dialogRef.current?.showModal() : dialogRef.current?.close();

	return (
		<dialog ref={dialogRef} className='rounded-md border p-4 shadow-lg md:p-8'>
			<h1 className='mb-2 text-base font-medium md:text-lg'>{title}</h1>
			<div className='mb-4 text-sm leading-relaxed text-slate-600 md:text-base'>
				{children}
			</div>
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
					onClick={onConfirm}
				>
					{confirmButtonText}
				</button>
			</div>
		</dialog>
	);
};

export default Modal;

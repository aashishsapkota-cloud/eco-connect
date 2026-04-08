import { cn } from "../utils/cn"

type ButtonProps = {
    label?: string
    onClick?: () => void
    className?: string
    children?: React.ReactNode
}
export default function Button({ label, onClick, className, children }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn('bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer', className)}
        >
            {children ?? label}
        </button>
    )
}
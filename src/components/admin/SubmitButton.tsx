export default function SubmitButton({ label }: { label: string }) {
    return (
        <button
            type="submit"
            className="m-2 p-5 rounded-2xl outline-none bg-emerald-700"
        >
            {label}
        </button>
    )
}
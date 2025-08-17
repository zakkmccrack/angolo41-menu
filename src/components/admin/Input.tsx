export default function Input({ label, value, onChange, type = "text" }: { label: string; value: string; type?: string; onChange: (value: string) => void; }) {
    return (
        <div className="flex flex-col space-y-1">
            <label className="">{label}</label>
            <input
                type={type}
                placeholder={label}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="focus:border-emerald-500 border m-2 p-5 bg-white/50 rounded-lg outline-none"
            />
        </div>
    )
}
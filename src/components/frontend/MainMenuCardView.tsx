
type Props = {
    label: string

}

export default function MenuCardView({label}: Props) {

    return (
        <div className="min-w-full min-h-full text-center border-b-2 p-4 mb-5 mt-5" >
            <p className="font-extrabold text-5xl text-foreground-red">{label}</p>
        </div>
    )
}

import { Drink } from "@/types/drink"

type Props = {
    drink: Drink
}

export default function CardDrink({ drink }: Props) {
    return (
        <div className="flex flex-row justify-between items-start rounded-2xl shadow-md p-4 bg-green-500">
            <p>{drink.name}</p>
            <p>{drink.description}</p>
            <p>{drink.ingredients}</p>
            <p>{drink.price}</p>
            /*visibility switch*/
            /*delete*/
        </div>
    )
}

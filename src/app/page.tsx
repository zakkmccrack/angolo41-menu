import MenuCardView from "@/components/frontend/MainMenuCardView";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-center text-6xl font-bold text-foreground-red">ANGOLO 41</h1>
      <div className="min-h-full min-w-full flex flex-wrap flex-col justify-around mt-10">
        {/*carta dei drink*/}
        <Link href={"/menu/drinks"}>
          <MenuCardView label="DRINK" />
        </Link>
        {/*carta dei vini*/}
        <Link href={"/menu/wines"}>
          <MenuCardView label="VINI" />
        </Link>
        {/*carta del cibo*/}
        <Link href={"/menu/food"}>
          <MenuCardView label="CIBO" />
        </Link>
      </div>
    </div>
  );
}

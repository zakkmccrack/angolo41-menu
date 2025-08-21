import MenuCardView from "@/components/frontend/MainMenuCardView";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-center text-8xl font-bold text-foreground-red">ANGOLO 41</h1>
      <div className="min-h-full min-w-full flex flex-wrap flex-col justify-around mt-10">
        {/*carta dei drink*/}
        <Link href={"/menu/bevute"}>
          <MenuCardView label="BEVUTE" />
        </Link>
        {/*carta dei vini*/}
        <Link href={"/menu/wines"}>
          <MenuCardView label="VINI IN BOTTIGLIA" />
        </Link>
        {/*carta del cibo*/}
        <Link href={"/menu/food"}>
          <MenuCardView label="CIBO" />
        </Link>
        {/*carta dei gin */}
        <Link href={"/menu/gin"}>
          <MenuCardView label="GIN" />
        </Link>
        {/*carta dei distillati*/}
        <Link href={"/menu/distillati"}>
          <MenuCardView label="DISTILLATI" />
        </Link>
      </div>
    </div>
  );
}

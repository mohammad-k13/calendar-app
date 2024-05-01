import Aside from "@/components/Aside";
import TimeTable from "@/components/Time Table";

export default function Home() {
	return (
		<section className="w-full h-full flex">
			<Aside />
			<TimeTable />
		</section>
	);
}

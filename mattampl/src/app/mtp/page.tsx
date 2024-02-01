import Image from "next/image";
import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import { WebComponent } from "../../../components/WebComponent";
import { Showcase } from "../../../components/Showcase";

export default function Home() {
  return (
	<main className="flex flex-col items-center">



		<div className="justify-between p-4 w-1/2 m-auto">
			<h1 className="text-3xl pb-10">@h1 apaksas piemers1</h1>
		</div>
		<div className="w-1/2 h-1/2 p-1 rounded border bg-gray-50">
			<WebComponent />
		</div>

		<div className="justify-between p-4 w-1/2 m-auto">
			<h2 className="text-2xl pb-10">@h2 apaksas piemers2</h2>
		</div>



		{/*
Ar problemam stradajosi divi
Itka abi divi div veidi stradaja:
		<div className={styles.container}>
		<div className="w-1/2 h-1/3 p-1 rounded border bg-gray-50">
			<Showcase /> 
		</div>

		<div className="justify-between p-4 w-1/2 m-auto">
			<WebComponent />
		</div>

		*/}



	</main>
  );
}

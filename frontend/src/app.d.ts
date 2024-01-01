// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		pb: Pocketbase;
		user: Record | Admin | null;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

type Recipe = {
	id: string;
	name: string;
	slug: string;
	instructions: string;
	image: string;
}
export type Animal = {
	name: string;
	latinName: string;
	photo: string;
	weight: string;
	lifespan: string;
	class: string;
};

export const animals: Animal[] = [
	{
		name: 'Red fox',
		latinName: 'Vulpes vulpes africana',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vulpes_vulpes_ssp_fulvus.jpg/640px-Vulpes_vulpes_ssp_fulvus.jpg',
		weight: '2.2–3.2 kg',
		lifespan: '3-4 years',
		class: 'Mammal'
	},
	{
		name: 'African Elephant',
		latinName: 'Loxodonta africana',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Loxodontacyclotis.jpg/640px-Loxodontacyclotis.jpg',
		weight: '6000 kg',
		lifespan: '60-70 years',
		class: 'Mammal'
	},
	{
		name: 'Bald Eagle',
		latinName: 'Haliaeetus leucocephalus',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg/600px-Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg',
		weight: '4-6.3 kg',
		lifespan: '20-30 years',
		class: 'Bird'
	},
	{
		name: 'King Cobra',
		latinName: 'Ophiophagus hannah',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg/640px-12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg',
		weight: '6 kg',
		lifespan: '20 years',
		class: 'Reptile'
	},
	{
		name: 'Blue Whale',
		latinName: 'Balaenoptera musculus',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg/640px-Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg',
		weight: '190,000 kg',
		lifespan: '80-90 years',
		class: 'Mammal'
	},
	{
		name: 'Emperor Penguin',
		latinName: 'Aptenodytes forsteri',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Penguin_in_Antarctica_jumping_out_of_the_water.jpg/640px-Penguin_in_Antarctica_jumping_out_of_the_water.jpg',
		weight: '23-45 kg',
		lifespan: '15-20 years',
		class: 'Bird'
	},
	{
		name: 'Komodo Dragon',
		latinName: 'Varanus komodoensis',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Komodo_dragon_%28Varanus_komodoensis%29.jpg/609px-Komodo_dragon_%28Varanus_komodoensis%29.jpg',
		weight: '70-90 kg',
		lifespan: '30 years',
		class: 'Reptile'
	},
	{
		name: 'Great White Shark',
		latinName: 'Carcharodon carcharias',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/640px-White_shark.jpg',
		weight: '1100-2500 kg',
		lifespan: '70 years',
		class: 'Fish'
	},
	{
		name: 'Giant Panda',
		latinName: 'Ailuropoda melanoleuca',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/2560px-Grosser_Panda.JPG',
		weight: '70-100 kg',
		lifespan: '20 years',
		class: 'Mammal'
	},
	{
		name: 'Cheetah',
		latinName: 'Acinonyx jubatus',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/640px-Male_cheetah_facing_left_in_South_Africa.jpg',
		weight: '21-72 kg',
		lifespan: '10-12 years',
		class: 'Mammal'
	},
	{
		name: 'Green Anaconda',
		latinName: 'Eunectes murinus',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sucuri_verde.jpg/640px-Sucuri_verde.jpg',
		weight: '30-70 kg',
		lifespan: '10 years',
		class: 'Reptile'
	},
	{
		name: 'Snow Leopard',
		latinName: 'Panthera uncia',
		photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/640px-Irbis4.JPG',
		weight: '22-55 kg',
		lifespan: '10-12 years',
		class: 'Mammal'
	},
	{
		name: 'Harpy Eagle',
		latinName: 'Harpia harpyja',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Harpy_Eagle_with_wings_lifted.jpg/640px-Harpy_Eagle_with_wings_lifted.jpg',
		weight: '4-9 kg',
		lifespan: '25-35 years',
		class: 'Bird'
	},
	{
		name: 'Leatherback Sea Turtle',
		latinName: 'Dermochelys coriacea',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Leatherback_sea_turtle_Tinglar%2C_USVI_%285839996547%29.jpg/640px-Leatherback_sea_turtle_Tinglar%2C_USVI_%285839996547%29.jpg',
		weight: '250-700 kg',
		lifespan: '45 years',
		class: 'Reptile'
	},
	{
		name: 'Orca',
		latinName: 'Orcinus orca',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/640px-Killerwhales_jumping.jpg',
		weight: '3,600-5,400 kg',
		lifespan: '50-80 years',
		class: 'Mammal'
	},
	{
		name: 'Axolotl',
		latinName: 'Ambystoma mexicanum',
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Axolot%27s_head_%28Ambystoma_mexicanum%29.jpg/640px-Axolot%27s_head_%28Ambystoma_mexicanum%29.jpg',
		weight: '60-200 g',
		lifespan: '10-15 years',
		class: 'Amphibian'
	},
	{
		name: 'Goat',
		latinName: 'Messi',
		photo:
			'data:image/jpeg;base64,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',
		weight: '67 kg',
		lifespan: '37 years',
		class: 'Alien'
	},
	{
		name: 'Travis Scott',
		latinName: 'Travis Glob Glob',
		photo:
			'data:image/jpeg;base64,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',
		weight: '60 kg',
		lifespan: '33 years',
		class: 'Fish'
	}
];

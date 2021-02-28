 
// export interface CatalogItem{
// 	id?: string;
// 	name: string;
// 	mediaLink: string;
// 	price: number;
// 	colors: (string)[];
// 	features?: (string)[];//add a created by option here 
// 	created_at?: string;//add a created at and update at timestamp
// 	updated_at?: string;//add a features value
// 	catalog_id?: string;
// 	created_by?: string;
// }


export interface CatalogItem{
	id?: string;
	name: string;
	description?: string
	mediaLink?: string;
	price: number;
	colors: (string)[];
	features?: (string)[];//add a created by option here 
	created_at?: string;//add a created at and update at timestamp
	updated_at?: string;//add a features value
	created_by?: string;
	catalog_id?: string;
	catalog_selected?: boolean;
}


export interface User{
	id?: string;
	name: string;
	subscription?: object;
	template?: object;
	social?: object;
}

export interface UserInput{
	email: string;
	password: string;
}
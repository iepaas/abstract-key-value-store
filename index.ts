export interface AbstractKeyValueStore {
	get(key: string): Promise<string | null>
	getAll(): Promise<Array<{key: string, value: string}>>
	set(key: string, value: string): Promise<void>
	delete(key: string): Promise<void>
}

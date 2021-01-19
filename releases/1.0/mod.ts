export class LazyGetter<T> {
	protected result: T | null = null

	constructor(
		target: { [ key: string ]: any },
		name: string,
		protected callback: () => T
	) {
		Object.defineProperty(target, name, {
			get: (): T => {
				if (this.result === null) this.result = callback()
				return this.result
			}
		})
	}
}
class LG<T> {
	protected result!: T
	constructor(protected fn: () => T) {}
	process(): T {
		if (!this?.result) this.result = this.fn()
		return this.result
	}
}

export function LazyGetter<T>(fn: () => T) {
	const lg = new LG<T>(fn)
	return lg.process.bind(lg)
}
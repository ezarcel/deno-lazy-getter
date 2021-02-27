# Lazy Getter for Deno
This a very simple and straight-forward library used to build a lazy getter, also known as a one-time getter. A lazy getter is a getter that only runs the first time it's called and then it caches the result.

## Usage
```javascript
import { LazyGetter } from 'https://deno.land/x/lazy_getter/mod.ts'

const test = {
	foo: 'bar',
	baz: LazyGetter(() => {
		let a = 2
		for (let i = 0; i < 99999999; i++) { a += (Math.random() * 10000) - 5000 }
		return 1
	})
}

console.log("Start")

let start = performance.now()
console.log(test.baz()) // This will return 1 but it'll take time
console.log(`The first run took ${performance.now() - start}ms`)

start = performance.now()
console.log(test.baz()) // This one will be practically instantaneous
console.log(`The second run took ${performance.now() - start}ms`)
```
# Lazy Getter for Deno
This a very simple and straight-forward library used to build a lazy getter, also known as a one-time getter. A lazy getter is a getter that only runs the first time it's called and then it caches the result.

## Usage
```javascript
import { LazyGetter } from '<url>'

const test = {
	foo: 'bar'
}
new LazyGetter(test, 'baz', () => {
	for (let i = 0; i < 99999; i++) console.log(i)
	return 1
})

test.baz // This will return 1 but it'll take time
test.baz // This one will be practically instantaneous
```
import { $ } from "@qwik.dev/core";
import type { Signal } from "@qwik.dev/core";

export const provideSignalContext = <T>(context: Signal<T>) => ({
	get signal() { return context },
	set$: $((value: T) => { context.value = value }),
});

export const provideStoreContext = <T extends object>(context: T) => ({
	get store() { return context },
	set$: $((updater: Partial<T> | ((state: T) => void)) => {
		if (typeof updater === 'function') {
			updater(context);
		} else {
			for (const key in context) {
				delete context[key];
			}
			if (Array.isArray(context) && Array.isArray(updater)) context.length = 0;
			Object.assign(context, updater);
		}
	}),
});

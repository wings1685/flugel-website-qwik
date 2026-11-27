import { createContextId } from "@qwik.dev/core";
import type { Signal } from "@qwik.dev/core";
import type { Months } from "../lib/shared";

export const navOpened = createContextId<Signal<boolean>>('navOpened');
export const selectedMonth = createContextId<Signal<Months>>('selectedMonth');

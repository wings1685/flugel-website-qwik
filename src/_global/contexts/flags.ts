import { createContextId } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";
import type { Months } from "../lib/shared";

export const navOpened = createContextId<Signal<boolean>>('navOpened');
export const selectedMonth = createContextId<Signal<Months>>('selectedMonth');

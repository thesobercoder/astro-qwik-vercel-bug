import { Slot, component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return <h1><Slot /></h1>;
});
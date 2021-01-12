import { DefineComponent, Plugin } from 'vue';

declare const ThreeSketch: DefineComponent & { install: Exclude<Plugin['install'], undefined> };
export default ThreeSketch;

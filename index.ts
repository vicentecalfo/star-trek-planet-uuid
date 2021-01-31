import { planetList } from './planets';
const s4 = (): string => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
const planet = (): string => planetList[Math.floor(Math.random() * planetList.length) + 0];
export const uuid = (): string => `${s4() + s4()}-${planet()}-${s4() + s4()}`;



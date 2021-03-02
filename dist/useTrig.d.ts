/// <reference types="node" />
interface TrigArgs {
    f: () => void;
    t: number;
}
export default function useTrig(): {
    trig: (t: NodeJS.Timeout | NodeJS.Timeout[] | TrigArgs | TrigArgs[]) => NodeJS.Timeout[];
};
export {};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
;
function useTrig() {
    const timeouts = react_1.useRef([]);
    react_1.useEffect(() => {
        return () => timeouts.current.forEach(clearTimeout);
    }, []);
    return {
        trig: (t) => {
            const values = Array.isArray(t) ? t : [t];
            const newTimeouts = values.map(v => 'f' in v ? setTimeout(v.f, v.t) : v);
            timeouts.current.push(...newTimeouts);
            return newTimeouts;
        },
    };
}
exports.default = useTrig;

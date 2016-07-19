import SetManipulator from './SetManipulator';
const setManipulator = new SetManipulator();

export default setManipulator;
export function union(...args) { setManipulator.union(...args); }
export function difference(...args) { setManipulator.difference(...args); }
export function intersection(...args) { setManipulator.intersection(...args); }
export function complement(...args) { setManipulator.complement(...args); }
export function equals(...args) { setManipulator.equals(...args); }

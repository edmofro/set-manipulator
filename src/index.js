import SetManipulator from './SetManipulator';
const setManipulator = new SetManipulator();

export default setManipulator;
export function union(...args) { return setManipulator.union(...args); }
export function difference(...args) { return setManipulator.difference(...args); }
export function intersection(...args) { return setManipulator.intersection(...args); }
export function complement(...args) { return setManipulator.complement(...args); }
export function equals(...args) { return setManipulator.equals(...args); }

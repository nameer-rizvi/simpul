interface WaveResult {
    index: number;
    value: number;
    range: [number, number];
    trend: [-1 | 0 | 1, -1 | 0 | 1];
    changeNum: [number, number];
    changePerc: [number, number];
    gapNum: number;
    gapPerc: number;
}
declare function wave(array: number[]): WaveResult[];
export default wave;

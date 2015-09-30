declare module Array2D {

    var VERSION: number;

    var AXES: {
        X: number;
        Y: number;
    };

    var BEARINGS: {
        NORTH: number;
        NORTHWEST: number;
        NORTHEAST: number;
        SOUTH: number;
        SOUTHWEST: number;
        SOUTHEAST: number
        EAST: number;
        WEST: number;
    };

    var BOUNDARIES: {
        UPPER: number;
        LOWER: number;
        LEFT: number;
        RIGHT: number;
    };

    var CORNERS: {
        TOP_LEFT: number;
        TOP_RIGHT: number;
        BOTTOM_LEFT: number;
        BOTTOM_RIGHT: number;
    };

    var CROOKS: {
        UPPER_LEFT: number;
        UPPER_RIGHT: number;
        LOWER_LEFT: number;
        LOWER_RIGHT: number;
    };

    var DIRECTIONS: {
        UP: number;
        DOWN: number;
        LEFT: number;
        RIGHT: number;
    };

    var EDGES: {
        TOP: number;
        BOTTOM: number;
        LEFT: number;
        RIGHT: number;
    };

    var QUADRANTS: {
        I: number;
        II: number;
        III: number;
        IV: number;
    };

    function get<T>(grid: T[][], r: number, c: number): T;
    function set<T>(grid: T[][], r: number, c: number, value: T): T;
    function width<T>(grid: T[][]): number;
    function height<T>(grid: T[][]): number;
    function dimensions<T>(grid: T[][]): number[];
    function area<T>(grid: T[][]): number;
    function cells<T>(grid: T[][]): number;
    function crop<T>(grid: T[][], r: number, c: number, w: number, h: number): T[][];
    function harvest<T>(grid: T[][], r: number, c: number, w: number, h: number): T[][];
    function rotate<T>(grid: T[][], direction: number): void;
    function lrotate<T>(grid: T[][]): T[][];
    function rrotate<T>(grid: T[][]): T[][];
    function flip<T>(grid: T[][], axis: number): void;
    function vflip<T>(grid: T[][]): T[][];
    function hflip<T>(grid: T[][]): T[][];
    function pan<T>(grid: T[][], direction: number, steps: number): T[][];
    function upan<T>(grid: T[][], steps: number): T[][];
    function lpan<T>(grid: T[][], steps: number): T[][];
    function dpan<T>(grid: T[][], steps: number): T[][];
    function rpan<T>(grid: T[][], steps: number): T[][];
    function slide<T>(grid: T[][], direction: number, steps: number): T[][];
    function rslide<T>(grid: T[][], steps: number): T[][];
    function lslide<T>(grid: T[][], steps: number): T[][];
    function dslide<T>(grid: T[][], steps: number): T[][];
    function uslide<T>(grid: T[][], steps: number): T[][];
    function transpose<T>(grid: T[][]): T[][];
    function antitranspose<T>(grid: T[][]): T[][];
    function fill<T>(grid: T[][], value: T): T[][];
    function fillArea<T>(grid: T[][], r: number, c: number, w: number, h: number, value: T): T[][];
    function pad<T>(grid: T[][], side: number, times: number, value: T): T[][];
    function upad<T>(grid: T[][], times: number, value: T): T[][];
    function dpad<T>(grid: T[][], times: number, value: T): T[][];
    function lpad<T>(grid: T[][], times: number, value: T): T[][];
    function rpad<T>(grid: T[][], times: number, value: T): T[][];
    function trim<T>(grid: T[][], side: number, num: number): T[][];
    function utrim<T>(grid: T[][], num: number): T[][];
    function dtrim<T>(grid: T[][], num: number): T[][];
    function ltrim<T>(grid: T[][], num: number): T[][];
    function rtrim<T>(grid: T[][], num: number): T[][];
    function stitch<T>(grid1: T[][], grid2: T[][], edge: number): T[][];
    function ustitch<T>(grid1: T[][], grid2: T[][]): T[][];
    function dstitch<T>(grid1: T[][], grid2: T[][]): T[][];
    function lstitch<T>(grid1: T[][], grid2: T[][]): T[][];
    function rstitch<T>(grid1: T[][], grid2: T[][]): T[][];
    function paste<T>(grid1: T[][], grid2: T[][], sr: number, sc: number): T[][];
    function glue<T>(grid1: T[][], grid2: T[][], r: number, c: number): T[][];
    function shuffle<T>(grid: T[][]): T[][];
    function tidy<T>(grid: T[][]): T[][];
    function clone<T>(grid: T[][]): T[][];
    function build<T>(w: number, h: number, value: T): T[][];
    function buildWith<T>(w: number, h: number, fn: (r: number, c: number, partial: T) => void): T[][];
    function serialize<T>(grid: T[][]): string;
    function nullify<T>(grid: T[][]): T[][];
    function integerize<T>(grid: T[][]): T[][];
    function stringize<T>(grid: T[][]): string[][];
    function check(grid: any[][]): boolean;
    function ragged(grid: any[][]): boolean;
    function rectangular(grid: any[][]): boolean;
    function empty(grid: any[][]): boolean;
    function blank(grid: any[][]): boolean;
    function singular(grid: any[][]): boolean;
    function multitudinous(grid: any[][]): boolean;
    function sparse(grid: any[][]): boolean;
    function dense(grid: any[][]): boolean;
    function same(grid: any[][]): boolean;
    function different(grid1: any[][], grid2: any[][]): boolean;
    function diff(grid1: any[][], grid2: any[][]): number[][];
    function contains(grid: any[][], value: any): boolean;
    function includes(grid1: any[][], grid2: any[][]): boolean;
    function symmetrical(grid: any[][], axis: number): boolean;
    function hsymmetrical(grid: any[][]): boolean;
    function vsymmetrical(grid: any[][]): boolean;
    function eachCell<T>(grid: T[][], iterator: (cell: T) => void): void;
    function nthCell<T>(grid: T[][], n: number, s: number, iterator: (cell: T) => void): void;
    function eachRow<T>(grid: T[][], iterator: (row: T[]) => void): void;
    function eachColumn<T>(grid: T[][], iterator: (col: T[]) => void): void;
    function forArea<T>(grid: T[][], r: number, c: number, w: number, h: number, iterator: (cell: T, i: number, j: number, grid: T[][]) => void): void;
    function forRow<T>(grid: T[][], r: number, iterator: (row: T[]) => void): void;
    function forColumn<T>(grid: T[][], c: number, iterator: (col: T[]) => void): void;
    function flatten<T>(grid: T[][]): T[];
    function squash<T>(grid: T[][]): T[];
    function map<T>(grid: T[][], iterator: (cell: T, i: number, j: number, grid: T[][]) => void): T[][];
    function reduce<T>(grid: T[][], iterator: (row: T[], i: number, grid: T[][]) => void): T[];
    function boildown<T>(grid: T[][], iterator: (row: T[], i: number, grid: T[][]) => void): T[];
    function row<T>(grid: T[][], r: number): T[];
    function column<T>(grid: T[][], c: number): T[];
    function top<T>(grid: T[][]): T[];
    function bottom<T>(grid: T[][]): T[];
    function left<T>(grid: T[][]): T[];
    function right<T>(grid: T[][]): T[];
    function widest<T>(grid: T[][]): T[];
    function thinnest<T>(grid: T[][]): T[];
    function tallest<T>(grid: T[][]): T[];
    function shortest<T>(grid: T[][]): T[];
    function setRow<T>(grid: T[][], r: number, array: T[]): T[];
    function setRow<T>(grid: T[][], c: number, array: T[]): T[];
    function fillRow<T>(grid: T[][], r: number, value: T): T[][];
    function fillColumn<T>(grid: T[][], c: number, value: T): T[][];
    function spliceRow<T>(grid: T[][], r: number, array: T[]): T[];
    function spliceColumn<T>(grid: T[][], c: number, array: T[]): T[];
    function deleteRow<T>(grid: T[][], r: number): T[];
    function deleteColumn<T>(grid: T[][], c: number): T[];
    function exists<T>(grid: T[][], r: number, c: number): boolean;
    function occupied<T>(grid: T[][], r: number, c: number): boolean;
    function inBounds<T>(grid: T[][], r: number, c: number): boolean;
    function copy<T>(grid: T[][], r1: number, c1: number, r2: number, c2: number): T[][];
    function move<T>(grid: T[][], r1: number, c1: number, r2: number, c2: number): T[][];
    function swap<T>(grid: T[][], r1: number, c1: number, r2: number, c2: number): T[][];
    function edge<T>(grid: T[][], r: number, c: number): boolean;
    function edges<T>(grid: T[][], r: number, c: number): number[];
    function corner<T>(grid: T[][], r: number, c: number): boolean;
    function corners<T>(grid: T[][], r: number, c: number): number[];
    function boundary<T>(grid: T[][], r: number, c: number): boolean;
    function boundaries<T>(grid: T[][], r: number, c: number): number[];
    function crook<T>(grid: T[][], r: number, c: number): boolean;
    function crooks<T>(grid: T[][], r: number, c: number): number[];
    function center<T>(grid: T[][], r: number, c: number): boolean;
    function interior<T>(grid: T[][], r: number, c: number): boolean;
    function quadrants<T>(grid: T[][], r: number, c: number): number[];
    function orthogonals<T>(grid: T[][], r: number, c: number): T[];
    function diagnonals<T>(grid: T[][], r: number, c: number): T[];
    function neighbors<T>(grid: T[][], r: number, c: number): T[];
    function neighborhood<T>(grid: T[][], r: number, c: number): T[][];
    function euclidean<T>(grid: T[][], r1: number, c1: number, r2: number, c2: number): number;
    function chebyshev<T>(grid: T[][], r1: number, c1: number, r2: number, c2: number): number;
    function manhattan<T>(grid: T[][], r1: number, c1: number, r2: number, c2: number): number;
    function find<T>(grid: T[][], finder: (cell: T, i: number, h: number, grid: T[][]) => void): number[][];
    function contiguous<T>(grid: T[][], finder: (cell: T, i: number, h: number, grid: T[][]) => void, countDiagonals: boolean): number[][];
    function touching<T>(grid: T[][], finder: (cell: T, i: number, h: number, grid: T[][]) => void): number[][];
    function surrounds<T>(grid: T[][], r: number, c: number, allowOutOfBounds: boolean): number[][];
    function fromArray<T>(arr: T[], rows: number, colums: number): T[][];
    function fromCanvas<T>(canvas: HTMLCanvasElement): T[][];
    function toCanvas<T>(grid: T[][], canvas: HTMLCanvasElement, converter: (cell: T, i: number, j: number, grid: T[][]) => T): void;

}

declare module "array2d" {
    export default Array2D;
}
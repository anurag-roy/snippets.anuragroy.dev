declare module 'columns.js' {
  type ColumnsOptions = {
    /**
     * Number of columns
     */
    columns: number;

    /**
     * Responsive settings
     *
     * Each key represents a screen size and each value
     * is corresponding number of columns
     *
     * @example
     * ```txt
     * < 480px             -> 1 column
     * > 480px and < 839px -> 3 columns
     * > 840px             -> 4 columns
     * ```
     */
    breakpoints: Record<number, number>;

    /**
     * Html class added to grid column elements
     */
    column_class?: string;

    /**
     * Choose algorithm used for partitioning elements into columns
     *
     * 'greedy' (default) or 'chronological'
     */
    algorithm: 'greedy' | 'chronological';
  };

  export default class Columns {
    constructor(container: HTMLElement, options: ColumnsOptions);

    public count: () => number;
    public append: (element: HTMLElement) => this;
    public render: () => this;
    public setOptions: (options: Partial<ColumnsOptions>) => void;
  }
}

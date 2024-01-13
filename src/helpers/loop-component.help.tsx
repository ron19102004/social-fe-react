/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children } from "react";

export interface IProps {
  of: any[];
  render: (index: number, value: any) => any;
}
const Each = (args: IProps) =>
  Children.toArray(
    args.of.map((value: object, index: number) => args.render(index, value))
  );
export default Each;

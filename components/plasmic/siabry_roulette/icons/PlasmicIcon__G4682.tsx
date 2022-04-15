// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G4682IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G4682Icon(props: G4682IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 36"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.893 0v16.094h5.402l.809 6.272h-6.211v4.004c0 1.816.504 3.053 3.108 3.053l3.321.002v5.61c-.574.076-2.546.247-4.84.247-4.788 0-8.066-2.923-8.066-8.29v-4.626H0v-6.272h5.416V0h6.477z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default G4682Icon;
/* prettier-ignore-end */

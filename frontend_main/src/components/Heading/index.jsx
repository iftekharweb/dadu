import React from "react";

const sizes = {
  xl: "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
  s: "text-2xl font-bold md:text-[22px]",
  md: "text-[28px] font-bold md:text-[26px] sm:text-2xl",
  xs: "text-base font-bold",
  lg: "text-[32px] font-bold md:text-3xl sm:text-[28px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

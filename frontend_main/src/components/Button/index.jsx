import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[16px]",
  square: "rounded-[0px]",
};
const variants = {
  outline: {
    deep_orange_50: "border-deep_orange-50 border border-solid text-blue_gray-900_02",
  },
  fill: {
    deep_orange_200_01: "bg-deep_orange-200_01 text-blue_gray-900_02",
    deep_orange_200: "bg-deep_orange-200 text-black-900",
    green_200: "bg-green-200 text-black-900",
    light_blue_200: "bg-light_blue-200 text-black-900",
  },
};
const sizes = {
  sm: "h-[40px] pl-[31px] pr-[26px] text-base",
  xs: "h-[32px] px-[18px] text-xs",
  md: "h-[47px] pl-[11px] pr-4 text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "md",
  color = "deep_orange_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer font-righteous ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["sm", "xs", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["deep_orange_50", "deep_orange_200_01", "deep_orange_200", "green_200", "light_blue_200"]),
};

export { Button };

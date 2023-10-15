import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useState } from "react";
import Flex from "../CustomHTML/Flex";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    padding: "0px",
    boxShadow:
      "rgba(0, 0, 0, 0.08) 0px 2px 4px, rgba(0, 0, 0, 0.08) 0px 4px 12px",
    fontSize: "15px",
    fontFamily: "'Udemy Sans', sans-serif",
    maxWidth: 340,
    borderRadius: "0px",
    border: "1px solid #d1d7dc",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "white",
  },
}));
const PopoverTooltip = ({
  children,
  content,
  arrow = true,
  click = false,
  placement = "auto",
  ...args
}: any) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleTooltipOpen = () => {
    if (!click) {
      setTooltipVisible(true);
    }
  };

  const handleTooltipClose = () => {
    
      setTooltipVisible(false);
    
  };
  const handleClickToogle = () => {
    if (click) {
      setTooltipVisible(!isTooltipVisible);
    }
  };

  return (
    <motion.div
      className="cursor-pointer"
      onClick={handleClickToogle}
      onMouseEnter={handleTooltipOpen}
      onMouseLeave={handleTooltipClose}
      {...args}
    >
      <HtmlTooltip
        title={<Flex full className="text-dark-100">{children}</Flex>}
        arrow={arrow}
        placement="bottom-end"
        PopperProps={{
          popperOptions: {
            placement: placement,
          },
        }}
        open={isTooltipVisible}
      >
        {content}
      </HtmlTooltip>
    </motion.div>
  );
};

export default PopoverTooltip;

import Carousel from "better-react-carousel";
import { cn } from "tailwind-cn";
import ArrowLeftWhiteIcon from "../icons/ArrowLeftWhiteIcon";
import ArrowRightWhiteIcon from "../icons/ArrowRightWhiteIcon";
interface Breakpoint {
  breakpoint: number;
  cols: number;
}
const responsiveLayout: Breakpoint[] = [
  {
    breakpoint: 400,
    cols: 1,
  },
  {
    breakpoint: 700,
    cols: 2,
  },
  {
    breakpoint: 980,
    cols: 3,
  },
  {
    breakpoint: 1115,
    cols: 4,
  },
];

const CarruselSimple = ({
  cols = 5,
  layouts = responsiveLayout,
  children,
  rows = 1,
  gap = 15,
  buttonsCenter = false,
  ...args
}: {
  cols?: number;
  layouts?: Breakpoint[];
  children: any;
  buttonsCenter?: boolean;
  rows?: number;
  gap?: number;
}) => {
  return (
    <Carousel
      containerStyle={{
        width: "98vw",
        transform: "translateX(-20px)",
      }}
      responsiveLayout={layouts}
      cols={cols}
      rows={rows}
      gap={gap}
      mobileBreakpoint={150}
      hideArrow={false}
      arrowLeft={
        <button
          className={cn(
            "button-carousel-left",
            buttonsCenter ? "center-btn-carrousel" : ""
          )}
        >
          <ArrowLeftWhiteIcon
            style={{ marginLeft: "6px", marginTop: "7px", scale: "1.2" }}
          />
        </button>
      }
      arrowRight={
        <button
          className={cn(
            "button-carousel-right",
            buttonsCenter ? "center-btn-carrousel" : ""
          )}
        >
          <ArrowRightWhiteIcon scale="1.2" />
        </button>
      }
      {...args}
    >
      {children}
    </Carousel>
  );
};

export default CarruselSimple;
//

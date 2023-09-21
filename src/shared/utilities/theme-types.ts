export interface Theme {
  fonts: {
    fontStackHeadingSerif: string;
    fontStackHeading: string;
    fontStackText: string;
  };
  colors: {
    colorGray600: string;
    colorGray550: string;
    colorGray500: string;
    colorGray400: string;
    colorGray300: string;
    colorGray250: string;
    colorGray200: string;
    colorGray150: string;
    colorGray100: string;
    colorRed500: string;
    colorRed400: string;
    colorRed300: string;
    colorRed250: string;
    colorRed200: string;
    colorRed150: string;
    colorRed100: string;
    colorBlue500: string;
    colorBlue400: string;
    colorBlue300: string;
    colorBlue250: string;
    colorBlue200: string;
    colorBlue150: string;
    colorBlue100: string;
    colorIndigo500: string;
    colorIndigo400: string;
    colorIndigo300: string;
    colorIndigo200: string;
    colorIndigo100: string;
    colorOrange500: string;
    colorOrange400: string;
    colorOrange300: string;
    colorOrange250: string;
    colorOrange200: string;
    colorOrange150: string;
    colorOrange100: string;
    colorYellow500: string;
    colorYellow400: string;
    colorYellow300: string;
    colorYellow250: string;
    colorYellow200: string;
    colorYellow150: string;
    colorYellow100: string;
    colorGreen500: string;
    colorGreen400: string;
    colorGreen300: string;
    colorGreen250: string;
    colorGreen200: string;
    colorGreen150: string;
    colorGreen100: string;
    colorPurple500: string;
    colorPurple400: string;
    colorPurple300: string;
    colorPurple250: string;
    colorPurple200: string;
    colorPurple150: string;
    colorPurple100: string;
    colorWhite: string;
    colorBlack900: string;
    colorBlack800: string;
    colorBlack700: string;
    colorBlack600: string;
    colorBlack500: string;
    colorBlack400: string;
    colorBlack300: string;
    colorBlack200: string;
    colorBlack100: string;
  };
}

export interface StyledDivProps {
  theme: Theme; // Tipo del tema
}

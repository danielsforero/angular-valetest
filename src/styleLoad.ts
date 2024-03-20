import { LookAndFeelModel } from "./core/models/urlToProgram.model";

export interface IMappedTheme {
  [key: string]: string | null;
}

export const applyTheme = (theme: LookAndFeelModel): void => {
  if (!theme) return;

  theme = extend(theme);
  const themeObject: IMappedTheme = mapTheme(theme);
  if (!themeObject) return;

  const root = document.documentElement;
  Object.keys(themeObject).forEach((property) => {
    if (property === "name" || property === null) {
      return;
    }
    root.style.setProperty(property, themeObject[property]);
  });
};


export const mapTheme = (variables: LookAndFeelModel): IMappedTheme => {
  // return {
  //   "--ngx-valepro-color-primary": variables.primaryColor,
  //   "--ngx-valepro-color-secondary": variables.secondaryColor,
  //   "--ngx-valepro-color-tertiary": variables.tertiaryColor,
  //   "--ngx-valepro-color-background": variables.backgroudColor,
  //   "--imagen-background-login": `url(${variables.imageBackgroundLogin})`,
  // };
  return {
    "--ngx-color-primary": variables.primaryColor,
    "--ngx-color-secondary": variables.secondaryColor,
    "--ngx-color-tertiary": variables.tertiaryColor,
    "--ngx-valepro-color-background": variables.backgroudColor,
    "--imagen-background-login": `url(${variables.imageBackgroundLogin})`,
  };
};


export const extend = (newTheme: LookAndFeelModel): LookAndFeelModel => {
  return { ...newTheme };
};

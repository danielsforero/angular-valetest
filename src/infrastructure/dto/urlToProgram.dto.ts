export interface UrlToProgramDto {
  lookAndFeel: LookAndFeelDto
}

export interface LookAndFeelDto {
  lookAndFeelId: number;
  imageBackgroundLogin: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  background: string;
  fontFamilyName: string;
  useBigBackground: boolean
}

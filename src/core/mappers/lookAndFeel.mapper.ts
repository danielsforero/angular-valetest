import { UrlToProgramDto } from "../../infrastructure/dto/urlToProgram.dto";
import { LookAndFeelModel, UrlToProgramModel } from "../models/urlToProgram.model";

export class LookAndFeelMapper {

  static programApiToDomain(programDto: UrlToProgramDto): UrlToProgramModel {
    return new UrlToProgramModel(
      new LookAndFeelModel(
        programDto.lookAndFeel.lookAndFeelId,
        programDto.lookAndFeel.imageBackgroundLogin,
        programDto.lookAndFeel.primaryColor,
        programDto.lookAndFeel.secondaryColor,
        programDto.lookAndFeel.tertiaryColor,
        programDto.lookAndFeel.background,
        programDto.lookAndFeel.fontFamilyName
      )
    );
  }

}

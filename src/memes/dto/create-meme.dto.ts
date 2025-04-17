import { IsInt, IsString, IsUrl, Length, Max, Min } from 'class-validator';

export class CreateMemeDto {
  @IsString()
  @Length(3, 100)
  title: string;

  @IsUrl({ require_protocol: true }, { message: 'Invalid image URL' })
  image_url: string;

  @IsUrl({ require_protocol: true }, { message: 'Invalid link URL' })
  link: string;

  @IsInt()
  @Min(0)
  likes: number;
}

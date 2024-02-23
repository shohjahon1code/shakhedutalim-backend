import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { InstructorApplyDto } from './dto/instructor.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @HttpCode(200)
  @ApiTags('instructor')
  @Post('apply')
  async applyAsInstructor(@Body() dto: InstructorApplyDto) {
    return this.instructorService.applyAsInstructor(dto);
  }
}

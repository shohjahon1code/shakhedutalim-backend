import { Body, Controller, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CourseBodyDto } from './dto/course.dto';
import { CourseService } from './course.service';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/user/decorators/user.decorator';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @HttpCode(200)
  @Post('create')
  @ApiTags('Course')
  @Auth('INSTRUCTOR')
  async createCourse(@Body() dto: CourseBodyDto, @User('_id') _id: string) {
    return this.courseService.createCourse(dto, _id);
  }

  @HttpCode(200)
  @Patch('edit/:courseId')
  @ApiTags('Course')
  @Auth('INSTRUCTOR')
  async updateCourse(
    @Body() dto: CourseBodyDto,
    @Param('courseId') courseId: string,
  ) {
    return this.courseService.editCourse(dto, courseId);
  }
}

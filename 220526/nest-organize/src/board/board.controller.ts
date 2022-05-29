import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardStatus } from './board.status.enum';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create.board.dto';
import { BoardStatusValidationPipe } from './pipe/board-status-validation.pipe.dot';
import { Board } from './board.entity';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) { }
  // //private 선언시 암묵적으로 프로퍼티로 선언된다0.

  // @Get()
  // getAllBoard(): Board[] {
  //   return this.boardService.getAllBoards();
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // //ValidationPipe 유효성 검사해주는 파이프
  // createBoard(
  //   @Body() createBoardDto: CreateBoardDto
  // ): Board {
  //   return this.boardService.createBoard(createBoardDto)
  // }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardService.getBoardById(id)
  // }

  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardService.deleteBoard(id);
  // }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus
  // ) {
  //   return this.boardService.updateBoardStatus(id, status);
  // }
}

import { Controller, Get } from '@nestjs/common';
import { Board } from './board.model';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) { }
  //private 선언시 암묵적으로 프로퍼티로 선언된다0.

  @Get()
  getAllBoard(): Board[] {
    return this.boardService.getAllBoards();
  }
}

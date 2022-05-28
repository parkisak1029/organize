import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create.board.dto';

@Injectable()
export class BoardService {
  private board: Board[] = [];

  getAllBoards(): Board[] {
    return this.board;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto
    const board: Board = {
      id: uuid(), // uuid module은 unique한 값을 넣어줌
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.board.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.board.find((board) => board.id === id)
  }
}

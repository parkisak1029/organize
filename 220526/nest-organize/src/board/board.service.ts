import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardService {
  private board: Board[] = [];

  getAllBoards(): Board[] {
    return this.board;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(), // uuid module은 unique한 값을 넣어줌
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.board.push(board);
    return board;
  }
}

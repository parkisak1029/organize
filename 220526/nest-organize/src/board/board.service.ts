import { Injectable, NotFoundException } from '@nestjs/common';
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
    const found = this.board.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException('id값이 틀림');
    }
    return found;
  }

  deleteBoard(id: string): void {
    const found = this.getBoardById(id);
    this.board = this.board.filter((board) => board.id !== found.id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}

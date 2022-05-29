import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board.status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create.board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) { }
  // getAllBoards(): Board[] {
  //   return this.board;
  // }

  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto
  //   const board: Board = {
  //     id: uuid(), // uuid module은 unique한 값을 넣어줌
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };

  //   this.board.push(board);
  //   return board;
  // }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC
    })

    await this.boardRepository.save(board);
    return board;
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`notFound ${id}`)
    }

    return found;
  }

  // getBoardById(id: string): Board {
  //   const found = this.board.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException('id값이 틀림');
  //   }
  //   return found;
  // }

  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.board = this.board.filter((board) => board.id !== found.id);
  // }

  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}

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

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find()
  }

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

  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
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

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id)
    if (result.affected === 0) {
      throw new NotFoundException(`can't not ${id}`)
    }
    console.log('result', result)
  }

  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.board = this.board.filter((board) => board.id !== found.id);
  // }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board)
    return board;
  }

  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }

}

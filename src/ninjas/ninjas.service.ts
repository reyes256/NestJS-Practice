import { Body, Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

let ninjas = [
  {
    id: 1,
    name: "Okumashu",
    weapon: "kunais"
  },
  {
    id: 2,
    name: "Sarutobi",
    weapon: "Katana"
  },
  {
    id: 3,
    name: "Nikamaru",
    weapon: "AR-15"
  },
]

@Injectable()
export class NinjasService {
  create(createNinjaDto: CreateNinjaDto) {
    let newNinja = {
      id: Date.now(),
      ...createNinjaDto
    }

    ninjas.push(newNinja);
    return {ninjaCreated: newNinja};
  }

  findAll() {
    return ninjas;
  }

  findOne(id: number) {
    // return `This action returns a #${id} ninja`;
    const ninja = ninjas.find(ninja => ninja.id === id)

    if(!ninja){
      return 'Ninja not found'
    }

    return ninja;
  }

  update(id: number, updateNinjaDto: UpdateNinjaDto) {
    return `This action updates a #${id} ninja`;
  }

  remove(id: number) {
    const toBeRemoved = this.findOne(id);

    ninjas = ninjas.filter((ninja) => ninja.id !== id)

    return {toBeRemoved};
  }
}

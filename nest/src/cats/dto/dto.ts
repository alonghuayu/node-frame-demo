export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class UpdateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class ListAllEntities {
  readonly limit: number;
  readonly offset: number;
}

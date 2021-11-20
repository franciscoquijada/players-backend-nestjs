export class PaginationDto {
  data: [];
  total: number;
  page: number;

  constructor(data, total, page) {
    this.data = data;
    this.total = total;
    this.page = page;
  }
}

import { ResolveFn } from "@angular/router";
import { Author } from "../interfaces";
import { inject } from "@angular/core";
import { AuthorService } from "../services/author.service";

export const authorsResolver: ResolveFn<Author> = () => {
  return inject(AuthorService).getAll$()
}

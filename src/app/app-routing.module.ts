import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaCreateComponent } from "./components/views/categorias/categoria-create/categoria-create.component";
import { CategoriaDeleteComponent } from "./components/views/categorias/categoria-delete/categoria-delete.component";
import { CategoriaReadComponent } from "./components/views/categorias/categoria-read/categoria-read.component";
import { CategoriaUpdateComponent } from "./components/views/categorias/categoria-update/categoria-update.component";
import { HomeComponent } from "./components/views/home/home.component";
import { LivroReadAllComponent } from "./components/views/livros/livro-read-all/livro-read-all.component";
import { LivroCreateComponent } from "./components/views/livros/livro-create/livro-create.component";
import { LivroUpdateComponent } from "./components/views/livros/livro-update/livro-update.component";
import { LivroDeleteComponent } from "./components/views/livros/livro-delete/livro-delete.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "categorias",
    component: CategoriaReadComponent,
  },

  {
    path: "categorias/create",
    component: CategoriaCreateComponent,
  },
  {
    path: "categorias/delete/:id",
    component: CategoriaDeleteComponent,
  },
  {
    path: "categorias/update/:id",
    component: CategoriaUpdateComponent,
  },
  {
    path: "categorias/:id_cat/livros",
    component: LivroReadAllComponent,
  },
  {
    path: "categorias/:id_cat/livros/create",
    component: LivroCreateComponent,
  },
  {
    path: "categorias/:id_cat/livros/:id/update",
    component: LivroUpdateComponent,
  },
  {
    path: "categorias/:id_cat/livros/:id/delete",
    component: LivroDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

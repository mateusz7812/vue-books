import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import BooksPage from "@/views/BooksPage.vue";
import BookAddingPage from "@/views/BookAddingPage.vue";
import BookEditingPage from "@/views/BookEditingPage.vue";
import BookDetailsPage from "@/views/BookDetailsPage.vue";
import AuthorsPage from "@/views/AuthorsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/books",
    name: "Books",
    component: BooksPage,
  },
  {
    path: "/books/new",
    name: "New Book",
    component: BookAddingPage,
  },
  {
    path: "/books/:id",
    name: "Book Details",
    component: BookDetailsPage,
  },  
  {
    path: "/books/:id/edit",
    name: "Book Edit",
    component: BookEditingPage,
  },
  {
    path: "/authors",
    name: "Authors",
    component: AuthorsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
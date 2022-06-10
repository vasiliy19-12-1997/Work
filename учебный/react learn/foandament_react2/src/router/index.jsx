import About from "../pages/About"
import Posts from "../pages/Posts"
import PostIdPage from "../pages/PostIdPage"
export const routes = [
    {path: '/about' , component: About},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostIdPage},
]


import { Outlet, NavLink, ScrollRestoration, Link } from "react-router-dom"

export default function RootLayout() {
    return (
      <section className="font-montserrat bg-graybg">
        <ScrollRestoration />
        <header>
          <nav className="h-16 flex items-center max-md:ml-0 max-2xl:ml-20 max-md:flex max-md:justify-center max-container">
            <NavLink className="text-primary text-[24px] font-bold max-md:text-[18px]" to="/">Dandelion #3814</NavLink>
          </nav>
        </header>
        
        <main className="max-2xl:mx-20  max-container">
            <nav className=" max-md:ml-0 max-md:flex max-md:justify-center flex mt-8 mb-8 max-sm:h-[34px] max-sm:text-[12px]">
                <NavLink className="bg-primary text-white rounded-sm py-2 px-4 max-sm:flex max-sm:items-center  hover:bg-secondary" to="/">Товары</NavLink>
                <NavLink className="rounded-sm py-2 px-4 max-sm:flex max-sm:items-center border border-primary text-primary hover:text-secondary" to="how-to-use">Как принимать?</NavLink>
            </nav>
          <Outlet />
        </main>
  
        <footer className="bg-primary h-28 mt-20 flex justify-evenly items-center flex-grow-1 max-sm:flex-col">
          <a className="text-white sm:text-xl text-md" href="https://office.dandelion.club/signup?ref=0lbU4a8koN" target="_blank">Зарегистрироваться в Dandelion</a>
          <a className="text-white sm:text-xl" href="https://wa.me/+77075520855" target="_blank">+7 707 552 0855</a>
        </footer>
      </section>
    )
  }
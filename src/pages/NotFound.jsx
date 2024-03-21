import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="h-[500px] flex justify-center items-center flex-col gap-10 mb-[134px]">
      <h2 className="md:text-4xl text-2xl">Страница не найдена!</h2>
      <p className="text-2xl">Вернутьcя на <NavLink to="/" className="underline">Главную</NavLink>.</p>
    </section>
  )
}

export default NotFound
import Car from "@/components/Car"
import DishCardGrid from "@/components/DishCardGrid"
import DishTabs from "@/components/DishTabs"
import Header from "@/components/Header"
import Payment from "@/components/Payment"


function Home() {
  return (
    <main className="text-white lg:pl-28 grid grid-cols-1 lg:grid-cols-8 pb-16 lg:pb-0">
      <div className="lg:col-span-5 xl:col-span-6 p-6">
        <Header />
        <DishTabs />
        {/* <DishCardGrid /> */}
      </div>
      <Car />

    </main>
  )
}

export default Home
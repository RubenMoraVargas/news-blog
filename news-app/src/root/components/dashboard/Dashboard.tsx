import React from "react";
import NewItem,{NewItemProps} from "@/root/components/newItem/NewItem"

interface DashboardProps { 
  features: NewItemProps[];
}

function Dashboard(props: DashboardProps) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
             UNA News
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Demo site for Programación IV
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {props.features.map((feature) => (
            <NewItem
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div> 
      </div>
    </section>
  );
}

export default Dashboard;

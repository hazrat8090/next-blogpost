import React from "react";
import { data } from "./userData";

const Users = () => {
  return (
    <div>
      <h1>this is the Users Page</h1>
      {data.map((item) => {
        return (
          <div key={item.id} className="mt-5 font-semibold from-neutral-500">
            <p>
              {item.name} {item.last_name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;

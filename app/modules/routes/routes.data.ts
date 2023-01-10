import { IExcludedPaths } from "../../utility/authorize";
import { authRouter } from "../auth/auth.routes";
import { customerRouter } from "../customer/customer.routes";
import { furnaceRouter } from "../furnace/furnace.routes";
import { hsnRouter } from "../hsn/hsn.routes";
import { materialRouter } from "../material/material.routes";
import { orderRouter } from "../order/order.routes";
import { storageRouter } from "../storage/storage.routes"
import { unitsRouter } from "../unit/unit.routes";
import { userRouter } from "../user/user.routes";

import { Route, Routes } from "./routes.types";

export const routes: Routes = [
  new Route("/furnace", furnaceRouter),
  new Route("/storage", storageRouter),
  new Route("/unit", unitsRouter),
  new Route("/material", materialRouter),
  new Route("/hsn", hsnRouter),
  new Route("/customer", customerRouter),
  new Route("/order", orderRouter),
  new Route("/auth", authRouter),
  new Route("/user", userRouter)
];

export const excludedPaths: IExcludedPaths[] = [
  { path: '/auth/login', method: "POST" },
  { path: '/auth/change-password/', method: "PUT" },
]

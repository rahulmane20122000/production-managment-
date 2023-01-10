"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPaths = exports.routes = void 0;
const auth_routes_1 = require("../auth/auth.routes");
const customer_routes_1 = require("../customer/customer.routes");
const furnace_routes_1 = require("../furnace/furnace.routes");
const hsn_routes_1 = require("../hsn/hsn.routes");
const material_routes_1 = require("../material/material.routes");
const order_routes_1 = require("../order/order.routes");
const storage_routes_1 = require("../storage/storage.routes");
const unit_routes_1 = require("../unit/unit.routes");
const user_routes_1 = require("../user/user.routes");
const routes_types_1 = require("./routes.types");
exports.routes = [
    new routes_types_1.Route("/furnace", furnace_routes_1.furnaceRouter),
    new routes_types_1.Route("/storage", storage_routes_1.storageRouter),
    new routes_types_1.Route("/unit", unit_routes_1.unitsRouter),
    new routes_types_1.Route("/material", material_routes_1.materialRouter),
    new routes_types_1.Route("/hsn", hsn_routes_1.hsnRouter),
    new routes_types_1.Route("/customer", customer_routes_1.customerRouter),
    new routes_types_1.Route("/order", order_routes_1.orderRouter),
    new routes_types_1.Route("/auth", auth_routes_1.authRouter),
    new routes_types_1.Route("/user", user_routes_1.userRouter)
];
exports.excludedPaths = [
    { path: '/auth/login', method: "POST" },
];
//# sourceMappingURL=routes.data.js.map
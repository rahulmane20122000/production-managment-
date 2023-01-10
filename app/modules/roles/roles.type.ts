export type RoleName = "ACCOUNTANT" | "ADMIN" | "CLERK";


export class Role {
  constructor(public id: string, public name: RoleName) {}
}

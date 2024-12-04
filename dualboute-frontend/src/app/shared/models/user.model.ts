export class User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;

  constructor(id: number, email: string, first_name: string, last_name: string) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
  }

  get fullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }
}

export interface LoginData {
  email: string;
  password: string;
}
export interface LoginResponse{
  auth_token: string;
}

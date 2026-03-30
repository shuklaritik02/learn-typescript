type User = {
  id: string;
  email: string;
};

type Auth = {
  token: string;
  isLoggedIn: boolean;
};

type AuthUser = User & Auth;

const currentUser: AuthUser = {
  id: "123",
  email: "test@gmail.com",
  token: "abc123",
  isLoggedIn: true
};

type Data = {
  name: string;
};

type ApiMeta = {
  status: number;
  message: string;
};

type ApiResponse = Data & ApiMeta;

const res: ApiResponse = {
  name: "Ritik",
  status: 200,
  message: "Success"
};

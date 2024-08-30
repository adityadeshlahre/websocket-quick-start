import { User, UserSchema } from "@repo/types/src/index";
import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = UserSchema.safeParse({ name, email, password });

    if (!result.success) {
      console.error(result.error.errors);
      return;
    }

    const user: User = result.data;

    axios
      .post("http://localhost:3000/user", {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .then(() => {
        console.log(user);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

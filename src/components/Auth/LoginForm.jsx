// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';

import { Link } from "../ui/Link";
import { Box, Input, Label, Title } from "./RegisterForm.styled";


export const LoginForm = () => {
//   const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };

    return (
        <Box>
            <Title>авторизація</Title>
    <form onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Email
        <Input type="email" name="email" />
      </Label>
      <Label >
        Пароль
        <Input type="password" name="password" />
          </Label>

          <div> Нет аккаунта? <Link to="/register">Зареєструватися</Link> </div>
          
        <button type="submit">Увійти</button>
            </form>
            </Box>
  );
};

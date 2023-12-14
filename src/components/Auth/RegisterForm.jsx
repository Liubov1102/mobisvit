// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';

import { Link } from '../ui/Link';
import { Box, Input, Label, Title } from './RegisterForm.styled';

export const RegisterForm = () => {
//   const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   register({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };

  return (
    <Box>
    <Title>Реєстрація</Title>
    <form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Ім'я користувача
        <Input type="text" name="name" />
      </Label>
      <Label >
        Email - Електронна пошта
        <Input type="email" name="email" />
      </Label>
      <Label >
        Пароль
        <Input type="password" name="password" />
        </Label>
        
        <div> Я вже зареєстрований <Link to="/login">Увійти</Link> </div>
                        
        <button type="submit">Реєстрація</button>
      </form>
      
      </Box>
  );
};

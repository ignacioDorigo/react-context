import React, { useContext } from "react";
import "./LoginForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";

const Button = styled.button`
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  background-color: #db7093;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c71585;
  }
`;

const Label = styled.label``;

const Input = styled.input``;

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Debe tener formato email")
        .required("El correo es obligatorio"),
      password: Yup.string().required("El password es obligatorio"),
    }),
    onSubmit: async (formulario) => {
      try {
        console.log(formulario);
        login(formulario.email);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <h1 className="form__titulo">Login</h1>
      <div className="div__campos">
        <div className="div__campo">
          <Label className="form__label" htmlFor="email">
            Email
          </Label>
          <Input
            className="form__input"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Correo electronico"
            type="email"
          ></Input>
          {formik.errors.email && formik.touched.email ? (
            <div className="form__errors">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="div__campo">
          <Label className="form__label" htmlFor="password">
            Password
          </Label>
          <Input
            className="form__input"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            type="password"
          ></Input>
          {formik.errors.password && formik.touched.password ? (
            <div className="form__errors">{formik.errors.password}</div>
          ) : null}
        </div>
      </div>
      <Button type="submit">Enviar</Button>
    </form>
  );
}

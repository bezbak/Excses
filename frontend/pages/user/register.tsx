import React from "react";
import UserAnimation from "@/components/Layout/UserAnimation";
import Link from "next/link";
import Image from "next/image";
import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Box,
  Divider,
  Alert,
} from "@mui/material";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { DarkButton } from "@/components/UI/DarkButton";
import { useForm } from "react-hook-form";
import { Registrvalidations } from "@/utils/forms/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateUserDto } from "@/utils/api/types";
import { userApi } from "@/utils/api";
import { setCookie } from "nookies";


import whatsapp from '@assets/icons/whatsap.svg'
import telega from '@assets/icons/telega.png'
import google from '@assets/icons/google_ic.svg'

function Registration() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordCopy, setShowPasswordCopy] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("")

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordCopy = () => setShowPasswordCopy((show) => !show);

  const handleMouseDownPassword = (event: any) => {event.preventDefault()};

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(Registrvalidations),
  });


  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await userApi.register(dto);
      setCookie(null, "authToken", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } catch (err) {
      console.log( "ошибка", err);
      setErrorMessage("Такой email уже существует!")
    }
  };

  return (
    <div className="user max-w-[1200px] m-auto flex items-center">
      <UserAnimation />
      <div className="text-center max-h-[700px] md:w-6/12 w-full">
        <div className="registration px-5">
          <Typography
            variant="h2"
            sx={{
              color: "primary.main",
              fontSize: { xs: 24, md: 24, lg: 24, xl: 36 },
              whiteSpace: "nowrap",
            }}
          >
            Привет, <br />
            зарегистрируйтесь для начала
          </Typography>

          <Box sx={{ mx: "auto", maxWidth: 400, width: "100%" }}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <TextField
                {...form.register("fullName")}
                type="text"
                sx={{ mt: "40px" }}
                fullWidth
                id="outlned-adornment"
                label="Имя пользователя"
                helperText={form.formState.errors.fullName?.message}
                error={!!form.formState.errors.fullName?.message}
              />

              <TextField
                {...form.register("email")}
                type="email"
                sx={{ my: 2 }}
                fullWidth
                id="outlied-adornmento"
                label="Email"
                helperText={form.formState.errors.email?.message}
                error={!!form.formState.errors.email?.message}
              />

              <TextField
                {...form.register("password")}
                variant="outlined"
                id="outlind-adornment-password"
                fullWidth
                sx={{ mb: 2 }}
                type={showPassword ? "text" : "password"}
                label="Пароль"
                helperText={form.formState.errors.password?.message}
                error={!!form.formState.errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" id="pass">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VscEye /> : <VscEyeClosed />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                {...form.register("confirmPassword")}
                id="outline-adornment-passwordCopy"
                type={showPasswordCopy ? "text" : "password"}
                label="Подтверждение пароля"
                helperText={form.formState.errors.confirmPassword?.message}
                error={!!form.formState.errors.confirmPassword?.message}
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" id="passcopy">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPasswordCopy}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPasswordCopy ? <VscEye /> : <VscEyeClosed />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
                {errorMessage && <Alert className="mt-[15px]"  severity="error">{errorMessage}</Alert>}
              <DarkButton
                disabled={
                  !form.formState.isValid || form.formState.isSubmitting
                }
                variant="contained"
                type="submit"
                className="dark-button"
                sx={{
                  my: 2,
                  width: "100%",
                  bgcolor: "#1E232C",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "white",
                  borderRadius: 2,
                }}
              >
                Войти
              </DarkButton>
            </form>

            <Divider>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "secondary.main",
                  fontWeight: 600,
                  px: 5,
                }}
              >
                или
              </Typography>
            </Divider>

            <Box sx={{ display: "flex" }}>
              <Button
                variant="outlined"
                sx={{
                  height: "52px",
                  width: "100%",
                  mr: 1,
                  mt: 2.5,
                  borderRadius: 2,
                }}
              >
                <Image src={whatsapp} alt="" width={30}></Image>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  height: "52px",
                  width: "100%",
                  mr: 1,
                  mt: 2.5,
                  borderRadius: 2,
                }}
              >
               <Image src={google} alt="" width={30}></Image>
              </Button>
              <Button
                variant="outlined"
                sx={{ height: "52px", width: "100%", mt: 2.5, borderRadius: 2 }}
              >
               <Image src={telega} alt="" width={30}></Image>
              </Button>
            </Box>

            <Typography sx={{ mt: 2, fontSize: "18px" }}>
              У вас уже есть аккаунт?{" "}
              <Link href="/user/login" className="font-bold text-info">
                Войти сейчас
              </Link>
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Registration;

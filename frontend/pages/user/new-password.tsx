import React from 'react';
import UserAnimation from '@/components/Layout/UserAnimation';
import Link from "next/link";
import { Typography, TextField, InputAdornment, IconButton, Box} from "@mui/material";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { DarkButton } from '@/components/UI/DarkButton';
import { useForm } from 'react-hook-form';
import { PasswordValidations } from '@/utils/forms/validations';
import { yupResolver } from '@hookform/resolvers/yup';


interface SuccessProps {
  title:string;
  isOpen:boolean;
  onClose: () => void;
}

function Success({title, isOpen, onClose}:SuccessProps) {
  
  return(
  <>{
    isOpen && 
    <div className='absolute w-full h-full bg-white opacity-100 z-50 flex flex-col items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" className='block m-auto' width="200" height="200" viewBox="0 0 200 200" fill="none">
        <g clip-path="url(#clip0_124_2951)">
          <path d="M192.961 99.9959C196.05 96.399 198.215 92.1029 199.267 87.4801C200.32 82.8573 200.228 78.0476 199.001 73.4681C197.774 68.8886 195.448 64.6777 192.225 61.2006C189.002 57.7236 184.979 55.0854 180.506 53.515C181.382 48.8555 181.109 44.0524 179.709 39.5226C178.309 34.9928 175.824 30.873 172.472 27.5206C169.119 24.1682 164.999 21.6846 160.469 20.2851C155.939 18.8856 151.136 18.6126 146.476 19.4897C144.907 15.0152 142.269 10.9914 138.792 7.76765C135.315 4.54385 131.104 2.2175 126.524 0.990579C121.943 -0.236345 117.133 -0.326758 112.51 0.72719C107.887 1.78114 103.591 3.94759 99.9953 7.03845C96.3985 3.94972 92.1023 1.78522 87.4796 0.732726C82.8568 -0.319766 78.047 -0.228463 73.4675 0.998713C68.888 2.22589 64.6771 4.55187 61.2001 7.77489C57.723 10.9979 55.0849 15.0206 53.5145 19.494C48.8552 18.6183 44.0527 18.8926 39.5234 20.293C34.9942 21.6934 30.875 24.1777 27.5232 27.5304C24.1714 30.8831 21.6881 35.0029 20.2889 39.5325C18.8896 44.0621 18.6166 48.8647 19.4935 53.5237C15.02 55.0941 10.9973 57.7322 7.77431 61.2093C4.5513 64.6863 2.2253 68.8973 0.998125 73.4768C-0.229051 78.0562 -0.320368 82.866 0.732124 87.4888C1.78462 92.1115 3.94916 96.4077 7.03789 100.005C3.94822 103.601 1.78301 107.898 0.73022 112.521C-0.322572 117.144 -0.231175 121.955 0.996538 126.535C2.22425 131.114 4.55115 135.325 7.77527 138.802C10.9994 142.279 15.0233 144.916 19.4978 146.485C18.6202 151.145 18.8929 155.948 20.2923 160.477C21.6918 165.007 24.1756 169.127 27.5283 172.479C30.881 175.831 35.0011 178.315 39.5311 179.714C44.0611 181.113 48.8641 181.385 53.5231 180.506C55.0935 184.98 57.7317 189.003 61.2087 192.226C64.6858 195.449 68.8967 197.775 73.4762 199.002C78.0557 200.229 82.8654 200.32 87.4882 199.268C92.111 198.215 96.4072 196.051 100.004 192.962C103.601 196.052 107.897 198.217 112.521 199.27C117.144 200.322 121.954 200.231 126.534 199.003C131.114 197.776 135.325 195.449 138.802 192.225C142.278 189 144.916 184.977 146.485 180.502C151.144 181.379 155.947 181.107 160.477 179.707C165.007 178.308 169.127 175.824 172.479 172.471C175.832 169.119 178.316 164.999 179.715 160.469C181.115 155.939 181.388 151.136 180.51 146.477C184.984 144.907 189.007 142.269 192.23 138.791C195.453 135.314 197.779 131.103 199.006 126.523C200.233 121.943 200.324 117.133 199.27 112.511C198.217 107.888 196.051 103.592 192.961 99.9959Z" fill="#18C07A"/>
          <path d="M82.0489 138.169L54.26 110.397C53.2054 109.341 52.613 107.909 52.613 106.416C52.613 104.924 53.2054 103.492 54.26 102.436L57.6362 99.0552C58.6925 98.0006 60.1241 97.4083 61.6168 97.4083C63.1095 97.4083 64.5412 98.0006 65.5975 99.0552L85.7977 119.242L133.371 68.6877C134.394 67.6016 135.807 66.966 137.299 66.9205C138.791 66.875 140.24 67.4233 141.328 68.445L144.795 71.7171C145.882 72.7409 146.519 74.1546 146.564 75.6475C146.61 77.1404 146.061 78.5903 145.038 79.6784L90.1446 138.043C89.6278 138.594 89.0054 139.035 88.3146 139.34C87.6238 139.646 86.8786 139.809 86.1234 139.821C85.3681 139.833 84.6182 139.693 83.9183 139.409C83.2183 139.125 82.5826 138.703 82.0489 138.169Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_124_2951">
            <rect width="200" height="200" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <Typography textAlign='center' variant="h1" color="initial">Пароль изменен</Typography>
      <Typography  textAlign='center' color="gray" variant="body1" >Ваш пароль успешно изменен</Typography>
      <DarkButton
                className='dark-button'
                sx={{ maxWidth: "400px",textAlign:'center', mt:10, mb:20 }}
                onClick={onClose}
              >
                Продолжить
              </DarkButton>

    </div>
    }</>
  )
}


function NewPassword() {
  const [isSuccesfull, setIsSuccessfull ] = React.useState(false)
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(PasswordValidations),
  });
  const onSubmit = (data:object) => {
    
    
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordCopy, setShowPasswordCopy] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleClickShowPasswordCopy = () => setShowPasswordCopy((show) => !show);
  
  return (
    <div className='user max-w-[1200px] m-auto flex items-center'>
      <Success isOpen={isSuccesfull} title="" onClose={() => setIsSuccessfull(false)} />
      <UserAnimation />
      <div className="text-center max-h-[650px] h-min md:w-6/12 w-full">
        <div className=" px-5">
          <Typography variant="h2" sx={{ color: "primary.main", fontSize: { xs: 28, md: 32, lg: 36, xl: 40 } }}>
            Создайте новый пароль
          </Typography>

          <Box sx={{ mx: "auto", maxWidth: 400, width: "100%" }}>
            <Typography sx={{ color: "secondary.main", fontSize:20, textAlign: "left", mt: 2.5,mb:5 }}>
              Новый пароль должен быть более надежным предыдущего
            </Typography>
            <form onSubmit={form.handleSubmit(onSubmit)}>
 

              <TextField
                {...form.register('password')}
                variant="outlined"
                id="outlined-adornment-password"
                fullWidth
                sx={{mb: 2}}
                type={showPassword ? 'text' : 'password'}
                label="Новый пароль"
                helperText={form.formState.errors.password?.message}
                error={!!form.formState.errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
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
                {...form.register('confirmPassword')}
                id="outlined-adornment-passwordCopy"
                type={showPasswordCopy ? 'text' : 'password'}
                label="Подтвердите пароль"
                helperText={form.formState.errors.confirmPassword?.message}
                error={!!form.formState.errors.confirmPassword?.message}
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
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

              <DarkButton
                disabled={!form.formState.isValid}
                variant="contained"
                className='dark-button'
                sx={{ my: 2, width: "100%", bgcolor: "#1E232C", fontSize: 16, fontWeight: 700, color: 'white', borderRadius: 2 }}
                onClick={() => setIsSuccessfull(true) }
              >
                Изменить пароль
              </DarkButton>
            </form>
             <Typography sx={{ mt: 2, fontSize: "18px" }}>Не получили код?<Link href='/user/login' className="font-bold text-info">Отправить снова</Link></Typography>
          </Box>

        </div>
      </div>
    </div>
  )
}

export default NewPassword;

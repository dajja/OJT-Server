import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  @HttpCode(201)
  async register(@Body() user: any) {
    const result = await this.authService.register(user);
    return {
      message: 'Register successfully',
      data: result,
    };
  }

  @Post('/login')
  @HttpCode(200)
  async login( @Body() user:{email:string,password:string}) {
    const users = await this.authService.login(user);
    return {
      message: 'Login successfully',
      data: users
    }
  }

  @Post("/login-google")
  @HttpCode(201)
  async loginByGoogle(@Body() body: any) {
    console.log('body====>', body);
    const user = await this.authService.loginByGoogle(body);

    console.log(user);
        return{
      message: 'Login successfully',
      data: user
    }
  }
  
  @Post("/login-facebook")
  @HttpCode(201)
  async loginByFaceBook(@Body() body: any) {
    const user = await this.authService.loginByFaceBook(body);
    // console.log(user);
        return{
      message: 'Login successfully',
      data: user
    }
    
  }
}

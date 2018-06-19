import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { OrderPage } from '../pages/order/order';
import { UserPage } from '../pages/user/user';
import { RegPage } from '../pages/reg/reg';
import { OrderStatusPage } from '../pages/orderStatus/orderStatus';
import { FavouritePage } from '../pages/Favourite/Favourite';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { ShopPage } from '../pages/shop/shop';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    OrderPage,
    OrderStatusPage,
    FavouritePage,
    UserPage,
    RegPage,
    LoginPage,
    ListPage,
    ShopPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    OrderPage,
    OrderStatusPage,
    FavouritePage,
    UserPage,
    RegPage,
    LoginPage,
    ListPage,
    ShopPage
    
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

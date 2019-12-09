import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
// import { Routing } from './app.routing';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { NgxGalleryModule } from 'ngx-gallery';
//import 'hammerjs';
import { ImageZoomModule } from 'angular2-image-zoom';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { HomeComponent } from './routes/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerVideoComponent } from './components/banner-video/banner-video.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductDetailComponent } from './routes/product-detail/product-detail.component';
import { LoginmodalComponent } from './components/loginmodal/loginmodal.component';
import { ModalModule, CarouselModule, AccordionModule, TabsModule, RatingModule } from 'ngx-bootstrap';
import { SignupmodalComponent } from './components/signupmodal/signupmodal.component';
import { ContactUsComponent } from './routes/contact-us/contact-us.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { FaqComponent } from './routes/faq/faq.component';
import { AboutusComponent } from './routes/aboutus/aboutus.component';
import { UserSidebarMenuComponent } from './routes/user-sidebar-menu/user-sidebar-menu.component';
import { MyprofileComponent } from './routes/myprofile/myprofile.component';
import { MyordersComponent } from './routes/myorders/myorders.component';
import { UserCurrentBidComponent } from './routes/user-current-bid/user-current-bid.component';
import { WishlistComponent } from './routes/wishlist/wishlist.component';
import { OpencaseComponent } from './routes/opencase/opencase.component';
import { ViewCaseComponent } from './routes/view-case/view-case.component';
import { ProductDetailTabComponent } from './components/product-detail-tab/product-detail-tab.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { SearchResultsComponent } from './routes/search-results/search-results.component';
import { SearchMultiplePartsComponent } from './components/search-multiple-parts/search-multiple-parts.component';
import { BillingDetailsComponent } from './routes/billing-details/billing-details.component';
import { ActiveRouteGuard } from './components/auth/activate-route-guard';
import { DeactiveRouteGuard } from './components/auth/deactivate-route-guard';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { MyOrdersComponent } from './routes/my-orders/my-orders.component';
import { CheckOutComponent } from './routes/check-out/check-out.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderDetailComponent } from './routes/order-detail/order-detail.component';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("792509255742-mt0f4d16u8m2985eci6p4m2vukafgqd5.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("487616714938981")
  }
]);



import { ImageUploadModule } from 'ng2-imageupload';
import { VendorDashboardComponent } from './routes/vendor-dashboard/vendor-dashboard.component';
import { VendorSidebarMenuComponent } from './routes/vendor-sidebar-menu/vendor-sidebar-menu.component';
import { VendorBidComponent } from './routes/vendor-bid/vendor-bid.component';
import { BidSummaryComponent } from './routes/bid-summary/bid-summary.component';
import { ProductSyncComponent } from './routes/product-sync/product-sync.component';
import { PlaceAdComponent } from './routes/place-ad/place-ad.component';
import { OffersListComponent } from './routes/offers-list/offers-list.component';
import { CreateOfferComponent } from './routes/create-offer/create-offer.component';
import { BuyPartsComponent } from './routes/buy-parts/buy-parts.component';
import { SellPartsComponent } from './routes/sell-parts/sell-parts.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNewsComponent,
    HomeComponent,
    HeaderComponent,
    SelectDropdownComponent,
    BannerComponent,
    BannerVideoComponent,
    ProductComponent,
    FooterComponent,
    SliderComponent,
    ProductDetailComponent,
    LoginmodalComponent,
    SignupmodalComponent,
    ContactUsComponent,
    InputComponent,
    TextareaComponent,
    FaqComponent,
    AboutusComponent,
    UserSidebarMenuComponent,
    MyprofileComponent,
    MyordersComponent,
    UserCurrentBidComponent,
    WishlistComponent,
    OpencaseComponent,
    ViewCaseComponent,
    ProductDetailTabComponent,
    PageNotFoundComponent,
    SearchResultsComponent,
    SearchMultiplePartsComponent,
    BillingDetailsComponent,
    MyOrdersComponent,
    BillingDetailsComponent,
    CheckOutComponent,
    PaymentMethodComponent,
    OrderDetailComponent,
    VendorDashboardComponent,
    VendorSidebarMenuComponent,
    VendorBidComponent,
    BidSummaryComponent,
    ProductSyncComponent,
    PlaceAdComponent,
    OffersListComponent,
    CreateOfferComponent,
    BuyPartsComponent,
    SellPartsComponent
  ],
  imports: [
    ImageZoomModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule, HttpModule,
    ReactiveFormsModule,
    RatingModule.forRoot(),
    ToasterModule,
    // SocialLoginModule.initialize(config),
    BrowserAnimationsModule,
    ImageUploadModule
  ],
  providers: [ActiveRouteGuard, Cookie, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

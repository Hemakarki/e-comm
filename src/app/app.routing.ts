import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';

import { CanActivate } from '@angular/router';

import { ProductDetailComponent } from './routes/product-detail/product-detail.component';

import { HomeComponent } from './routes/home/home.component';
import { ContactUsComponent } from './routes/contact-us/contact-us.component';
import { FaqComponent } from './routes/faq/faq.component';
import { AboutusComponent } from './routes/aboutus/aboutus.component';
import { MyprofileComponent } from './routes/myprofile/myprofile.component';
import { MyordersComponent } from './routes/myorders/myorders.component';
import { UserCurrentBidComponent } from './routes/user-current-bid/user-current-bid.component';
import { WishlistComponent } from './routes/wishlist/wishlist.component';
import { OpencaseComponent } from './routes/opencase/opencase.component';
import { ViewCaseComponent } from './routes/view-case/view-case.component';
import { SearchResultsComponent } from './routes/search-results/search-results.component';
import { BillingDetailsComponent } from './routes/billing-details/billing-details.component';
import { MyOrdersComponent } from './routes/my-orders/my-orders.component';
import { CheckOutComponent } from './routes/check-out/check-out.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { ActiveRouteGuard } from './components/auth/activate-route-guard';
import { DeactiveRouteGuard } from './components/auth/deactivate-route-guard';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { OrderDetailComponent } from './routes/order-detail/order-detail.component';
import { VendorDashboardComponent } from './routes/vendor-dashboard/vendor-dashboard.component';
import { VendorBidComponent } from './routes/vendor-bid/vendor-bid.component';
import { BidSummaryComponent } from './routes/bid-summary/bid-summary.component';
import { ProductSyncComponent } from './routes/product-sync/product-sync.component';
import { PlaceAdComponent } from './routes/place-ad/place-ad.component';
import { OffersListComponent } from './routes/offers-list/offers-list.component';
import { CreateOfferComponent } from './routes/create-offer/create-offer.component';
import { BuyPartsComponent } from './routes/buy-parts/buy-parts.component';
import { SellPartsComponent } from './routes/sell-parts/sell-parts.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'home',
    redirectTo: '/'
  }, {
    path: 'product-detail',
    component: ProductDetailComponent
  }, {
    path: 'contact-us',
    component: ContactUsComponent
  }, {
    path: 'faq',
    component: FaqComponent
  }, {
    path: 'aboutus',
    component: AboutusComponent
  }, {
    path: 'myprofile',
    component: MyprofileComponent
  }, {
    path: 'myorders',
    component: MyordersComponent,
    // canActivate: [ActiveRouteGuard]
  }, {
    path: 'user-current-bid',
    component: UserCurrentBidComponent,
    // canActivate: [ActiveRouteGuard]
  }, {
    path: 'wishlist',
    component: WishlistComponent,
    // canActivate: [ActiveRouteGuard]
  }, {
    path: 'opencase',
    component: OpencaseComponent,
    // canActivate: [ActiveRouteGuard]
  }, {
    path: 'view-case',
    component: ViewCaseComponent
  }, {
    path: 'search-results',
    component: SearchResultsComponent
  }, {
    path: 'billing-details',
    component: BillingDetailsComponent,
    // canActivate: [ActiveRouteGuard]
  }, {
    path: 'my-orders',
    component: MyOrdersComponent
  }, {
    path: 'check-out',
    component: CheckOutComponent
  }, {
    path: 'vendor-dashboard',
    component: VendorDashboardComponent
  }, {
    path: 'vendor-bid',
    component: VendorBidComponent
  }, {
    path: 'bid-summary',
    component: BidSummaryComponent
  }, {
    path: 'product-sync',
    component: ProductSyncComponent
  }, {
    path: 'place-ad',
    component: PlaceAdComponent
  }, {
    path: 'offers-list',
    component: OffersListComponent
  }, {
    path: 'create-offer',
    component: CreateOfferComponent
  }, {
    path: 'buy-parts',
    component: BuyPartsComponent
  }, {
    path: 'sell-parts',
    component: SellPartsComponent
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes), HttpModule],
  exports: [RouterModule, HttpModule]
})
export class AppRoutingModule { }



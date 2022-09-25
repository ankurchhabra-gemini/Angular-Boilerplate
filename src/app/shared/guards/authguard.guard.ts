import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { DataServiceService } from '../service/data-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {
  constructor(private service: DataServiceService, private router: Router) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canActivate() {
    if (!this.service.isLoggedIn()) {
      // this.router.navigate(['']);
      Swal.fire({
        text: 'Not Authorized',
        icon: 'warning',
        allowOutsideClick: false,
        cancelButtonText: 'OK',
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed === true) {
          sessionStorage.removeItem('token');
          this.service.userLogin = false;
          this.router.navigate(['/']);
        }
      });
    }

    return this.service.isLoggedIn();
  }
}

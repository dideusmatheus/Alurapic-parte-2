import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    
    constructor(private userService: UserService, private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        //19AA- caso o usuario nao esteja logado, vai pra tela de login, depois vá para app-rougin.module.ts
        if (!this.userService.isLogged()) {
            this.router.navigate(['']);
        }
        return true;
    }

}